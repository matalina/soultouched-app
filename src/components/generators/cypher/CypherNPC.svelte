<script lang="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import ToggleContent from '../../ui/ToggleContent.svelte';

  let npc = '';

  function generate() {
    const level = (new DiceRoll('1d10')).total;;
    const hp = (new DiceRoll(`3 * ${level - 1} + 1d20`)).total;
    const damage = (new DiceRoll(`1d4 + ${level}`)).total;

    npc = `L${level} HP ${hp}, damage ${damage}`;
  }

</script>


<ToggleContent>
  <span slot="title">Simple Cypher System NPC</span>
  <div class="flex justify-center">
    <button
      on:click={generate}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Generate</button>
  </div>

  {#if npc}
    <div class="w-full h-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2">
      {npc}
    </div>
  {/if}
</ToggleContent>