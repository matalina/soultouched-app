<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './components/pages/Home.svelte';
  import Disclaimer from './components/ui/Disclaimer.svelte';
  import Character from './components/pages/Character.svelte';

  export let url = '';
</script>

<div id="app" class="md:w-96 mx-auto">
  <Router {url}>
    <section>
      <Route path="/" component={Home} />
      <Route path="/character" component={Character} />
    </section>
    <nav class="flex justify-center flex-wrap">
      <Link
        class="p-3 hover:text-purple-500 hover:underline focus:text-purple-500 focus:underline"
        to="/">Home</Link
      >
      <Link
        class="p-3 hover:text-purple-500 hover:underline focus:text-purple-500 focus:underline"
        to="/character">Character Sheet</Link
      >
    </nav>
    <Disclaimer />
  </Router>
</div>

<style lang="postcss">
</style>
