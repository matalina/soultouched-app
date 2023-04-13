<script>
  import DiceRoller from "../generators/DiceRoller.svelte";
  import CypherNpc from "../generators/cypher/CypherNPC.svelte";
  import GameMaster from "../generators/cypher/GameMaster.svelte";
  import Status from "../generators/cypher/Status.svelte";
</script>

<main class="md:flex">
  <div class="mx-auto md:w-1/4">
    <Status />
    <GameMaster />
    <CypherNpc />
    <DiceRoller />
  </div>
</main>