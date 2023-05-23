<script lang="ts">
  import { goto } from '$app/navigation';
  let mobileMenuState: boolean = false;

  export let selectedPage: string;

  function openMenu() {
    mobileMenuState = !mobileMenuState;
  }
</script>

<nav>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" on:click={openMenu} aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <svg class="{!mobileMenuState ? 'block' : 'hidden'} h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!-- Icon when menu is open. -->
          <svg class="{mobileMenuState ? 'block' : 'hidden'} h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <a href="/" class="flex flex-shrink-0 items-center">
          <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">

        </a>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="/" class="{selectedPage == 'index' ? 'text-white bg-primary-700 hover:bg-primary-500' : 'text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white'} rounded-3xl px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
            <a href="/games" class="{selectedPage == 'games' ? 'text-white bg-primary-700 hover:bg-primary-500' : 'text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white'} rounded-3xl px-3 py-2 text-sm font-medium">Games</a>
            <a href="/about" class="{selectedPage == 'about' ? 'text-white bg-primary-700 hover:bg-primary-500' : 'text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white'} rounded-3xl px-3 py-2 text-sm font-medium">About</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="btn variant-filled" on:click={() => goto('/get-cards')}>Get Cards</button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="{!mobileMenuState ? 'hidden' : ''} sm:hidden" id="mobile-menu">
    <div class="space-y-2 px-2 pb-3 pt-2">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="/" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
      <a href="/games" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Games</a>
      <a href="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
      <button type="button" class="btn w-full variant-filled" on:click={() => goto('/get-cards')}>Get Cards</button>
    </div>
  </div>
</nav>
