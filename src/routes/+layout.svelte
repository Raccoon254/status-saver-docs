<script>
	import '../app.css';
	import 'aos/dist/aos.css';
   import AOS from "aos";

   import { onMount } from 'svelte';

   onMount(() => {
      AOS.init();
			AOS.refresh();
   });
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
</style>
