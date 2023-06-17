<script lang="ts">
  // Props
  export let imgSrc: string;
  export let name: string;
  export let role: string;
  export let description: string;
</script>
<div class="card text-center flex flex-col max-w-lg hover:scale-105 transition">
  <!-- Photo -->
  <div class="rounded-t-xl w-full h-96 bg-cover bg-center self-center"
    style="background-image: url({imgSrc});"></div>

  <!-- Main Info -->
  <div class="my-4">
    <h2 class="h2 font-bold mb-1">{name}</h2>
    <span class="badge variant-filled-secondary">{role}</span>
  </div>

  <!-- Description -->
  <p class="px-4 mb-4">{description}</p>
</div>
