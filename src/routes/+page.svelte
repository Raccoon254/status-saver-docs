<script lang="ts">
  import { writable } from 'svelte/store';

  // Define the features of the app
  const features = [
    { title: 'View WhatsApp Statuses', description: 'Browse through your contacts\' WhatsApp statuses.' },
    { title: 'Download Statuses', description: 'Save your favorite statuses to your device.' },
    { title: 'Multi-select Download', description: 'Select and download multiple statuses at once.' },
    { title: 'Support for WhatsApp Business', description: 'Works with both regular WhatsApp and WhatsApp Business.' },
    { title: 'Gallery View', description: 'View all your saved statuses in a gallery format.' },
    { title: 'Video Playback', description: 'Play video statuses directly within the app.' },
  ];

  // Create a store for the current section
  const currentSection = writable('home');

  // Function to change the current section
  function changeSection(section: string) {
		currentSection.set(section);
  }

  // Sample status for demonstration
  const sampleStatus = {
    imageUrl: 'https://via.placeholder.com/300',
    isVideo: false,
    duration: null,
  };
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">Status Saver App Documentation</h1>

  <nav class="mb-8">
    <ul class="flex space-x-4">
      <li><button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={() => changeSection('home')}>Home</button></li>
      <li><button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={() => changeSection('features')}>Features</button></li>
      <li><button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={() => changeSection('usage')}>How to Use</button></li>
    </ul>
  </nav>

  {#if $currentSection === 'home'}
    <section>
      <h2 class="text-2xl font-semibold mb-4">Welcome to Status Saver</h2>
      <p class="mb-4">Status Saver is an Android application that allows you to easily view and save WhatsApp statuses.</p>
      <img src="https://via.placeholder.com/600x300" alt="Status Saver App Screenshot" class="rounded-lg shadow-md mb-4">
    </section>
  {:else if $currentSection === 'features'}
    <section>
      <h2 class="text-2xl font-semibold mb-4">Features</h2>
      <ul class="space-y-4">
        {#each features as feature}
          <li class="bg-gray-100 p-4 rounded-lg">
            <h3 class="font-semibold">{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        {/each}
      </ul>
    </section>
  {:else if $currentSection === 'usage'}
    <section>
      <h2 class="text-2xl font-semibold mb-4">How to Use</h2>
      <ol class="list-decimal list-inside space-y-4">
        <li>Install the Status Saver app on your Android device.</li>
        <li>Open the app and grant necessary permissions.</li>
        <li>Choose between regular WhatsApp or WhatsApp Business.</li>
        <li>Browse through available statuses.</li>
        <li>Tap on a status to view it in full screen.</li>
        <li>Use the download button to save a status to your device.</li>
      </ol>

      <div class="mt-8">
        <h3 class="text-xl font-semibold mb-4">Status Preview</h3>
        <div class="bg-gray-200 p-4 rounded-lg flex items-center justify-center" style="height: 400px;">
          {#if sampleStatus.isVideo}
            <div class="relative">
              <img src={sampleStatus.imageUrl} alt="Video Thumbnail" class="rounded-lg">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {#if sampleStatus.duration}
                <div class="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  {sampleStatus.duration}
                </div>
              {/if}
            </div>
          {:else}
            <img src={sampleStatus.imageUrl} alt="Status Image" class="rounded-lg">
          {/if}
        </div>
      </div>
    </section>
  {/if}
</main>

<style>
  /* Add any additional styles here */
</style>