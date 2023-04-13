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

<footer class="text-xs text-justify md:w-1/4 mx-auto p-3">
  <p class="mb-2">This product is an independent production and is not affiliated with Monte Cook Games, LLC. It is published under the Cypher System Open License, found at <a class="text-purple-800" href="http://csol.montecookgames.com">http://csol.montecookgames.com</a>.</p>

  <p>CYPHER SYSTEM and its logo are trademarks of Monte Cook Games, LLC in the U.S.A. and other countries. All Monte Cook Games characters and character names, and the distinctive likenesses thereof, are trademarks of Monte Cook Games, LLC.</p>
</footer>