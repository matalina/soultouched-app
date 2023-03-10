<script type="ts">
import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import { creatureHealth, loot, nearbyLocationEven, nearbyLocationOdd, questTypes, RandomTable, shiftTable } from '../../lib/tables';
import ToggleContent from '../ui/ToggleContent.svelte';

const options: { [key: string]: RandomTable } = {
  [shiftTable.name]: shiftTable,
  [nearbyLocationEven.name]: nearbyLocationEven,
  [nearbyLocationOdd.name]: nearbyLocationOdd,
  [questTypes.name]: questTypes,
  [creatureHealth.name]: creatureHealth,
  [loot.name]: loot,
};

let selectedTable = '';
let table: RandomTable;
let total;
let roll;
let description;

function loadTable() {
  table = options[selectedTable];
  total = undefined;
  roll = undefined;
  description = undefined;
}

function rollOnTable() {
  roll = new DiceRoll(table.diceFormula);
  total = roll.total;

  for (let i in table.table) {
    const row = table.table[i];
    if (row.min === null && total <= row.max) description = row.description.toString();
    else if (row.max === null && total >= row.min)description = row.description.toString();
    else if (total >= row.min && total <= row.max) description = row.description.toString();
  }
}

</script>

<ToggleContent>
  <span slot="title">Random Tables</span>

  <select
    bind:value={selectedTable}
    on:change={loadTable}
    class="border py-2 px-3 w-full mb-2 capitalize"
  >
    <option value="">Select a Random Table</option>
    {#each Object.keys(options) as option}
      <option value={option}>{option}</option>
    {/each}
  </select>

  {#if table}
  <h3 class="text-2xl font-bold text-center mb-3">{table.name}</h3>
  <p class="mb-3">{table.description}</p>
  <table class="border">
    <thead>
      <tr><th colspan="2">{table.diceFormula}</th><th rowspan="2">Description</th></tr>
      <tr><th>Min</th><th>Max</th></tr>
    </thead>
    <tbody>
      {#each table.table as row}
        <tr>
          {#if row.min === row.max}
          <td colspan="2" class="text-center">{row.min}</td>
          {:else}
          <td class="text-center">{row.min}</td>
          <td class="text-center">{row.max}</td>
          {/if}
          <td>{row.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="flex justify-center my-5">
    <button
      on:click={rollOnTable}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Roll {table.diceFormula}</button>
  </div>
  {#if description}
    <div class="h-full w-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2">
      <small class="text-xs text-blue-500">({roll.output})</small><br/>
      {description}
    </div>
  {:else}
    <div class="py-2 px-3 mb-2">&nbsp;</div>
  {/if}
  {/if}
</ToggleContent>

<style lang="postcss">
  td, th {
    @apply px-3 py-2 border;
  }
</style>