<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './components/pages/Home.svelte';
  /*import Chaos from './components/pages/Solo.svelte';
  import Realm from './components/pages/Realm.svelte';
  import Solo from './components/pages/Solo.svelte';
  import Cypher from './components/pages/Cypher.svelte';*/

  export let url = '';
</script>


<Router url={url}>
  <!--nav class="md:flex md:w-1/4 mx-auto p-3 border-b border-purple-800">
    <Link
      to="/"
      class="border py-2 px-3 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Home</Link>
    <Link
      to="solo"
      class="border py-2 px-3 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Solo</Link>
    <Link
      to="realm"
      class="border py-2 px-3 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Realm</Link>
    <Link
      to="cypher"
      class="border py-2 px-3 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Cypher</Link>
  </nav-->
  <section>
    <Route path="/" component={Home}/>
    <!--Route path="/solo" component={Solo}/>
    <Route path="/realm" component={Realm}/>
    <Route path="/cypher" component={Cypher}/-->
  </section>
</Router>

<style lang="postcss">

</style>