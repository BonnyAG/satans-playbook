<script lang="ts">
  // Import functions
  import { goto } from '$app/navigation';

  // Props
  export let id: number;
  export let title: string;
  export let idea: string;
  export let example: string;
  export let solution: string;
  export let hoverScale: boolean = false;
  export let clickable: boolean = false;
</script>

<!-- If the `clickable` prop is set to true, clicking the card will redirect to /cards/[id] -->
<div class="{hoverScale ? 'hover:scale-110' : ''} bg-white border-8 border-surface-500 shadow-md shadow-surface-500 text-slate-900 p-4 w-80 rounded-2xl col-auto hover:shadow-primary-800 hover:shadow-2xl transition flex flex-col text-center h-[27rem] hover:cursor-pointer" on:click={clickable ? () => goto('/cards/' + id) : null} on:keypress={clickable ? () => goto('/cards/' + id) : null}>
  <!-- Title -->
  <h2 class="h2 text-xl font-bold self-center uppercase">{title}</h2>

  <!-- Content -->
  <p class="text-sm my-2">{idea}</p>
  <p class="text-sm p-3 bg-primary-700 text-center text-white rounded-2xl italic my-2">{example}</p>
  <span class="text-md uppercase font-bold mt-1 mb-0.5">Antidote</span>
  <p class="text-sm {solution == null ? 'hidden' : ''}">{solution}</p>
</div>
