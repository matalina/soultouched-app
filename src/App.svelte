<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './components/pages/Home.svelte';
  import Disclaimer from './components/ui/Disclaimer.svelte';
  import Character from './components/pages/Character.svelte';

  export let url = '';
</script>

<Router url={url}>

  <section>
    <Route path="/" component={Home}/>
    <Route path="/character" component={Character}/>
  </section>
  <Disclaimer />
</Router>

<style lang="postcss">

</style>