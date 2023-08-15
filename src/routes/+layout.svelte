<script>
	// Global Styling
	import '../app.scss';
</script>


<header>
	<nav>
		<div class="nav__logo">
			<a href="/">RHHS STUCO</a>
		</div>
		<div class="nav__links">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/">Events</a></li>
				<li><a href="/">Clubs</a></li>
				<li><a href="/">Gallery</a></li>
				<li><a href="/">Members</a></li>
				<i class="ri-moon-line change-theme"></i>
			</ul>
		</div>
	</nav>
</header>

<slot/>

<footer>

</footer>

<style lang="scss">
	@use "../styles/exports.scss" as exports;
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;900&family=Poppins:wght@300;400;500;700;900&display=swap');

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 2rem 3rem;
		font-family: 'Inter', sans-serif;
	}

	nav a {
		color: inherit;
		text-decoration: none;
	}

	.nav__logo, .nav__links > ul {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.nav__logo a {
		font-size: 1.5rem;
		font-weight: 900;
		color: exports.$color-primary;
	}

	.nav__links > ul {
		gap: 3.5rem;

		a {
			font-size: 1.125rem;
			font-weight: bold;
			color: exports.$color-nav-link;
		}
	}

	.change-theme {
		display: inline-block;
		color: exports.$color-nav-link;
		font-size: 1.5rem;
	}
</style>