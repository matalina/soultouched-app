<script lang="ts">
  import { getDeveloper } from '../../../lib/developer';
  import ToggleContent from '../../ui/ToggleContent.svelte';

  let developer = null;
  let roll = null;

  function generate() {
    const result = getDeveloper();
    developer = result.developer;
    roll = result.roll;
  }
</script>

<ToggleContent>
  <span slot="title">Developer</span>

  <div class="flex justify-center">
    <button
      on:click={generate}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
      >Generate</button
    >
  </div>

  {#if developer}
    <div
      class="w-full h-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2"
    >
      {@html developer}
      <small class="text-xs text-blue-500">({roll.output})</small>
    </div>
  {/if}
</ToggleContent>
