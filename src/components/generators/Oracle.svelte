<script lang="ts">
  import { onMount } from "svelte";
  import { RandomTable, rollOnTable } from "../../lib/tables";

  export let probability = 0;
  let answer: string;

  const oracle: RandomTable = {
    name: "Oracle",
    description: "Ask a yes or no question and get an answer",
    diceFormula: `1d20 + ${probability}`,
    table: [
      { min: null, max: 2, description: 'No, and' },
      { min: 3, max: 7, description: 'No' },
      { min: 8, max: 9, description: 'No, but' },
      { min: 10,max: 10, description: 'Maybe' },
      { min: 11,max: 12, description: 'Yes, but' },
      { min: 13,max: 18, description: 'Yes' },
      { min: 19,max: null, description: 'Yes, and' },
    ]
  };

  export const reroll = () => {
    answer = rollOnTable(oracle).description;
  }

  onMount(() => {
    reroll();
  });
</script>

<div>{answer}</div>
