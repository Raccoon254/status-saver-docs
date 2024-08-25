<script lang="ts">
	import { writable } from 'svelte/store'

	const features = [
		{
			title: 'View WhatsApp Statuses',
			description: "Browse through your contacts' WhatsApp statuses effortlessly.",
			icon: 'hbtheitu',
		},
		{
			title: 'Download Statuses',
			description: 'Save your favorite statuses to your device with a single tap.',
			icon: 'xyqnpwdc',
		},
		{
			title: 'Multi-select Download',
			description: 'Select and download multiple statuses at once for convenience.',
			icon: 'ozmbktct',
		},
		{
			title: 'Support for WhatsApp Business',
			description: 'Seamlessly works with both regular WhatsApp and WhatsApp Business.',
			icon: 'pagmnkiz',
		},
		{
			title: 'Gallery View',
			description: 'View all your saved statuses in an elegant gallery format.',
			icon: 'rehjpyyh',
		},
		{
			title: 'Video Playback',
			description: 'Play video statuses directly within the app for instant viewing.',
			icon: 'msrokfyb',
		},
	]

	const usageSteps = [
		{
			step: 'Install the Status Saver app on your Android device.',
			image: 'https://via.placeholder.com/150?text=Install+App',
		},
		{
			step: 'Open the app and grant necessary permissions.',
			image: 'https://via.placeholder.com/150?text=Grant+Permissions',
		},
		{
			step: 'Choose between regular WhatsApp or WhatsApp Business.',
			image: 'https://via.placeholder.com/150?text=Choose+WhatsApp',
		},
		{
			step: 'Browse through available statuses.',
			image: 'https://via.placeholder.com/150?text=Browse+Statuses',
		},
		{
			step: 'Tap on a status to view it in full screen.',
			image: 'https://via.placeholder.com/150?text=View+Full+Screen',
		},
		{
			step: 'Use the download button to save a status to your device.',
			image: 'https://via.placeholder.com/150?text=Download+Status',
		},
	]

	const sampleStatuses = [
		{
			imageUrl: 'https://via.placeholder.com/300?text=Image+Status',
			isVideo: false,
			duration: null,
		},
		{
			imageUrl: 'https://via.placeholder.com/300?text=Video+Status',
			isVideo: true,
			duration: '0:15',
		},
	]

	const sections = ['home', 'features', 'usage']
	const currentSectionIndex = writable(0)

	$: currentSection = sections[$currentSectionIndex]
	$: isFirstSection = $currentSectionIndex === 0
	$: isLastSection = $currentSectionIndex === sections.length - 1

	function goToNextSection() {
		if (!isLastSection) {
			currentSectionIndex.update((n) => n + 1)
		}
	}

	function goToPreviousSection() {
		if (!isFirstSection) {
			currentSectionIndex.update((n) => n - 1)
		}
	}
</script>

<main class="font-sans min-h-screen bg-custom">
	<nav class="flex items-center justify-between bg-custom p-8 md:p-16 px-4 md:px-8 text-white">
		<div class="flex gap-3 items-center justify-center">
			<img src="/logo.png" class="rounded-full" alt="Status Saver Logo" width={60} height={60} />
			<span class="relative">
				<h1 class="text-4xl font-bold">
					Status
				</h1>
				<span class="text-green text-sm font-semibold right-1 absolute -mt-2">saver </span>
			</span>
		</div>
		<!-- <h1 class="text-xl font-bold">{currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}</h1> -->
	</nav>

	<div class="navigation fixed z-50 bottom-0 right-0 p-4 flex justify-end">
		<div class="flex space-x-4">
			<button
				class="p-2 bg-blue-500 text-white rounded-full ring-2 ring-green disabled:ring-gray-700 btn-circle disabled:opacity-50 disabled:cursor-not-allowed"
				on:click={goToPreviousSection}
				disabled={isFirstSection}
			>
				<i class="fas fa-chevron-left"></i>
			</button>
			<button
				class="p-2 bg-blue-500 text-white rounded-full ring-2 ring-green disabled:ring-gray-700 btn-circle disabled:opacity-50 disabled:cursor-not-allowed"
				on:click={goToNextSection}
				disabled={isLastSection}
			>
				<i class="fas fa-chevron-right"></i>
			</button>
		</div>
	</div>

	<div class="">
		{#if currentSection === 'home'}
			<section class="grid grid-cols-1 md:grid-cols-2 p-5 md:p-8 text-white">
				<div class="info flex text-white flex-col justify-center w-full align-center">
					<div class="text-3xl md:text-5xl w-fit md:mt-10 relative font-bold mb-4">
						Save with a 
						<span class="text-green">
							click
						</span>
						<div class="h-1 w-16 md:w-24 rounded-md bg-green absolute -right-4 -bottom-1 md:-bottom-2"></div>
					</div>

					<p class="text-gray-100 mt-4 leading-relaxed">
						Designed to enhance your WhatsApp
						experience. It allows you to easily view, manage, and save WhatsApp statuses, ensuring
						you never miss out on your friends' memorable moments.
					</p>
				</div>
				<div class="flex text-white flex-col relative justify-center align-center">
					<img src="/iphone mockup.png" alt="iphone mockup" class="md:absolute md:mt-40" />
				</div>
			</section>
		{:else if currentSection === 'features'}
			<section class="space-y-6 p-5 text-white md:p-8">
				<h2 class="text-2xl font-semibold mb-4">Features</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					{#each features as feature}
						<div class="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
							<div class="text-4xl mb-2">
								<lord-icon
									src={`https://cdn.lordicon.com/${feature.icon}.json`}
									trigger="loop"
									colors="primary:#fffff,secondary:#08a88a"
									style="width:50px;height:50px">
								</lord-icon>
							</div>
							<h3 class="font-semibold text-lg mb-2 text-gray-50">{feature.title}</h3>
							<p class="text-gray-100">{feature.description}</p>
						</div>
					{/each}
				</div>
			</section>
		{:else if currentSection === 'usage'}
			<section class="space-y-8 p-5 md:p-8">
				<h2 class="text-2xl font-semibold mb-4 text-gray-700">How to Use</h2>
				<ol class="space-y-6">
					{#each usageSteps as step, index}
						<li class="flex items-center space-x-4">
							<img
								src={step.image}
								alt="Step {index + 1}"
								class="w-24 h-24 rounded-full shadow-md"
							/>
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
									<img
										src={status.imageUrl}
										alt={status.isVideo ? 'Video Thumbnail' : 'Status Image'}
										class="rounded-lg w-full"
									/>
									{#if status.isVideo}
										<div class="absolute inset-0 flex items-center justify-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-16 w-16 text-white"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
												/>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										</div>
										{#if status.duration}
											<div
												class="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm"
											>
												{status.duration}
											</div>
										{/if}
									{/if}
								</div>
								<p class="mt-2 text-center text-gray-600">
									{status.isVideo ? 'Video Status' : 'Image Status'}
								</p>
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
