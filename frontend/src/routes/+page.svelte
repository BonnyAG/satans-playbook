<script lang="ts">
  // Import functions
  import { goto } from '$app/navigation';

  // Import components
  import Header from '../lib/Header.svelte';

  // Get Cards data
  export let data;
  const {cards} = data;
  console.log(data);
</script>

<Header selectedPage="index" />
<main class="container mx-auto mt-4">
  <!-- Hero Text -->
  <div class="flex gap-4 content-end my-12">
    <!-- Hero image -->
    <div class="bg-primary-200 w-64 h-64 p-12 shadow-2xl shadow-primary-900 hover:shadow-primary-700 transition rounded-3xl basis-1/3"></div>

    <!-- Hero Content -->
    <div class="flex content-end self-center flex-col basis-2/3 p-6">
      <h1 class="h1 font-bold mb-2 text-primary-500">Learn to <b>doubt your doubts</b>!</h1>
      <p>Doubting your doubts is a tricky exercise. How do you doubt your doubts while also approaching difficult questions about the Church and your faith? We think that a big part of that is to learn to avoid falling for Satan's Spiritual Fallacies. So to help you out, we've made this card game to expose Satan's Playbook!</p>
    </div>
  </div>
  <div class="grid grid-cols-4 grid-flow-row gap-y-8">
    {#each cards as card}
        <!--<div
            class="hover:bg-gray-200 cursor-pointer px-6 py-2 border-b border-gray-500"
            on:click={() => goto('/blog/' + post.attributes.slug)}
        >
            <h4 class="font-bold">{post.attributes.title}</h4>
            <p class="mt-2 text-gray-800">{post.attributes.description}</p>
        </div>-->

        <div class="bg-white border-8 border-surface-500 shadow-md shadow-surface-500 text-slate-900 p-4 w-72 rounded-2xl col-auto hover:scale-110 hover:shadow-primary-800 hover:shadow-2xl transition flex flex-col text-center">
          <h2 class="h2 text-xl font-bold self-center uppercase">{card.attributes.title}</h2>
          <p class="text-sm my-2">{card.attributes.idea_short}</p>
          <p class="text-sm p-3 bg-primary-500 text-center text-white rounded-2xl italic my-2">{card.attributes.example_short}</p>
          <p class="text-sm">{card.attributes.solution_short}</p>
        </div>
    {/each}
  </div>
</main>

