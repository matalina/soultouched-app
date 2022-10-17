<script type="ts">
import { onMount } from "svelte";


$: width = 30;
$: length = 30;
$: count = 10;

$: twidth = 30;
$: wheight = width * twidth;
$: lheight = length * twidth;


$: encounters = [];
$: mapUrl = 'https://carver-sphere.just-us.net/images/travel-carver-sphere.jpg';

$: console.log(encounters);

function generate() {
  encounters = [];
  for (let i = 0; i < count; i++) {
    let index = randomCoordinate();
    if (!encounters[index[0]]) encounters[index[0]] = [];

    encounters[index[0]][index[1]] = true;
  }
}

function randomCoordinate() {
  let w = Math.floor((Math.random() * 1000) % (width-2));
  let l = Math.floor((Math.random() * 1000) % (length-2));

  console.log([w,l]);
  return [w,l];
}

onMount(() => {
  generate();
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
  <button class="py-2 px-3 mb-2" on:click={generate}>Regenerate</button>

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