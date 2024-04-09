<script lang="ts">
  import { TarotCard, tarotDeck } from "../../lib/tarot";
  import { Card, Deck, playingCards, shuffle } from "../../lib/decks";
  import { onMount } from "svelte";
  import Modal from "../ui/Modal.svelte";

export let type = "playing"; // playing or tarot
const decks = {
  playing: playingCards,
  tarot: tarotDeck,
};

let deck = [...shuffle(decks[type])];
let show: Card;
let open = false;

$: count = deck.length;

export const reroll = () => {
  deck = [...shuffle(decks[type])];
  draw();
}

function draw() {
  show = deck.shift();
  deck = [...deck];
}

function moreInfo() {
  open = !open;
}

onMount(() => {
  draw();
})
</script>
<div class="relative">
  <div class="border border-gray-300 p-2">
    <div class="flex gap-2 items-center">
      <div class="bg-gray-200 text-gray-400 rounded-full px-1 py-0.5 text-xs">{count}</div>
      <div class="capitalize flex-grow relative">
        {show?.name}
        {#if type === 'tarot'}
          <button on:click={moreInfo} class="text-lg w-5 fill-gray-300 hover:fill-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H272V240c0-8.8-7.2-16-16-16H216c-8.8 0-16 7.2-16 16s7.2 16 16 16h24v96H208zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
          </button>
        {/if}
      </div>
      <div>
        {#if count === 0}
          <button class="border py-2 px-3" on:click={reroll}>Shuffle</button>
        {:else}
          <button class="border py-2 px-3" on:click={draw}>Draw</button>
        {/if}
      </div>
    </div>
  </div>

  {#if type === 'tarot'}
  <div class="absolute -bottom-[50vh]">
    <Modal {open} size="x-large" name="Tarot More Information" on:close={() => open = false}>
      <h3 slot="header" class="capitalize font-bold">{show?.name}</h3>
      <div class="flex flex-col gap-2">
        <p>{show?.keywords.join(', ')}</p>
        <p><strong>Light:</strong> {show?.meanings.light.join(', ')}</p>
        <p><strong>Shadow:</strong> {show?.meanings.shadow.join(', ')}</p>
        <p><strong>Fortune:</strong> {show?.fortuneTelling.join(', ')}</p>
      </div>
    </Modal>
  </div>
  {/if}
  </div>
