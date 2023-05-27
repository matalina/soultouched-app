<script>
  import Markdown from "../ui/Markdown.svelte";
</script>

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
  <Markdown
  small={true}
  markdown={`
#### 1.230527.01
* changed change log to page
* added button menu to top of page
* added combat page 
  `}
  />
  <Markdown
  small={true}
  markdown={`
#### 1.230527.02
* Turned into installable PWA via vite plugin
  `}
  />
</div>