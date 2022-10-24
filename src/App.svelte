<script lang="ts">
import Calendar from './components/widgets/Calendar.svelte';
import MapEncounters from "./components/generators/MapEncounters.svelte";
import Oracle from "./components/generators/Oracle.svelte";
import Today from "./components/widgets/Today.svelte";
import RealmDate from './components/generators/RealmDate.svelte';
    import Keywords from './components/generators/Keywords.svelte';

</script>

<main class="md:flex">
  <div class="flex flex-col md:w-1/4">
    <Keywords />
    <Oracle />
    <h2 class="text-3xl font-bold text-center mb-3">Today</h2>
    <Today />
    <Calendar />
    <RealmDate />
  </div>
  <MapEncounters />
</main>




<style lang="postcss">

</style>