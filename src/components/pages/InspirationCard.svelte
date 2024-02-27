<script lang="ts">
  import ToggleContent from "../ui/ToggleContent.svelte";
  import Difficulty from "../generators/Difficulty.svelte";
  import Oracle from "../generators/Oracle.svelte";
  import { SvelteComponent, onMount } from "svelte";
  import Keyword from "../generators/Keyword.svelte";
  import Deck from "../generators/Deck.svelte";
  import Color from "../generators/Color.svelte";
  import Die from "../generators/Die.svelte";
  import Moon from "../generators/Moon.svelte";
  import Weather from "../generators/Weather.svelte";
  import Terrain from "../generators/Terrain.svelte";
  import Landmarks from "../generators/Landmarks.svelte";

  let question = '';
  let inputBox;

  const generators: {[key:string]: SvelteComponent} = {};

  function reroll() {
    const keys = Object.keys(generators);
    for (let i in keys) {
      const key = keys[i];
      const generator = generators[key];
      generator.reroll();
    }
  }

  function onEnter(e: KeyboardEvent) {
    if(e.key === 'Enter') {
      reroll();
    }
  }

  onMount(() => {
    inputBox.focus();
  });
</script>

<ToggleContent hide={false}>
  <span slot="title">Inspiration Card</span>
  <label for="question">
    <span class="text-xs text-gray-400">Ask a Question:</span>
    <div class="flex">
      <input type="text" id="question" bind:this={inputBox} bind:value={question} class="border py-2 px-3 w-3/4 mb-2" on:keydown={onEnter}/>
      <button class="border py-2 px-3 w-1/4 mb-2" on:click={reroll}>Roll</button>
    </div>
  </label>
  <div class="flex gap-2">

    <div class="flex flex-col gap-2 w-1/6">
      <Difficulty bind:this={generators.difficulty}/>
      <div class="flex-grow">
        <Color bind:this={generators.color}/>
      </div>
    </div>

    <div class="w-1/2 border border-gray-300 p-2">
      <div class="flex p-1">
        <div class="w-1/2">Likely</div>
        <Oracle probability={3} bind:this={generators.likelyOracle}/>
      </div>
      <div class="flex p-1">
        <div class="w-1/2">50/50</div>
        <Oracle bind:this={generators.averageOracle}/>
      </div>
      <div class="flex p-1">
        <div class="w-1/2">Unlikely</div>
        <Oracle probability={-3} bind:this={generators.unlikelyOracle}/>
      </div>
    </div>
    <div class="w-1/3 mt-2">
      <div class="flex gap-2">
        <div class="w-1/2">
          <Moon bind:this={generators.moon}/>
        </div>
        <div class="w-1/2">
          <Weather bind:this={generators.weather}/>
        </div>
      </div>
      <div class="flex gap-2 mt-2">
        <div class="w-1/2">
          <Terrain bind:this={generators.terrain}/>
        </div>
        <div class="w-1/2">
          <Landmarks bind:this={generators.landmarks}/>
        </div>
      </div>
    </div>

  </div>

  <div class="flex gap-1 mt-2">
    <Die size={4} bind:this={generators.d4} />
    <Die size={6} bind:this={generators.d6} />
    <Die size={8} bind:this={generators.d8} />
    <Die size={10} bind:this={generators.d10} />
    <Die size={12} bind:this={generators.d12} />
    <Die bind:this={generators.d20} />
    <Die size={100} bind:this={generators.d100} />
  </div>

  <div class="flex gap-2 mt-2">
    <div class="w-1/3 border border-gray-300 p-2">
      <Keyword bind:this={generators.keyword1}/>
    </div>
    <div class="w-1/3 border border-gray-300 p-2">
      <Keyword bind:this={generators.keyword2}/>
    </div>
    <div class="w-1/3 border border-gray-300 p-2">
      <Keyword bind:this={generators.keyword3}/>
    </div>
  </div>

  <div class="w-full mt-2 flex flex-col gap-2">
    <Deck type="playing" bind:this={generators.playingCards}/>
    <Deck type="tarot" bind:this={generators.tarotDeck}/>
  </div>
</ToggleContent>
