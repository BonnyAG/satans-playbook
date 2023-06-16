<script lang="ts">
  // Import functions
  import { goto } from '$app/navigation';

  // Define props
  export let id: number;
  export let title: string;
  export let idea: string;
  export let example: string;
  export let solution: string;
  export let hoverScale: boolean = false;
  export let clickable: boolean = false;
</script>

<div class="{hoverScale ? 'hover:scale-110' : ''} bg-white border-8 border-surface-500 shadow-md shadow-surface-500 text-slate-900 p-4 w-72 rounded-2xl col-auto hover:shadow-primary-800 hover:shadow-2xl transition flex flex-col text-center h-[26rem] hover:cursor-pointer" on:click={clickable ? () => goto('/cards/' + id) : null} on:keypress={clickable ? () => goto('/cards/' + id) : null}>
  <h2 class="h2 text-xl font-bold self-center uppercase">{title}</h2>
  <p class="text-sm my-2">{idea}</p>
  <p class="text-sm p-3 bg-primary-500 text-center text-white rounded-2xl italic my-2">{example}</p>
  <p class="text-sm">{solution}</p>
</div>
