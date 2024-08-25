<script lang="ts">
  import { writable } from 'svelte/store';

  const features = [
    { title: 'View WhatsApp Statuses', description: 'Browse through your contacts\' WhatsApp statuses effortlessly.', icon: '👀' },
    { title: 'Download Statuses', description: 'Save your favorite statuses to your device with a single tap.', icon: '⬇️' },
    { title: 'Multi-select Download', description: 'Select and download multiple statuses at once for convenience.', icon: '📚' },
    { title: 'Support for WhatsApp Business', description: 'Seamlessly works with both regular WhatsApp and WhatsApp Business.', icon: '💼' },
    { title: 'Gallery View', description: 'View all your saved statuses in an elegant gallery format.', icon: '🖼️' },
    { title: 'Video Playback', description: 'Play video statuses directly within the app for instant viewing.', icon: '▶️' },
  ];

  const usageSteps = [
    { step: 'Install the Status Saver app on your Android device.', image: 'https://via.placeholder.com/150?text=Install+App' },
    { step: 'Open the app and grant necessary permissions.', image: 'https://via.placeholder.com/150?text=Grant+Permissions' },
    { step: 'Choose between regular WhatsApp or WhatsApp Business.', image: 'https://via.placeholder.com/150?text=Choose+WhatsApp' },
    { step: 'Browse through available statuses.', image: 'https://via.placeholder.com/150?text=Browse+Statuses' },
    { step: 'Tap on a status to view it in full screen.', image: 'https://via.placeholder.com/150?text=View+Full+Screen' },
    { step: 'Use the download button to save a status to your device.', image: 'https://via.placeholder.com/150?text=Download+Status' },
  ];

  const sampleStatuses = [
    { imageUrl: 'https://via.placeholder.com/300?text=Image+Status', isVideo: false, duration: null },
    { imageUrl: 'https://via.placeholder.com/300?text=Video+Status', isVideo: true, duration: '0:15' },
  ];

  const sections = ['home', 'features', 'usage'];
  const currentSectionIndex = writable(0);

  $: currentSection = sections[$currentSectionIndex];
  $: isFirstSection = $currentSectionIndex === 0;
  $: isLastSection = $currentSectionIndex === sections.length - 1;

  function goToNextSection() {
    if (!isLastSection) {
      currentSectionIndex.update(n => n + 1);
    }
  }

  function goToPreviousSection() {
    if (!isFirstSection) {
      currentSectionIndex.update(n => n - 1);
    }
  }
</script>

<main class="font-sans bg-custom">
	<nav class="flex items-center justify-between bg-custom p-2 px-4 md:px-8 text-white">
		<div class="rounded-full">
		  <img src="/logo.png" class="rounded-full" alt="Status Saver Logo" width={40} height={40} />
		</div>
		<h1 class="text-xl font-bold">{currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}</h1>
		<div class="flex space-x-4">
		  <button
			class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
			on:click={goToPreviousSection}
			disabled={isFirstSection}
		  >
			Previous
		  </button>
		  <button
			class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
			on:click={goToNextSection}
			disabled={isLastSection}
		  >
			Next
		  </button>
		</div>
	  </nav>
 <div class="">

	{#if currentSection === 'home'}
    <section class="bg-cover bg-center bg-no-repeat min-h-screen p-8 text-white">
		<div class="info flex text-white flex-col justify-center w-full align-center">
			<h2 class="text-2xl mb-4">Status Saver</h2>
			<p class="text-gray-100 leading-relaxed">
				Status Saver is a powerful Android application designed to enhance your WhatsApp experience. 
				It allows you to easily view, manage, and save WhatsApp statuses, ensuring you never miss out 
				on your friends' memorable moments.
			</p>
		</div>

      <p class="text-gray-600 leading-relaxed">
        Status Saver is a powerful Android application designed to enhance your WhatsApp experience. 
        It allows you to easily view, manage, and save WhatsApp statuses, ensuring you never miss out 
        on your friends' memorable moments.
      </p>
      <p class="text-gray-600 leading-relaxed">
        With its intuitive interface and robust features, Status Saver makes it simple to keep track 
        of your favorite statuses and share them with others. Whether you're using regular WhatsApp 
        or WhatsApp Business, our app has got you covered.
      </p>
    </section>
  {:else if currentSection === 'features'}
    <section class="space-y-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each features as feature}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-2">{feature.icon}</div>
            <h3 class="font-semibold text-lg mb-2 text-gray-800">{feature.title}</h3>
            <p class="text-gray-600">{feature.description}</p>
          </div>
        {/each}
      </div>
    </section>
  {:else if currentSection === 'usage'}
    <section class="space-y-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">How to Use</h2>
      <ol class="space-y-6">
        {#each usageSteps as step, index}
          <li class="flex items-center space-x-4">
            <img src={step.image} alt="Step {index + 1}" class="w-24 h-24 rounded-full shadow-md" />
            <div>
              <span class="font-semibold text-blue-600">Step {index + 1}:</span>
              <p class="text-gray-700">{step.step}</p>
            </div>
          </li>
        {/each}
      </ol>

      <div class="mt-12">
        <h3 class="text-xl font-semibold mb-4 text-gray-700">Status Preview</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#each sampleStatuses as status}
            <div class="bg-gray-100 p-4 rounded-lg">
              <div class="relative">
                <img src={status.imageUrl} alt={status.isVideo ? "Video Thumbnail" : "Status Image"} class="rounded-lg w-full" />
                {#if status.isVideo}
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {#if status.duration}
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                      {status.duration}
                    </div>
                  {/if}
                {/if}
              </div>
              <p class="mt-2 text-center text-gray-600">{status.isVideo ? "Video Status" : "Image Status"}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>
  {/if}
</div>
</main>

<style>
  /* Add any additional styles here if needed */
</style>