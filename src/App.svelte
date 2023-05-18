<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './components/pages/Home.svelte';
  import Disclaimer from './components/ui/Disclaimer.svelte';

  export let url = '';
</script>

<Router url={url}>

  <section>
    <Route path="/" component={Home}/>
  </section>
  <Disclaimer />
</Router>

<style lang="postcss">

</style>