<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './components/pages/Home.svelte';
  import Chaos from './components/pages/Chaos.svelte';
  import Realm from './components/pages/Realm.svelte';

  export let url = '';
</script>


<Router url={url}>
  <nav class="md:flex md:w-1/4 mx-auto p-3 border-b border-purple-800">
    <Link
      to="/"
      class="border py-2 px-3 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Home</Link>
    <Link
      to="chaos"
      class="border py-2 px-3 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Chaos</Link>
    <Link
      to="realm"
      class="border py-2 px-3 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Realm</Link>
  </nav>
  <section>
    <Route path="/" component={Home}/>
    <Route path="/chaos" component={Chaos}/>
    <Route path="/realm" component={Realm}/>
  </section>
</Router>

<style lang="postcss">

</style>