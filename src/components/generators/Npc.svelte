<script lang="ts">
import Modal from "../ui/Modal.svelte";

let generated = false;

let race = null;
let age = null;
let alignment = null;
let profession = null; // profession or class
let level = null;
let gender = null;
let disposition = null;
let status = null; // economic status

$: open = false;
function close(e: CustomEvent) {
  if (e.detail.name === 'npc') open = false;
}

function generateCharacter() {

  generated = true;
}

function reset() {
  generated = false;
  race = null;
  age = null;
  alignment = null;
  profession = null;
  level = null;
  gender = null;
  disposition = null;
  status = null;
  name = '';
}
</script>

<div class="md:w-1/2 flex flex-col p-3 border m-3">
  <header class="flex justify-between">
    <h2 class="text-3xl font-bold text-center mb-3">NPC Generator</h2>
    <button on:click={() => open = true}><i class="fa-thin fa-gear"></i></button>
  </header>
  <main>
    <div class="flex justify-center">
      <button on:click={generateCharacter}>Generate</button> <button on:click={reset}>Reset</button>
    </div>
    {#if generated}

    {/if}
  </main>
</div>

<Modal on:close={close} name="npc" {open} size="large">
  <span slot="header">NPC Settings</span>
  <span slot="footer">Footer</span>

  <div>
    This is content;
  </div>
  <p>More content</p>
</Modal>

<style>

</style>