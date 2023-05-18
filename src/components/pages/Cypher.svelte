<script>
  import RandomTables from "../generators/RandomTables.svelte";
  import CypherNpc from "../generators/cypher/CypherNPC.svelte";
  import GameMaster from "../generators/cypher/GameMaster.svelte";
  import Status from "../generators/cypher/Status.svelte";
  import Tasks from "../generators/cypher/Tasks.svelte";
</script>

<main class="md:flex">
  <div class="mx-auto md:w-1/4">
    <Tasks />
    <Status />
    <CypherNpc />
    <GameMaster />
  </div>
</main>
