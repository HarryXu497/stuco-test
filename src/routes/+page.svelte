<script lang="ts">
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	$: console.log(data)
</script>

<main>
	<!-- Hero Section -->
	<div class="vector-container">
		<img src="images/bg-vector.svg">
	</div>
	<section class="hero">
		<h1>RHHS STUCO</h1>
	</section>

	<!-- Upcoming events -->
	<section class="">
		<h2>Events</h2>
		{#each data.events as event}
			<h3>{event.name}</h3>
			<h3>{event.description}</h3>
			<h3>{event.date}</h3>
		{/each}
	</section>
</main>

<style lang="scss">
	@use "../styles/exports.scss" as exports;
	@use "sass:color";

	.vector-container {
		position: absolute;
		top: 0;
		right: 0;
		z-index: -1;
	}

	.hero {
		/* Grid layout to layout the text and image */
		$dimensions: 24;

		display: grid;
		grid-template-columns: repeat($dimensions, calc(100vw / $dimensions));
		grid-template-rows: repeat($dimensions,  calc(calc(100vh - 6rem) / $dimensions));

		min-height: calc(100vh - 6rem);

		h1 {
			grid-row: 7 / 16;
			grid-column: 4 / 12;

			font-size: 10rem;
			font-weight: 900;
			font-family: "Poppins";
			line-height: 0.85;

			background: exports.$color-primary;
			background: linear-gradient(135deg, exports.$color-primary 30%, color.adjust(exports.$color-primary, $lightness: 20%) 100%);
			background-clip: text;-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		:global(.image-carousel) {
			grid-row: 5 / 18;
			grid-column: 15 / 20;
		}
	}
</style>