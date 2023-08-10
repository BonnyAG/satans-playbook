<svelte:head>
  <title>Satan's Playbook - {homepage.page_title}</title>
</svelte:head>

<script lang="ts">
  // Import functions
  import { goto } from '$app/navigation';

  // Import components
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Card from '$lib/components/Card.svelte';

  // Import images
  import playbook from '$lib/images/playbook.jpg';

  // Get Cards data
  export let data;
  const {cards} = data;
  const {homepage} = data;

  let heroImg: string = "http://localhost:1337" + homepage.hero_image.data.attributes.formats.medium.url;
</script>

<!-- HEADER -->
<Header selectedPage="index" />

<!-- MAIN CONTENT START -->
<main class="container mx-auto">

  <!-- Hero Heading -->
  <div class="flex gap-4 content-end pt-8 pb-16">
    <!-- Hero image -->
    <img src={heroImg} alt={homepage.hero_image_alt_text} class="bg-primary-200 w-96 shadow-2xl shadow-primary-900 hover:shadow-maroon transition rounded-3xl basis-1/3" />

    <!-- Hero Content -->
    <div class="flex content-end self-center flex-col basis-2/3 p-6">
      <h1 class="h1 font-heading tracking-wider uppercase font-bold text-4xl mb-4 text-white">{homepage.heading}</h1>
      <p class="font-body tracking-wide text-xl">{homepage.hero_content}</p>
      <button type="button" class="font-body tracking-wider text-lg btn w-32 mt-5 variant-filled" on:click={() => goto('/get-cards')}>Get Cards</button>
    </div>
  </div>

  <!-- Cards Heading -->
  <h2 class="h2 font-heading uppercase tracking-wider font-bold text-3xl mb-2 text-white">{homepage.card_heading}</h2>
  <hr />

  <!-- Display Cards in 4x4 Grid -->
  <div class="grid grid-cols-4 grid-flow-row gap-y-8 py-4">
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
<!-- MAIN CONTENT END -->

<!-- FOOTER -->
<Footer />