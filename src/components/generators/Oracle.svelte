<script lang="ts">
import { getRandomKeywords } from "../../lib/keywords";
import { Dice } from "../../lib/dice";


const modifier = [
  { likelihood: 'impossible', mod: -8 },
  { likelihood: 'highly unlikely', mod: -5 },
  { likelihood: 'unlikely', mod: -3 },
  { likelihood: 'possible', mod: 0 },
  { likelihood: 'likely', mod: +3 },
  { likelihood: 'highly likely', mod: +5 },
  { likelihood: 'a certainty', mod: +8 },
];

const oracle = [
  [1, 2, 'No, and'],
  [3, 7, 'No'],
  [8, 9, 'No, but'],
  [10, 10, 'Maybe'],
  [11, 12, 'Yes, but'],
  [13, 18, 'Yes'],
  [19, 20, 'Yes, and'],
];

$: question = '';
$: likelihood = 3;
$: answer = '';
$: roll = 0;
$: ask = 0;
$: isAndOrBut = answer.includes('and') || answer.includes('but');
$: keywords = [];

function getAnswer() {
  const die = new Dice();
  roll = die.roll().add();
  ask = roll + modifier[likelihood].mod;
  if (ask < 0) return 'No, and';
  if (ask > 20) return 'Yes, and';
  for (let i in oracle) {
    const range = oracle[i];
    if(ask >= range[0] && ask <= range[1]) answer = range[2].toString();
  }
  if (answer.includes('and') || answer.includes('but')) {
    keywords = [...getRandomKeywords()];
  }
  return answer;
}

function reset() {
  likelihood = 3;
  answer = '';
  question = '';
  roll = 0;
  ask = 0;
  keywords = [];
}
</script>

<div class="md:full flex flex-col p-3 border m-3">
  <h2 class="text-3xl font-bold text-center mb-3">Oracle</h2>
  <form on:submit|preventDefault={getAnswer} class="flex flex-col">
    <label for="likelyhood">
      <select bind:value={likelihood} class="border py-2 px-3 w-full mb-2">
        {#each modifier as mod, i}
        <option value={i}>{mod.likelihood}</option>
        {/each}
      </select>
    </label>
    <label for="question">
      <input type="text" id="question" bind:value={question} class="border py-2 px-3 w-full mb-2" />
    </label>
  </form>

  <div class="justify-center w-full">
    {#if answer !== ''}
    <div class="h-full w-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2">
      <small class="text-xs text-blue-500">({roll} + {modifier[likelihood].mod} = {ask})</small>
      {question}: {answer}
      {#if isAndOrBut}
        {JSON.stringify(keywords)}
      {/if}
    </div>
    {:else}
    <div class="py-2 px-3 mb-2">&nbsp;</div>
    {/if}
  </div>

  <button on:click={reset}>Reset</button>
</div>

<style>

</style>