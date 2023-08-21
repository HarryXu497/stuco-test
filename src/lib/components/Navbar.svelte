<script lang="ts">
 	import themeStore from "$lib/stores/theme.store";

	// Reads theme data from the theme store
	$: icon = $themeStore === "dark" ? "ri-moon-fill" : "ri-moon-line";

	/** 
	 * Updates the theme store with the new theme value once the theme is toggled
	*/
	function onThemeChange() {
		themeStore.update(oldValue => {
			if (oldValue === "dark") {
				return "light";
			}

			return "dark";
		})
	}
</script>

<nav>
	<div class="nav__logo">
		<a href="/">RHHS STUCO</a>
	</div>
	<div class="nav__links">
		<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/events">Events</a></li>
		<li><a href="/clubs">Clubs</a></li>
		<li><a href="/gallery">Gallery</a></li>
		<li><a href="/members">Members</a></li>
		<button
			class="{icon} change-theme"
			on:click={onThemeChange}
			aria-roledescription="Button which toggles the theme of the website"
			/>
		</ul>
	</div>
</nav>

<style lang="scss">
  @use "../../styles/exports.scss" as exports;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;900&family=Poppins:wght@300;400;500;700;900&display=swap");

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 3rem;
    font-family: "Inter", sans-serif;
  }

  nav a {
    color: inherit;
    text-decoration: none;
  }

  .nav__logo,
  .nav__links > ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav__logo a {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--color-primary);
  }

  .nav__links > ul {
    gap: 3.5rem;

    a {
      font-size: 1.125rem;
      font-weight: lighter;
      color: inherit;
    }
  }

  .change-theme {
	all: unset;
    display: inline-block;
    color: inherit;
    font-size: 1.5rem;

	&:hover {
		cursor: pointer;
	}
  }
</style>
