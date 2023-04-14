<script type="ts">
import ToggleContent from '../ui/ToggleContent.svelte';
</script>

<ToggleContent>
  <span slot="title">NPC Details</span>

  <div class="flex justify-center">
    <a
      target="_blank" rel="noreferrer"
      href="https://www.fakenamegenerator.com/"
      class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >
      Fake Name Generator
    </a>
    <a
      target="_blank" rel="noreferrer"
      href="https://www.rangen.co.uk/chars/appgen.php"
      class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >
      Description Generator
    </a>
  </div>
</ToggleContent>