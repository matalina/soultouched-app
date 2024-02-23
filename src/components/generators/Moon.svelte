<script lang="ts">
  import { moonPhases, rollOnTable } from "../../lib/tables";
  import FirstHalf from "../../assets/fh.png"
  import FullMoon from "../../assets/fm.png"
  import LastHalf from "../../assets/lh.png"
  import NewMoon from "../../assets/nm.png"
  import WaningCrescent from "../../assets/wc.png"
  import WaningGibbous from "../../assets/wg.png"
  import WaxingCrescent from "../../assets/wxc.png"
  import WaxingGibbous from "../../assets/wxg.png"
  import { onMount } from "svelte";

  let moon;
  const phases = [
    NewMoon,
    WaningCrescent,
    LastHalf,
    WaningGibbous,
    FullMoon,
    WaxingGibbous,
    FirstHalf,
    WaxingCrescent,
  ];
  $: phase = phases[(moon?.roll.total -1).toString()];
  $: console.log(moon);
  export const reroll = () => {
    moon = rollOnTable(moonPhases)
  }

  onMount(() => {
    reroll();
  });
</script>

<div class="w-full h-full">
  <img src="{phase}" alt="{moon?.description}"/>
</div>
