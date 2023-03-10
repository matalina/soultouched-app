<script type="ts">
import { getRandomKeywords } from '../../lib/keywords';
import ToggleContent from '../ui/ToggleContent.svelte';


let count;
$: keywords = [];

function generate() {
    keywords = getRandomKeywords(count.value);
}
</script>

<ToggleContent>
  <span slot="title">Keywords</span>

  <form on:submit|preventDefault={generate} class="flex flex-col">
    <input bind:this={count} class="border py-2 px-3 w-full mb-2" value="3"/>
    {#if keywords.length}
    <div class="w-full h-[3rem] bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2">
        {JSON.stringify(keywords)}
    </div>
    {:else}
    <div class="py-2 px-3 mb-2">&nbsp;</div>
    {/if}
    <div class="flex justify-center">
      <button type="submit" class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">
        Generate
      </button>
    </div>
  </form>
</ToggleContent>