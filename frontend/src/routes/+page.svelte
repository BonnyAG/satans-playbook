<svelte:head>
  <title>Satan's Playbook</title>
</svelte:head>

<script lang="ts">
  // Import functions
  import { goto } from '$app/navigation';

  // Import components
  import Header from '$lib/Header.svelte';
  import Card from '$lib/Card.svelte';

  // Get Cards data
  export let data;
  const {cards} = data;
  console.log(data);
</script>

<Header selectedPage="index" />
<main class="container mx-auto">
  <!-- Hero Text -->
  <div class="flex gap-4 content-end pt-8 pb-16">
    <!-- Hero image -->
    <div class="bg-primary-200 w-64 h-64 p-12 shadow-2xl shadow-primary-900 hover:shadow-primary-700 transition rounded-3xl basis-1/3"></div>

    <!-- Hero Content -->
    <div class="flex content-end self-center flex-col basis-2/3 p-6">
      <h1 class="h1 font-bold mb-2 text-primary-500">Learn to defeat <b>Satan's Playbook</b>!</h1>
      <p>Doubting your doubts is a tricky exercise. How do you doubt your doubts while also approaching difficult questions about the Church and your faith? We think that a big part of that is to learn to avoid falling for Satan's Spiritual Fallacies. So to help you out, we've made this card game to expose Satan's Playbook!</p>
      <button type="button" class="btn w-32 mt-4 variant-filled" on:click={() => goto('/get-cards')}>Get Cards</button>
    </div>
  </div>
  <div class="grid grid-cols-4 grid-flow-row gap-y-8">
    {#each cards as card}
        <Card
          id={card.id}
          title={card.attributes.title}
          idea={card.attributes.idea_short}
          example={card.attributes.example_short}
          solution={card.attributes.solution_short}
          hoverScale={true}
          clickable={true}
        />
    {/each}
  </div>
</main>

