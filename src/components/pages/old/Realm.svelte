<script>
  import DiceRoller from "../../generators/DiceRoller.svelte";
  import Keywords from "../../generators/Keywords.svelte";
  import Oracle from "../../generators/Oracle.svelte";
  import RealmDate from "../../realm/RealmDate.svelte";
  import Calendar from "../../realm/widgets/Calendar.svelte";
  import Today from "../../realm/widgets/Today.svelte";
</script>
<main class="md:flex">
  <div class="mx-auto md:w-1/4">
    <Today />
    <Calendar />
    <RealmDate />
  </div>
</main>