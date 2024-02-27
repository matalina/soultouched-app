<script lang="ts">
  import { onMount } from "svelte";
  import { RandomTable } from "../../lib/tables";
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";

  const danger = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5c0 8-6.5 14.5-14.5 14.5H62.5c-8 0-14.5-6.5-14.5-14.5c0-2.7 .7-5.3 2.1-7.5L248.4 84.3zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480h387c34.5 0 62.5-28 62.5-62.5c0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3zM288 368a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-184c0-13.3-10.7-24-24-24s-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184z"/></svg>';

  const plains = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M268 5.4C264.9 2 260.6 0 256 0s-8.9 2-12 5.4L189.5 66.7 121.2 18.9c-4.9-3.4-11.3-3.8-16.6-1.1S96 26 96 32V160c0 70.7 57.3 128 128 128h16V396.6C200.8 331.5 129.5 288 48 288H28c-15.5 0-28 12.5-28 28C0 424.2 87.8 512 196 512h44 16 16 44c108.2 0 196-87.8 196-196c0-15.5-12.5-28-28-28H464c-81.5 0-152.8 43.5-192 108.6V288h16c70.7 0 128-57.3 128-128V32c0-6-3.3-11.4-8.6-14.2s-11.7-2.3-16.6 1.1L322.5 66.7 268 5.4zM256 256H224c-53 0-96-43-96-96V62.7l54.8 38.4c6.7 4.7 15.7 3.6 21.1-2.5l52-58.5 52 58.5c5.4 6.1 14.5 7.1 21.1 2.5L384 62.7V160c0 53-43 96-96 96H256zM196 480c-89.2 0-161.8-71.3-164-160H48c95.1 0 174.1 69.2 189.3 160H196zm120 0H274.7c15.2-90.8 94.2-160 189.3-160h16c-2.1 88.7-74.7 160-164 160z"/></svg>';

  const coastal = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M320 464c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V320 288 256 224 96c0-35.3 28.7-64 64-64s64 28.7 64 64V352v32 32 32 16zm32-112V96c0-53-43-96-96-96s-96 43-96 96V224H112c-8.8 0-16-7.2-16-16V144c0-26.5-21.5-48-48-48S0 117.5 0 144v64c0 61.9 50.1 112 112 112h48V464c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V448h48c61.9 0 112-50.1 112-112V272c0-26.5-21.5-48-48-48s-48 21.5-48 48v64c0 8.8-7.2 16-16 16H352zm0 32h48c26.5 0 48-21.5 48-48V272c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 44.2-35.8 80-80 80H352V384zM112 288c-44.2 0-80-35.8-80-80V144c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 26.5 21.5 48 48 48h48v32H112zM256 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm16 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>';

  const desert = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M320 464c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V320 288 256 224 96c0-35.3 28.7-64 64-64s64 28.7 64 64V352v32 32 32 16zm32-112V96c0-53-43-96-96-96s-96 43-96 96V224H112c-8.8 0-16-7.2-16-16V144c0-26.5-21.5-48-48-48S0 117.5 0 144v64c0 61.9 50.1 112 112 112h48V464c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V448h48c61.9 0 112-50.1 112-112V272c0-26.5-21.5-48-48-48s-48 21.5-48 48v64c0 8.8-7.2 16-16 16H352zm0 32h48c26.5 0 48-21.5 48-48V272c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 44.2-35.8 80-80 80H352V384zM112 288c-44.2 0-80-35.8-80-80V144c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 26.5 21.5 48 48 48h48v32H112zM256 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm16 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>';

  const forest = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M167.6 11.9c12.8-15 35.9-15 48.7 0L318.5 131.8c4.1 4.8 6.4 11 6.4 17.4c0 14.8-12 26.8-26.8 26.8H286.1l61.4 67.4c4.5 4.9 7 11.3 7 17.9c0 14.7-11.9 26.6-26.6 26.6H312.7l65.6 84.4C382 377.2 384 383 384 389c0 14.9-12.1 27-27 27H235.1 208v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V416H148.9 27c-14.9 0-27-12.1-27-27c0-6 2-11.8 5.7-16.6L71.3 288H56.2c-14.7 0-26.6-11.9-26.6-26.6c0-6.6 2.5-13 7-17.9L97.9 176H85.9c-14.8 0-26.8-12-26.8-26.8c0-6.4 2.3-12.5 6.4-17.4L167.6 11.9zM235.1 384H346.8L267.4 281.8c-3.7-4.8-4.4-11.4-1.7-16.9s8.3-9 14.4-9h35.7L238 170.8c-4.3-4.7-5.4-11.4-2.8-17.2s8.3-9.5 14.6-9.5h37L192 32.7 97.1 144h37c6.3 0 12.1 3.7 14.6 9.5s1.5 12.6-2.8 17.2L68.3 256H104c6.1 0 11.7 3.5 14.4 9s2 12-1.7 16.9L37.2 384H148.9 176V208c0-8.8 7.2-16 16-16s16 7.2 16 16V384h27.1zM423.5 12.6c12.7-15.4 36.2-15.6 49.1-.4l102 119.7c4.1 4.8 6.4 11 6.4 17.4c0 14.8-12 26.8-26.8 26.8H542.1l61.4 67.4c4.5 4.9 7 11.3 7 17.9c0 14.7-11.9 26.6-26.6 26.6H568.7l65.6 84.4C638 377.2 640 383 640 389c0 14.9-12.1 27-27 27H464v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V400 208c0-8.8 7.2-16 16-16s16 7.2 16 16V384H602.8L523.4 281.8c-3.8-4.8-4.4-11.4-1.7-16.9s8.3-9 14.4-9h35.7L494 170.8c-4.3-4.7-5.4-11.4-2.8-17.2s8.3-9.5 14.6-9.5h37L448.2 32.9 388 106.2c-5.6 6.8-15.7 7.8-22.5 2.2s-7.8-15.7-2.2-22.5l60.2-73.2z"/></svg>';

  const hills = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M512.7 384L63.3 384 171.9 195.2C195.8 153.6 240.1 128 288 128s92.2 25.6 116.1 67.2L512.7 384zM288 96c-59.4 0-114.2 31.7-143.9 83.2L35.6 368c-12.3 21.3 3.1 48 27.7 48H512.7c24.6 0 40-26.6 27.7-48L431.9 179.2C402.2 127.7 347.4 96 288 96z"/></svg>';

  const jungle = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M102.9 91.4l30.3 50.5c-4 3.5-8 7.2-12 11.2c-71 71-60.2 151-32.7 191.3c5 7.3 15.2 7.3 21.4 1L248.4 206.9c4 10.8 7.8 26.2 9.7 47.2c4.2 46.5-1.6 116.8-32.7 216.4c-3 9.7-1.3 20.3 4.8 28.5s15.6 13 25.8 13h64c16.1 0 29.8-12 31.8-28c12.4-99-2.3-207.2-31.7-292H446.7c2.8 0 5.4-1.5 6.9-3.9l19.6-32.7c3.1-5.2 10.6-5.2 13.7 0l19.6 32.7c1.4 2.4 4 3.9 6.9 3.9H560c8.8 0 16.1-7.2 14.4-15.9C565.3 128.2 516.4 64 416 64c-43.7 0-77.6 12.2-102.8 29.8C296.5 49.4 248 0 160 0C59.6 0 10.7 64.2 1.6 112.1C-.1 120.8 7.2 128 16 128H62.7c2.8 0 5.4-1.5 6.9-3.9L89.1 91.4c3.1-5.2 10.6-5.2 13.7 0z"/></svg>';

  const mountains = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M480 424.1c0 13.2-10.7 23.9-23.9 23.9H55.9C42.7 448 32 437.3 32 424.1c0-4.5 1.3-8.9 3.7-12.7L252.4 66c.8-1.3 2.2-2 3.6-2s2.9 .8 3.6 2L476.3 411.4c2.4 3.8 3.7 8.2 3.7 12.7zm-480 0C0 455 25 480 55.9 480H456.1 578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 164.1 487.8 160 480 160s-15 4.1-19.1 10.7l-48.2 79L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1zM431.7 280L480 200.9 603.7 403.7c2.8 4.6 4.3 9.8 4.3 15.2c0 16.1-13 29.1-29.1 29.1H506.6c3.4-7.3 5.4-15.4 5.4-23.9c0-10.5-3-20.8-8.6-29.7L431.7 280z"/></svg>';

  const swamp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M288 96c0-35.3 28.7-64 64-64s64 28.7 64 64v33.1c-38.4 5.7-64 32.2-64 73.9c0 27.9 25.3 74.8 66 111.6c3.8 3.5 8.9 5.3 14 5.3s10.2-1.8 14-5.3c40.7-36.8 66-83.7 66-111.6c0-41.7-25.6-68.3-64-73.9V96c0-53-43-96-96-96s-96 43-96 96v65.6c-20.3-20.7-48.7-33.6-80-33.6c-61.9 0-112 50.1-112 112v17.1c-38.4 5.7-64 32.2-64 73.9C0 359 25.3 405.9 66 442.7c3.8 3.5 8.9 5.3 14 5.3s10.2-1.8 14-5.3c40.7-36.8 66-83.7 66-111.6c0-41.7-25.6-68.3-64-73.9V240c0-44.2 35.8-80 80-80s80 35.8 80 80v40V496c0 8.8 7.2 16 16 16s16-7.2 16-16V280 240 96zm128 65.7V192c0 8.8 7.2 16 16 16s16-7.2 16-16V161.7c8.9 2 15.5 5.6 20.1 9.8c6.6 6 11.9 15.8 11.9 31.6c0 5.8-3.3 18.8-13.5 36.5c-8.3 14.5-20.1 30-34.5 44.3c-14.4-14.3-26.2-29.9-34.5-44.3c-10.2-17.7-13.5-30.7-13.5-36.5c0-15.8 5.3-25.6 11.9-31.6c4.6-4.2 11.2-7.8 20.1-9.8zM43.9 299.5c4.6-4.2 11.2-7.8 20.1-9.8v30.6c0 8.8 7.2 16 16 16s16-7.2 16-16V289.7c8.9 2 15.5 5.6 20.1 9.8c6.6 6 11.9 15.8 11.9 31.6c0 5.8-3.3 18.8-13.5 36.5c-8.3 14.5-20.1 30-34.5 44.3C65.6 397.6 53.8 382 45.5 367.6C35.3 349.8 32 336.9 32 331.1c0-15.8 5.3-25.6 11.9-31.6z"/></svg>';

  const farm = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M433.1 36c-28.7 1.4-51.7 24.4-53.1 53.1l-2.3 45.2 45.2-2.3c28.7-1.4 51.7-24.4 53.1-53.1l2.3-45.2L433.1 36zM348 87.5C350.3 42.4 386.4 6.3 431.5 4l54-2.7c14.2-.7 25.9 11 25.2 25.2l-2.7 54c-2.3 45.1-38.3 81.2-83.5 83.5l-16.9 .8c23.1 5 45.2 16.6 63.2 34.6L493.4 222c6.2 6.2 6.2 16.4 0 22.6l-33.9 33.9c-17.4 17.4-39.8 26.7-62.5 28l6 6c6.2 6.2 6.2 16.4 0 22.6L369 369c-17.4 17.4-39.8 26.7-62.5 28l6 6c6.2 6.2 6.2 16.4 0 22.6l-33.9 33.9c-37.5 37.5-98.3 37.5-135.8 0l-33.9-33.9 0 0L27.3 507.1c-6.2 6.2-16.4 6.3-22.6 0s-6.2-16.4 0-22.6L86.2 403 52.3 369.1c-37.5-37.5-37.5-98.3 0-135.8l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0l6 6c1.3-22.8 10.6-45.2 28-62.6l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0l6 6c1.3-22.8 10.6-45.2 28-62.6l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0L312.4 41c18.3 18.3 29.9 40.7 34.8 64.2l.9-17.7zm88.8 168.4l22.6-22.6L448.1 222c-37.5-37.5-98.2-37.5-135.7 0l33.9 33.9c25 25 65.5 25 90.5 0zm-181-90.5l33.9 33.9 1.5-1.5c36-37.6 35.5-97.3-1.5-134.3L278.5 52.3 255.9 74.9c-25 25-25 65.5 0 90.5zm-56.6-11.3L188 142.8l-22.6 22.6c-25 25-25 65.5 0 90.5l33.9 33.9 1.3-1.3c36.2-37.6 35.8-97.4-1.3-134.5zM108.8 380.3l.8-.8c36.7-37.6 36.4-97.7-.8-135L97.5 233.3 74.9 255.9c-25 25-25 65.5 0 90.5l33.9 33.9zm147.1 56.5l22.6-22.6L267.2 403c-37.5-37.5-98.2-37.5-135.7 0l33.9 33.9c25 25 65.5 25 90.5 0zm90.5-90.5l22.6-22.6-11.3-11.3c-37.5-37.5-98.2-37.5-135.7 0l33.9 33.9c25 25 65.5 25 90.5 0z"/></svg>';

  const table: any = {
    name: 'Terrain',
    description: 'Random Terrain Table',
    diceFormula: '1d20',
    table: [
      { min: 1, max: 1, icon: danger, description: 'Violent/Extreme Terrain' },
      { min: 2, max: 6, icon: plains, description: 'Dry Plains' },
      { min: 7, max: 7, icon: coastal, description: 'Coastal' },
      { min: 8, max: 9, icon: desert, description: 'Desert' },
      { min: 10, max: 11, icon: forest, description: 'Forest' },
      { min: 12, max: 13, icon: hills, description: 'Hills' },
      { min: 14, max: 14, icon: jungle, description: 'Jungle' },
      { min: 15, max: 17, icon: mountains, description: 'Mountains' },
      { min: 18, max: 19, icon: swamp, description: 'Swamp' },
      { min: 20, max: 20, icon: farm, description: 'Fertile Land' },
    ]
  };

  function rollOnTable(table: RandomTable) {
  const roll = new DiceRoll(table.diceFormula);
  const total = roll.total;
  let result: any;

  for (let i in table.table) {
    const row = table.table[i];
    if (row.min === null && total <= row.max) result = row;
    else if (row.max === null && total >= row.min) result = row;
    else if (total >= row.min && total <= row.max) result = row
  }
  return { description: result.description.toString(), icon: result.icon , roll };
}

  let description: string;
  let icon: string;

  export const reroll = () => {
    const result = rollOnTable(table);
    description = result.description;
    icon = result.icon;
  }

  onMount(() => {
    reroll();
  });
</script>

<div class="text-3xl" title={description}>{@html icon}</div>
