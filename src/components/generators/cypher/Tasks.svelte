<script lang="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import ToggleContent from '../../ui/ToggleContent.svelte';
  import { getRandomKeywords } from '../../../lib/keywords';
  import { getRandomCyphers, printCypher } from "../../../lib/cypher/cyphers";

  let target = '0';
  let oldTarget = '0';
  let question = '';
  let oldQuestion = '';
  let roll = undefined;
  let answer = '';
  let keywords = null;

  const developer = [
    () => '<strong>Automatic Failure</strong>',
    () => { keywords = getRandomKeywords(3); return '<strong>And...</strong>';},
    () => 'None',
    () => { keywords = getRandomKeywords(3); return '<strong>And...</strong>';},
    () => 'None',
    () => { keywords = getRandomKeywords(3); return '<strong>But...</strong>';},
    () => 'None',
    () => { keywords = getRandomKeywords(3); return '<strong>But...</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>GM Intrusion: +1XP</strong>';},
    randomCyphers,
    randomCyphers,
    () => { keywords = getRandomKeywords(3); return '<strong>GM Intrusion: +1XP</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>PC Inhibitor</strong>';},
    () => 'None',
    () => { keywords = getRandomKeywords(3); return '<strong>PC Enabler</strong>';},
    () => 'None',
    () => { keywords = getRandomKeywords(3); return '<strong>NPC Inhibitor</strong>';},
    () => 'None',
    () => { keywords = getRandomKeywords(3); return '<strong>NPC Enabler</strong>';},
    () => '<strong>Automatic Success</strong>',
  ];

  function randomCyphers(): string {
    let roll = new DiceRoll('1d6');
    let cyphers = getRandomCyphers(roll.total);
    let output = `<strong>Find 1d6 Cyphers</strong><br/>`;
    output += `<small class="font-normal text-xs text-blue-500">${roll.output}</small><br/>`;
    output += `<ol class="list-decimal list-inside font-normal text-xs text-justify">`
    for(let i in cyphers) {
      output += `<li>${printCypher(cyphers[i])}</li>`;
    }
    output += `</ol>`;
    return output;
  }

  function answerQuestion(value: number) {
    let dev = new DiceRoll('1d20');
    const output = developer[dev.total - 1]();
    let string = '';
    if (value - parseInt(target) >= 0) {
      string += '<strong>Success</strong>';
    }
    else {
      string += `<strong>Fail</strong>`;
      if (value === 1) {
        string += `<br/><strong>GM Intrusion: No XP</strong>`
      }
    }
    return `${string}<br/>Developer: ${output}<br/><small class="font-normal text-xs text-blue-500">(${dev.output})</small>`;
  }

  function generate() {
    answer = '';
    keywords = null;
    oldQuestion = question;
    oldTarget = target;
    roll = new DiceRoll('1d20');
    answer = answerQuestion(roll.total);
    // clear input fields
    question = '';
  }

</script>


<ToggleContent  hide={false}>
  <span slot="title">Tasks</span>
  <form class="flex flex-col" on:submit|preventDefault={generate}>
    <label for="question">
      Task:
      <input type="text" id="question" bind:value={question} class="border py-2 px-3 w-full mb-2" />
    </label>
    <label for="target">
      Target:
      <input type="number" id="target" bind:value={target} class="border py-2 px-3 w-full mb-2" />
    </label>
    <div class="flex justify-center">
      <button
        type="submit"
        class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
      >Answer</button>
    </div>

  </form>

  {#if answer}
    <div class="w-full h-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2">
      <em><strong>Q:</strong> {oldQuestion} ({oldTarget})</em><br/>
      <small class="text-xs text-blue-500">({roll.output})</small><br/>
      {@html answer}<br/>
      {#if keywords}
        {keywords.join(', ')}<br/>
      {/if}
    </div>
  {/if}
</ToggleContent>