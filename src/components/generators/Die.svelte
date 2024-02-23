<script lang="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import { onMount } from "svelte";

  let die: number;

  export let size:number = 20;
  export const reroll = () => {
    die = new DiceRoll(`1d${size}`).total;
  }

  onMount(() => {
    reroll();
  });
</script>

<div class="border border-gray-300 w-full text-3xl text-center py-2 relative">
  <div class="font-extrabold ">{die}</div>
  <div class="text-xs text-gray-400">1d{size}</div>
</div>
