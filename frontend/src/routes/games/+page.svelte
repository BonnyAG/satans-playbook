<script lang="ts">
  // Import functions
  import { goto } from '$app/navigation';

  // Import components
  import Header from '$lib/components/Header.svelte';

</script>

<Header selectedPage="games" />
<main class="container mx-auto mt-4">
  <!-- Hero Text -->
 <div class="grid grid-cols-2 grid-flow-row gap-8">
    <!-- Hero image -->
    <div class="bg-primary-200 w-auto h-72 p-12 shadow-2xl shadow-primary-900 hover:shadow-primary-700 transition rounded-3xl basis-1/3">
      <h2 class="h2 font-bold text-primary-700 mb-2">Game #1</h2>
      <p class="text-primary-900">Sint aliqua reprehenderit enim reprehenderit deserunt. In elit et et exercitation do. Elit dolor id nisi pariatur occaecat eiusmod laboris. Ex esse quis culpa ut elit qui est id irure in consequat dolore. Reprehenderit ad adipisicing duis ex dolore voluptate.</p>
      <button type="button" class="btn variant-filled-primary mt-4">Play Game</button>
    </div>
    <div class="bg-primary-200 w-auto h-72 p-12 shadow-2xl shadow-primary-900 hover:shadow-primary-700 transition rounded-3xl basis-1/3">
      <h2 class="h2 font-bold text-primary-700 mb-2">Game #2</h2>
      <p class="text-primary-900">Sint aliqua reprehenderit enim reprehenderit deserunt. In elit et et exercitation do. Elit dolor id nisi pariatur occaecat eiusmod laboris. Ex esse quis culpa ut elit qui est id irure in consequat dolore. Reprehenderit ad adipisicing duis ex dolore voluptate.</p>
      <button type="button" class="btn variant-filled-primary mt-4">Play Game</button>
    </div>
    <div class="bg-primary-200 w-auto h-72 p-12 shadow-2xl shadow-primary-900 hover:shadow-primary-700 transition rounded-3xl basis-1/3">
      <h2 class="h2 font-bold text-primary-700 mb-2">Game #3</h2>
      <p class="text-primary-900">Sint aliqua reprehenderit enim reprehenderit deserunt. In elit et et exercitation do. Elit dolor id nisi pariatur occaecat eiusmod laboris. Ex esse quis culpa ut elit qui est id irure in consequat dolore. Reprehenderit ad adipisicing duis ex dolore voluptate.</p>
      <button type="button" class="btn variant-filled-primary mt-4">Play Game</button>
    </div>
    <div class="bg-primary-200 w-auto h-72 p-12 shadow-2xl shadow-primary-900 hover:shadow-primary-700 transition rounded-3xl basis-1/3">
      <h2 class="h2 font-bold text-primary-700 mb-2">Game #4</h2>
      <p class="text-primary-900">Sint aliqua reprehenderit enim reprehenderit deserunt. In elit et et exercitation do. Elit dolor id nisi pariatur occaecat eiusmod laboris. Ex esse quis culpa ut elit qui est id irure in consequat dolore. Reprehenderit ad adipisicing duis ex dolore voluptate.</p>
      <button type="button" class="btn variant-filled-primary mt-4">Play Game</button>
    </div>
  </div>
</main>

