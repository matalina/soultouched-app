<script>
  import Markdown from './Markdown.svelte';
  let open = false;
</script>

<div class="flex justify-center">
  <button
    class="p-3 text-xs text-center text-gray-400 hover:text-purple-400"
    on:click={() => (open = !open)}
  >
    version 1.230525.02
  </button>
</div>

{#if open}
  <div class="prose border p-3 mb-3 rounded-xl">
    <h3>Change Log</h3>
    <Markdown
      small={true}
      markdown={`
#### 1.230525.02
* added version and change log
* added Markdown block
* added tailwind typography for easier formatting of text
    `}
    />
    <Markdown
      small={true}
      markdown={`
#### 1.230525.03
* fixed loot cypher description output
    `}
    />
    <Markdown
      small={true}
      markdown={`
#### 1.230525.04
* moved version to top
    `}
    />
  </div>
{/if}

<style>
</style>
