<script>
  $: data = {
    name: '',
    type: '',
    descriptor: '',
    focus: '',
    flavor: '',
    tier: 1,
    effort: 1,
    armor: 0,
    xp: 0,
    might: [0, 0, 0],
    speed: [0, 0, 0],
    intellect: [0, 0, 0],
    recovery: [4, 0, false, false, false, false],
    damage: [true, false, false, false],
  };

  $: article = ['a', 'e', 'i', 'o', 'u'].includes(data?.descriptor[0])
    ? 'an'
    : 'a';

  let url = undefined;
  //const base = (new URL(location.href)).origin;
  const base = 'https://generators.just-us.net';
  function generate() {
    url = undefined;
    const dataString = JSON.stringify(data);
    const encodedData = btoa(dataString);
    url = `${base}/.netlify/functions/character-sheet/${encodeURIComponent(
      encodedData
    )}`;
  }
</script>

<div class="md:flex">
  <div class="mx-auto w-full">
    <div class="md:full flex flex-col p-3 border m-3">
      <h2 class="text-3xl font-bold text-center mb-3">
        Character Sheet Generator
      </h2>

      <div class="border p-3 mb-3">
        <label for="name">
          <span>Name</span>
          <input
            type="text"
            id="name"
            bind:value={data.name}
            class="border py-2 px-3 w-full mb-2"
          />
        </label>
        <div class="flex w-full items-center">
          <div class="p-3 pl-0">is {article}</div>
          <label for="descriptor" class="flex-grow">
            <span>Descriptor</span>
            <input
              type="text"
              id="descriptor"
              bind:value={data.descriptor}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="type" class="flex-grow">
            <span>Type</span>
            <input
              type="text"
              id="type"
              bind:value={data.type}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
        <div class="flex items-center">
          <div class="p-3 pl-0">with</div>
          <label for="flavor" class="flex-grow">
            <span>Flavor</span>
            <input
              type="text"
              id="flavor"
              bind:value={data.flavor}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
          <div class="p-3">who</div>
          <label for="focus" class="flex-grow">
            <span>Focus</span>
            <input
              type="text"
              id="focus"
              bind:value={data.focus}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
      </div>

      <div class="flex">
        <div class="border p-3 mb-3 md:flex mr-1 flex-grow items-center">
          <label for="recovery">
            <span>Recovery (count)</span>
            <input
              type="number"
              id="recovery"
              bind:value={data.recovery[0]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
          <label for="extra">
            <span>Recovery (extra points)</span>
            <input
              type="number"
              id="extra"
              bind:value={data.recovery[1]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
          <label for="taken" class="min-w-fit px-3">
            <span class="md:inline block">Recovery (taken)</span>
            {#each Array(data.recovery[0]) as value, i}
              <input
                type="checkbox"
                value={data.recovery[i + 2]}
                checked={data.recovery[i + 2] ? true : undefined}
                on:click={() => (data.recovery[i + 2] = !data.recovery[i + 2])}
              />
            {/each}
          </label>
        </div>
        <div class="border p-3 mb-3 flex mr-1 flex-grow min-w-fit items-center">
          <label for="damage">
            <span>Damage Track</span>
            {#each data.damage as value, i}
              <input
                type="checkbox"
                value={data.damage[i]}
                checked={data.damage[i] ? true : undefined}
                on:click={() => (data.damage[i] = !data.damage[i])}
              />
            {/each}
          </label>
        </div>
      </div>

      <div class="flex">
        <div class="border p-3 mb-3 flex flex-col mr-1 flex-grow">
          <label for="tier" class="w-full">
            <span>Tier</span>
            <input
              type="number"
              id="tier"
              bind:value={data.tier}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="effort" class="w-full">
            <span>Effort</span>
            <input
              type="number"
              id="effort"
              bind:value={data.effort}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="armor" class="w-full">
            <span>Armor</span>
            <input
              type="number"
              id="armor"
              bind:value={data.armor}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="xp" class="w-full">
            <span>XP</span>
            <input
              type="number"
              id="xp"
              bind:value={data.xp}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
        <div class="border p-3 mb-3 flex flex-col mr-1 flex-grow">
          <label for="might0" class="w-full">
            <span>Might (current)</span>
            <input
              type="number"
              id="might0"
              bind:value={data.might[0]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="might1" class="w-full">
            <span>Might (pool)</span>
            <input
              type="number"
              id="might1"
              bind:value={data.might[1]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="might2" class="w-full">
            <span>Might (edge)</span>
            <input
              type="number"
              id="might2"
              bind:value={data.might[2]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
        <div class="border p-3 mb-3 flex flex-col mr-1 flex-grow">
          <label for="speed0" class="w-full">
            <span>Speed (current)</span>
            <input
              type="number"
              id="speed0"
              bind:value={data.speed[0]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="speed1" class="w-full">
            <span>Speed (pool)</span>
            <input
              type="number"
              id="speed1"
              bind:value={data.speed[1]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="speed2" class="w-full">
            <span>Speed (edge)</span>
            <input
              type="number"
              id="speed2"
              bind:value={data.speed[2]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
        <div class="border p-3 mb-3 flex flex-col flex-grow">
          <label for="intellect0" class="w-full">
            <span>Intellect (current)</span>
            <input
              type="number"
              id="intellect0"
              bind:value={data.intellect[0]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="intellect1" class="w-full">
            <span>Intellect (pool)</span>
            <input
              type="number"
              id="intellect1"
              bind:value={data.intellect[1]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="intellect2" class="w-full">
            <span>Intellect (edge)</span>
            <input
              type="number"
              id="intellect2"
              bind:value={data.intellect[2]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
      </div>

      <div class="flex justify-center">
        <button
          on:click={generate}
          class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
          >Generate</button
        >
      </div>

      {#if url}
        <div class="flex flex-col justify-center">
          <div
            class="h-full w-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2"
          >
            {url}
          </div>
          <div class="flex justify-center">
            <img src={url} alt="" />
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
