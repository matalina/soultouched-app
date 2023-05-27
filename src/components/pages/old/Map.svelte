<script lang="ts">
  import { generateTile, landTypes,  mapOptions } from '../../../data/map';
  import { map } from '../../../lib/store';

  $: isNewMap = $map === null;

  let type = '';
  let option = '';

  function randomLandType() {
    const len = Object.keys(landTypes).length;
    const index = (Math.floor(Math.random() * len) % len) + 1;
    return landTypes[index];
  }

  function newMap() {
    if(type === 'random') {
      type = randomLandType();
    }
    $map = generateTile(type, option);
  }

  function resetMap() {
    $map = null;
  }
</script>

{#if isNewMap}
<form on:submit={newMap}>
  <select  bind:value={type} class="border py-2 px-3 w-full mb-2">
    <option value="">Select a Land Type</option>
    <option value="random">Random</option>
    {#each Object.keys(landTypes) as key}
      <option value={key}>{landTypes[key]}</option>
    {/each}
  </select>
  <select bind:value={option} class="border py-2 px-3 w-full mb-2">
    <option value="">Select Map Type</option>
    {#each mapOptions as opt}
      <option value={opt}>{opt}</option>
    {/each}
  </select>
  <button class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">Generate</button>
</form>
{/if}

<button on:click={resetMap}>Reset</button>