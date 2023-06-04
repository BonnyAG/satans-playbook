<svelte:head>
  <!-- Add Dynamic title to the url -->
  <title>Satan's Playbook - {card.attributes.title}</title>
</svelte:head>

<script>
  // Import Components
  import Header from '../../../lib/Header.svelte';

  // Get Cards data
  export let data;
  const {card} = data;
  console.log(card);

  let badgeColors = [
    {type: "scriptures", name:"Scriptures", style: "bg-primary-300 text-primary-900"},
    {type: "prophets_and_apostles", name:"Prophets & Apostles", style: "bg-secondary-300 text-secondary-900"},
    {type: "social_science", name:"Social Science", style: "bg-tertiary-300 text-tertiary-900"},
    {type: "article", name:"Article", style: "bg-success-300 text-success-900"},
    {type: "research_paper", name:"Research Paper", style: "bg-surface-300 text-surface-900"}
  ]

  /*let referenceOutput = [];

  card.attributes.reference.forEach(ref => {
    let obj = badgeColors[ref.type];
    obj.url = ref.url;
    obj.title = ref.title;
    referenceOutput.push(obj);
  })*/
</script>

<Header selectedPage="" />
<main class="container mx-auto mt-4">
  <!-- Hero Text -->
  <div class="flex gap-4 content-end my-12">
    <!-- Hero image -->
    <div class="bg-white border-8 border-surface-500 shadow-md shadow-surface-500 text-slate-900 p-4 w-72 rounded-2xl col-auto hover:shadow-primary-800 hover:shadow-2xl transition flex flex-col text-center h-[26rem] scale-110">
      <h2 class="h2 text-xl font-bold self-center uppercase">{card.attributes.title}</h2>
      <p class="text-sm my-2">{card.attributes.idea_short}</p>
      <p class="text-sm p-3 bg-primary-500 text-center text-white rounded-2xl italic my-2">{card.attributes.example_short}</p>
      <p class="text-sm">{card.attributes.solution_short}</p>
    </div>

    <!-- Hero Content -->
    <div class="flex content-end flex-col basis-2/3 px-6">
      <!-- Card Title -->
      <div class="flex justify-between content-end mt-[-1rem]">
        <h1 class="h1 font-bold self-end">{card.attributes.title}</h1>
        <a href="/" type="button" class="btn variant-filled w-48 self-center mb-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </span>
          <span>Back to Cards</span>
        </a>
      </div>
      <hr class="mt-2 mb-3"/>

      <!-- Definition of the Spiritual Fallacy -->
      <p><b class="text-primary-500">Definition: </b>{card.attributes.idea_full == null ? card.attributes.idea_short : card.attributes.idea_full}</p>

      <!-- Example -->
      <div class="text-white bg-primary-600 rounded-xl p-3 mt-4 ">
        <h2 class="h2 mb-2 font-bold">What does this look like?</h2>
        <p>{card.attributes.example_long == null ? card.attributes.example_short : card.attributes.example_long}</p>
      </div>

      <!-- Solution -->
      <h2 class="h2 mt-4 mb-2 font-bold">What do I do about it?</h2>
      <p>{card.attributes.solution_long == null ? card.attributes.solution_short : card.attributes.solution_long}</p>

      <!-- Resources -->
      {#if card.attributes.reference.length > 0}
        <h2 class="h2 mt-4 mb-2 font-bold">More Resources</h2>
        <nav class="list-nav">
          <ul>
            {#each card.attributes.reference as reference}
              <li>
                <a href={reference.url} target="_blank">
                  <span class={`badge ${badgeColors.find(o => o.type == reference.type).style}`}>{badgeColors.find(o => o.type ==reference.type).name}</span>
                  <span class="flex-auto">{reference.title}</span>
                  <span class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  </span>
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      {/if}
    </div>
  </div>

</main>
