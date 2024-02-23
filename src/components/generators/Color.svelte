<script lang="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import { onMount } from "svelte";
  let hue: number;
  let sat: number;
  let light: number;

  export const reroll = () => {
    hue = new DiceRoll('1d360-1').total;
    sat = new DiceRoll('1d101-1').total;
    light = new DiceRoll('1d101-1').total;
  }

  onMount(() => {
    reroll();
  });
</script>

<div class="w-full h-full border border-gray-300" style="{`background:hsl(${hue},${sat}%,${light}%);`}">&nbsp;</div>
