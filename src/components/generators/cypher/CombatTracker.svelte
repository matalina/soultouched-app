<script>
  import ToggleContent from '../../../components/ui/ToggleContent.svelte';
  import MiniCreateCreature from './tracker/MiniCreateCreature.svelte';

  let step = 1;
  let newCreature = false;
  let creature = 0;
  let character = 0;
  $: creatures = JSON.parse(sessionStorage.getItem('creatures')) || [];

  function openCreatureCreation() {
    newCreature = true;
  }

  function addParticipant(participant) {
    participants.push({
      participant,
      initiative: 0,
    });
  }

  let participants = [];

</script>

<ToggleContent hide={false}>
  <span slot="title">Combat Tracker</span>

  {#if step === 1}
  <button on:click={openCreatureCreation} class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">
    <i class="fa-solid fa-plus"></i>
    Create NPC/Creature
  </button>

  <label for="saved" class="flex">
    <select
      bind:value={creature}
      class="border py-2 px-3 w-full mb-2"
    >
      <option value="0">Saved NPC/Creature</option>
      {#each creatures as value, i}
        <option value={i}>{value.name}</option>
      {/each}
    </select>
    <button
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
      on:click={() => addParticipant(creature)}
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </label>

  <label for="saved" class="flex">
    <select
      bind:value={character}
      class="border py-2 px-3 w-full mb-2"
    >
      <option value="0">Saved Character</option>
      {#each creatures as value, i}
        <option value={i}>{value.name}</option>
      {/each}
    </select>
    <button
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
      on:click={() => addParticipant(character)}
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </label>

  {#if newCreature}
  <MiniCreateCreature />
  {/if}

  {#if participants.length > 0}
    {#each participants as p}
      <label>
        <span>{p.participant.level?`L${p.participant.level} `:''}{p.participant.name}</span>
        <input type="number"  bind:value={p.initiative}/>
      </label>
    {/each}
    <button on:click={() => step = 2}>Start</button>
  {/if}
  
  {/if}
</ToggleContent>