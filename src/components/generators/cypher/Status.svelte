<script lang="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import ToggleContent from '../../ui/ToggleContent.svelte';

  const statuses = [
    {
      status: 'Solid',
      target: 3,
      guidance: 'Scene situation is dull, nothing interesting is happening'
    },
    {
      status: 'Stable',
      target: 6,
      guidance: 'Events are underway and are proceeding as expected'
    },
    {
      status: 'Average',
      target: 9,
      guidance: 'Situation has the potential for the unexpected'
    },
    {
      status: 'Unstable',
      target: 12,
      guidance: 'Events require players to be on high alert'
    },
    {
      status: 'Insane',
      target: 15,
      guidance: 'Players in constant danger, anything could happen'
    },
    {
      status: 'Chaos',
      target: 18,
      guidance: 'Situation is beyond all control'
    },
  ];
  let status: number | null = null;

  function generate() {
    status = (new DiceRoll('1d6')).total;
  }

</script>


<ToggleContent>
  <span slot="title">Adventure Status</span>
  <div class="flex justify-center">
    <button
      on:click={generate}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Generate</button>
  </div>

  {#if status}
    <div class="w-full h-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2">
      {statuses[status-1].status} ({statuses[status-1].target})<br/>
      <em class="text-xs italic">{statuses[status-1].guidance}</em>
    </div>
  {/if}
</ToggleContent>