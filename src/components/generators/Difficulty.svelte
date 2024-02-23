<script lang="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import { onMount } from "svelte";

  let difficulty: number;
  let intrusion = false;

  export const reroll = () => {
    difficulty = new DiceRoll('1d10').total;

    const roll = new DiceRoll('1d20').total;
    intrusion = roll === 20 || roll === 1;
  }

  onMount(() => {
    reroll();
  });
</script>

<div class="border border-gray-300 w-full text-3xl font-extrabold text-center py-2 relative">
  {difficulty}
  {#if intrusion}
    <div class="absolute w-6 top-0 right-0 fill-red-600 p-0.5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M144 368L0 320l82.3 96H197.5c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H493.7L576 320 432 368 544 0 336 296 312 128H264L240 304 96 192l48 176zM312 0H264V24 72 96h48V72 24 0zM32 448H0v64H32 544h32V448H544 32z"/></svg>
    </div>
  {/if}
</div>
