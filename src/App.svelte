<script lang="ts">
  import Calendar from './components/widgets/Calendar.svelte';
  import RandomEncounters from "./components/generators/RandomEncounters.svelte";
  import Oracle from "./components/generators/Oracle.svelte";
  import Today from "./components/widgets/Today.svelte";
  import RealmDate from './components/generators/RealmDate.svelte';
  import Keywords from './components/generators/Keywords.svelte';
  import Campaign from './components/generators/Campaign.svelte';
  import { onMount } from 'svelte';

  let tab = "random";

  function setTab(tabName: string) {
    tab = tabName;
    localStorage.setItem('tab', tab);
  }

  onMount(() => {
    if(localStorage.getItem('tab')) {
      tab = localStorage.getItem('tab');
    }
  });
  </script>

  <main class="md:flex">
    <div class="mx-auto md:w-1/4">
      <Oracle />
      <Keywords />

    </div>
  </main>




  <style lang="postcss">

  </style>