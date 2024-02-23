<script lang="ts">
  import { getRandomKeywords } from "../../lib/keywords";
  import { onMount } from "svelte";

  let keyword = '';

  export const reroll = () => {
    keyword = getRandomKeywords(1)[0];
  }

  onMount(() => {
    reroll();
  });
</script>

<div>{keyword}</div>
