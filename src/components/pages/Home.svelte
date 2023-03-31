<script lang="ts">
  import Oracle from '../generators/Oracle.svelte';
  import Keywords from '../generators/Keywords.svelte';
  import DiceRoller from '../generators/DiceRoller.svelte';
  import RandomTables from '../generators/RandomTables.svelte';
  import CypherNpc from '../generators/cypher/CypherNPC.svelte';
</script>

<main class="md:flex">
  <div class="mx-auto md:w-1/4">
    <Oracle />
    <DiceRoller />
    <CypherNpc />
    <RandomTables />
    <Keywords />
  </div>
</main>