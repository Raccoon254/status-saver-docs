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

	let year = new Date().getFullYear()

	const usageSteps = [
		{
			step: 'Install the Status Saver app on your Android device.',
			image: '1.png',
			icon: 'ogqbmdnl',
		},
		{
			step: 'Open the app and grant necessary permissions.',
			image: '2.png',
			icon: 'gqjpawbc',
		},
		{
			step: 'Choose between regular WhatsApp or WhatsApp Business or Both.',
			image: '3.png',
			icon: 'cywksamr',
		},
		{
			step: 'Browse through available statuses.',
			image: '4.png',
			icon: 'rehjpyyh',
		},
		{
			step: 'Tap on a status to view it in full screen.',
			image: '5.png',
			icon: 'rahouxil',
		},
		{
			step: 'Use the download button to save a status to your device.',
			image: '6.png',
			icon: 'xyqnpwdc',
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
				<h1 class="text-4xl font-bold">Status</h1>
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
			<section class="grid grid-cols-1 md:grid-cols-2 p-5 md:p-8 md:gap-8 text-white">
				<div class="info flex text-white flex-col justify-center w-full align-center">
					<div class="text-3xl md:text-5xl w-fit md:mt-10 relative font-bold mb-4">
						Save with a
						<span class="text-green"> click </span>
						<div
							class="h-1 w-16 md:w-24 rounded-md bg-green absolute -right-4 -bottom-1 md:-bottom-2"
						></div>
					</div>

					<p class="text-gray-100 mt-4 leading-relaxed">
						Designed to enhance your WhatsApp experience. It allows you to easily view, manage, and
						save WhatsApp statuses, ensuring you never miss out on your friends' memorable moments.
					</p>
				</div>
				<div class="flex text-white flex-col relative justify-center align-center">
					<img src="/iphone mockup.png" alt="iphone mockup" class="md:absolute md:mt-40" />
				</div>
			</section>
		{:else if currentSection === 'features'}
			<section class="space-y-6 p-5 text-white md:p-8">
				<h2 class="text-3xl md:text-4xl text-end font-semibold mb-4">Features</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					{#each features as feature}
						<div
							class="p-6 rounded-xl ring-1 border-gray-600 ring-green border ring-offset-2 ring-offset-gray-950 cursor-pointer hover:scale-105 transition-all"
						>
							<div class="text-4xl mb-2">
								<lord-icon
									src={`https://cdn.lordicon.com/${feature.icon}.json`}
									trigger="loop"
									colors="primary:#fffff,secondary:#1DC53C"
									style="width:50px;height:50px"
								>
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
				<h2 class="text-3xl md:text-4xl text-end font-semibold mb-4 text-white">How to Use</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					{#each usageSteps as step, index}
						<!-- if the index is odd row-reverse -->
						<div
							class="flex items-center ring-1 border-gray-600 ring-green border ring-offset-2 ring-offset-gray-950 cursor-pointer hover:scale-105 transition-all p-4 rounded-2xl space-x-4 w-full gap-4"
							class:flex-row-reverse={index % 2 === 1}
							class:md:flex-row={index % 2 === 1}
							class:justify-end={index % 2 === 1}
						>
							<div class="flex items-start flex-col w-full gap-4">
								<lord-icon
									src={`https://cdn.lordicon.com/${step.icon}.json`}
									trigger="loop"
									colors="primary:#fffff,secondary:#1DC53C"
									style="width:50px;height:50px"
								>
								</lord-icon>
								<div>
									<span class="font-semibold text-blue-300">Step {index + 1}:</span>
									<p class="text-gray-200">{step.step}</p>
								</div>
							</div>
							<img src={step.image} alt="Step {index + 1}" class="h-44 rounded-2xl" />
						</div>
					{/each}
				</div>
			</section>
		{/if}

		<div class="" class:mt-12={currentSection !== 'home'} class:md:mt-80={currentSection === 'home'}>
			<div class="footer text-white py-8 px-4 md:px-8">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
					<div class="text-center w-full flex flex-col items-center justify-center">
						<div class="relative">
							<img
							src="/ken.HEIC"
							alt="Ken Tom"
							class="rounded-full ring ring-offset-4 ring-white ring-opacity-15 ring-offset-custom object-cover w-32 h-32 mx-auto md:mx-0 mb-4"
						/>
						<img
							src="/white.png"
							alt="Ken Tom"
							class="absolute mix-blend-screen opacity-40 object-cover w-20 h-20 mx-auto md:mx-0 mb-4 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
						/>
						</div>
						<div class="flex flex-col items-center justify-center">
							<img src="/kentom.jpg" alt="KenTom logo" class="w-36" />
						<p class="text-gray-400 text-xs mt-1">All in one dev solutions</p>
						</div>
					</div>
					<div class="text-left col-span-2">
						<p class="mb-4">
							Hi, I'm Ken Tom, the developer behind Status Saver. With a passion for creating
							intuitive and user-friendly mobile applications, I strive to enhance the way
							people interact with technology in their daily lives.
						</p>
						<p class="mb-4">
							Status Saver is just one of my projects aimed at simplifying and improving the
							WhatsApp experience for users. I'm always working on new ideas and improvements,
							so stay tuned for more exciting apps!
						</p>
						<div class="flex flex-wrap justify-start gap-4 mt-4">
							<a
							  href="https://stevetom.vercel.app/"
							  target="_blank"
							  rel="noopener noreferrer"
							  class="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ring-1 ring-white ring-offset-2 ring-offset-custom ring-opacity-10 hover:ring-opacity-100 hover:ring-green transition-colors duration-300 ease-in-out"
							>
							  <i class="fas fa-briefcase mr-2"></i> Portfolio
							</a>
							<a
							  href="mailto:tomsteve187@gmail.com"
							  class="flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ring-1 ring-white ring-offset-2 ring-offset-custom ring-opacity-10 hover:ring-opacity-100 hover:ring-green transition-colors duration-300 ease-in-out"
							>
							  <i class="fas fa-envelope mr-2"></i> Email
							</a>
							<a
							  href="https://github.com/Raccoon254"
							  target="_blank"
							  rel="noopener noreferrer"
							  class="flex items-center bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full ring-1 ring-white ring-offset-2 ring-offset-custom ring-opacity-10 hover:ring-opacity-100 hover:ring-green transition-colors duration-300 ease-in-out"
							>
							  <i class="fab fa-github mr-2"></i> GitHub
							</a>
							<a
							  href="https://www.linkedin.com/in/steve-tom-822a81230/"
							  target="_blank"
							  rel="noopener noreferrer"
							  class="flex items-center bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full ring-1 ring-white ring-offset-2 ring-offset-custom ring-opacity-10 hover:ring-opacity-100 hover:ring-green transition-colors duration-300 ease-in-out"
							>
							  <i class="fab fa-linkedin mr-2"></i> LinkedIn
							</a>
							<a
							  href="https://wa.link/w1774n"
							  target="_blank"
							  rel="noopener noreferrer"
							  class="flex items-center bg-green hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full ring-1 ring-white ring-offset-2 ring-offset-custom ring-opacity-10 hover:ring-opacity-100 hover:ring-green transition-colors duration-300 ease-in-out"
							>
							  <i class="fab fa-whatsapp mr-2"></i> WhatsApp
							</a>
						  </div>
					</div>
				</div>
				<div class="mt-8 flex w-full items-center flex-col justify-center gap-4">
					<div>
						<img src="/white.png" alt="Ken Tom" class="w-20 mx-auto" />
					</div>
					<p class="text-gray-500">&copy; {year} KenTom. All rights reserved.</p>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	/* Add any additional styles here if needed */
</style>
