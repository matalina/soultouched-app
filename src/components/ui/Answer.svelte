<script type="ts">
  export let display = false;
</script>

{#if display}
  <div class="h-full w-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2">
    <slot></slot>
  </div>
{:else}
  <div class="py-2 px-3 mb-2">&nbsp;</div>
{/if}
