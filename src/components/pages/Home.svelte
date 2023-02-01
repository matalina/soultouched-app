<script lang="ts">
  import Oracle from '../generators/Oracle.svelte';
  import Keywords from '../generators/Keywords.svelte';
  import DiceRoller from '../generators/DiceRoller.svelte';
</script>

<main class="md:flex">
  <div class="mx-auto md:w-1/4">
    <Oracle />
    <Keywords />
    <DiceRoller />
  </div>
</main>