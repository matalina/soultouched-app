<script type="ts">
import { onMount } from "svelte";


$: width = 30;
$: length = 30;
$: count = 10;

$: encounters = [];
$: mapUrl = 'https://carver-sphere.just-us.net/images/travel-carver-sphere.jpg';

$: twidth = 30;
$: wheight = width * twidth;
$: lheight = length * twidth;
$: hasEncounter = encounters.length !== 0;

function save() {
  localStorage.setItem('encounters', JSON.stringify(encounters));
  localStorage.setItem('width', width.toString());
  localStorage.setItem('length', length.toString());
  localStorage.setItem('count', count.toString());
  localStorage.setItem('mapUrl', mapUrl);
}

function generate() {
  encounters = [];
  for (let i = 0; i < count; i++) {
    let index = randomCoordinate();
    if (!encounters[index[0]]) encounters[index[0]] = [];

    encounters[index[0]][index[1]] = true;
  }
}

function clear() {
  encounters = [];
  width = 30;
  length = 30;
  count = 10;
  mapUrl = 'https://carver-sphere.just-us.net/images/travel-carver-sphere.jpg';
  save();
  generate();
}

function randomCoordinate() {
  let w = Math.floor((Math.random() * 1000) % (width-2));
  let l = Math.floor((Math.random() * 1000) % (length-2));

  return [w,l];
}

onMount(() => {
  encounters = JSON.parse(localStorage.getItem('encounters')) || [];
  if (encounters.length) {
    width = parseInt(localStorage.getItem('width'));
    length = parseInt(localStorage.getItem('length'));
    count = parseInt(localStorage.getItem('count'));
    mapUrl = localStorage.getItem('mapUrl');
  }
  else {
    generate();
  }
});
</script>

<div class="md:w-3/4 flex flex-col p-3 border m-3">
  <h2 class="text-3xl font-bold text-center mb-3">Random Encounters</h2>
  <label class="flex">
    <span class="w-1/3">Width</span>
    <input bind:value={width} on:change={generate} class="border py-2 px-3 w-2/3 mb-2"/>
  </label>
  <label class="flex">
    <span class="w-1/3">Height</span>
    <input bind:value={length} on:change={generate} class="border py-2 px-3 w-2/3 mb-2"/>
  </label>
  <label class="flex">
    <span class="w-1/3">Number of Encounters</span>
    <input bind:value={count} on:change={generate} class="border py-2 px-3 w-2/3 mb-2"/>
  </label>
  <label class="flex">
    <span class="w-1/3">Map Url</span>
    <input bind:value={mapUrl} on:change={generate} class="border py-2 px-3 w-2/3 mb-2"/>
  </label>
  <div>
    <button class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800" on:click={generate}>Regenerate</button>
    <button class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800 {`${!hasEncounter?'disabled text-purple-400 border-purple-400 cursor-not-allowed':''}`}" on:click={save} disabled={!hasEncounter}>Save</button>
    <button class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800" on:click={clear}>Clear</button>
  </div>


  <div>
    {#if encounters}
    <h3 class="text-2xl font-bold text-center mb-3">Encounters</h3>
    <ul class="flex justify-between flex-wrap mb-5">
      {#each Array(width) as _,i}
      {#each Array(length) as _,j}
      {#if encounters?.[i]?.[j]}
      <li>{`[${j+2},${i+2}]`}</li>
      {/if}
      {/each}
      {/each}
    </ul>
    {/if}
  </div>


  <table width={wheight} height={lheight} class="text-white mx-auto border bg-origin-border bg-contain"  style={`background-image: url(${mapUrl})`}>
    <thead>
      <tr>
        <th class="border">01</th>
        {#each Array(length-1) as _,h}
        <th class="border">{(h+2).toString().padStart(2,'0')}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each Array(width-1) as _,i}
      <tr>
        <th class="border">{(i+2).toString().padStart(2,'0')}</th>
        {#each Array(length-1) as _,j}
        <td class="border text-center text-white font-bold {`w-{[px]`}">
          {#if encounters?.[i]?.[j]}
          X
          {/if}
        </td>
        {/each}
      </tr>
      {/each}
    </tbody>
  </table>
</div>