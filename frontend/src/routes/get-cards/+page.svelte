<svelte:head>
  <title>Satan's Playbook - Get Our Cards</title>
</svelte:head>

<script lang="ts">
  // Import components
  import Header from '$lib/components/Header.svelte';

  // Import files
  import doubleSided from '$lib/files/double_sided.pdf';
  import fullSize from '$lib/files/full_size.pdf';
  import affinityZip from '$lib/files/affinity_pkg.zip';
  import psdZip from '$lib/files/psd_pkg.zip';

</script>

<Header selectedPage="" />
<main class="container mx-auto mt-10 flex flex-col">
  <!-- Main Title -->
  <section class="flex flex-col mb-10 w-[40rem] self-center">
    <h1 class="h1 text-5xl font-bold mb-2 text-white text-center">How do you get our cards?</h1>
    <p class="text-center self-center">We want this project to help as many people as possible so we didn't want to make these cards only available at a cost. We've come up with a few options for how to get these cards for you, your friends, and your family to enjoy!</p>
  </section>

  <!-- Order Section -->
  <section class="flex flex-col mb-10 w-[50rem] self-center">
    <!-- Title -->
    <h2 class="h2 text-4xl font-bold mt-4 text-white text-center mb-4"><span class="gradient-heading">Option #1: Place an order</span></h2>
    <!-- Explanatory Text -->
    <p class="text-center self-center">The simplest way to get our cards is to place an order. Since this is a BYU project it will redirect you to a BYU shopping page.</p>
    <div class="flex self-center mt-4">
      <!-- Download Affinity Publisher template -->
      <button type="button" class="btn variant-filled">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>

        </span>
        <span>Buy Cards</span>
      </button>
    </div>
  </section>

  <!-- Download PDF Section -->
  <section class="flex flex-col mb-10 w-[50rem] self-center">
    <!-- Title -->
    <h2 class="h2 text-4xl font-bold mt-4 text-white text-center mb-4"><span class="gradient-heading">Option #2: Download a Printable PDF</span></h2>
    <!-- Explanatory Text -->
    <p class="text-center self-center">If you want something you can print yourself without having to go through Affinity or Photoshop we've created two PDF files you can download. The Double-Sided option is laid out so that when it's printed double-sided the back of the card will align with the front of the card. The Full Size option </p>
    <div class="flex self-center mt-4 gap-5">
      <!-- Download Double Sided PDF -->
      <a href={doubleSided} download="Double Sided Cards" class="btn variant-filled">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </span>
        <span>Download Double-Sided PDF</span>
      </a>
      <!-- Download Full Size PDF -->
      <a href={fullSize} download="Full Size Cards" class="btn variant-filled">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </span>
        <span>Download Full Size PDF</span>
      </a>
    </div>
  </section>

  <!-- Download Template Section -->
  <section class="flex flex-col mb-10 w-[50rem] self-center">
    <!-- Title -->
    <h2 class="h2 text-4xl font-bold mt-4 text-white text-center mb-4"><span class="gradient-heading">Option #3: Download our Template</span></h2>
    <!-- Explanatory Text -->
    <p class="text-center self-center">We designed our cards in <a href="https://affinity.serif.com/en-us/publisher/" class="text-primary-500 underline hover:underline-offset-4" target="_blank">Affinity Publisher</a> and we've opted to make our template available to allow you to extend the content or modify the design of our cards if you'd like. It's Available as an Affinity Publisher Package or as a series of PSD files.</p>
    <div class="flex self-center mt-4 gap-5">
      <!-- Download Affinity Publisher Package -->
      <a href={affinityZip} download="Cards Affinity Package" class="btn variant-filled">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </span>
        <span>Download Affinity Publisher Package</span>
      </a>
      <!-- Download Photoshop Templates -->
      <a href={psdZip} download="Cards PSD Package" class="btn variant-filled">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </span>
        <span>Download PSD Template</span>
      </a>
    </div>
  </section>
</main>
