<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './components/pages/Home.svelte';
  import Map from './components/pages/Map.svelte';

  export let url = '';
</script>


<Router url={url}>
  <!--
  <nav class="md:flex md:w-1/4 mx-auto">
    <Link
      to="/"
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Home</Link>
    <Link
      to="map"
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Map</Link>
  </nav>
  -->
  <section>
    <Route path="/" component={Home}/>
    <!--<Route path="map" component={Map}/> -->
  </section>
</Router>

<style lang="postcss">

</style>