<script lang="ts">
	import '../app.css';
	export let planets: {
		id: string;
		name: string;
	}[];

	let isMobileMenuOpen: boolean = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function handlePlanetClick() {}
</script>

<!-- <body> -->
<header
	class="max-w-[1440px] w-full mx-auto pl-8 pr-10 pt-5 pb-7 border-b-[1px] border-white border-opacity-20"
>
	<div class="header-content">
		<div>
			<h2 class="header_logo">THE PLANETS</h2>
		</div>
		<div class="header_menu">
			<ul>
				{#each planets as planet}
					<li>
						<a href="/{planet.id}">{planet.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<button
			type="button"
			class="mobile-menu-button"
			on:click={toggleMobileMenu}
			aria-expanded={isMobileMenuOpen}
		>
			<img src="src/lib/images/Group.svg" alt="Menu" />
		</button>
	</div>

	<!-- Мобильное меню -->
	{#if isMobileMenuOpen}
		<div id="mobile-dropdown" class="mobile-dropdown">
			{#each planets as planet}
				<a href="/{planet.id}" on:click={handlePlanetClick}>{planet.name}</a>
			{/each}
		</div>
	{/if}
</header>

<!-- </body> -->

<style>
	.header_logo {
		color: #fff;
		font-family: 'Antonio', sans-serif;
		font-size: 1.75rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: -0.06563rem;
		text-transform: uppercase;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header_menu li {
		color: #fff;
		font-family: 'Spartan', sans-serif;
		font-size: 0.6875rem;
		font-style: normal;
		font-weight: 700;
		line-height: 1.5625rem;
		letter-spacing: 0.0625rem;
		text-transform: uppercase;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 2.06rem;
	}

	/* li {
		margin-right: 2.06rem;
	} */

	a {
		text-decoration: none;
		color: white;
	}

	/* ##Device = Desktops */
	@media (min-width: 768px) {
		.mobile-dropdown {
			display: none;
		}

		.mobile-dropdown a {
			display: none;
		}
	}

	.mobile-menu-button {
		display: none;
	}

	/* ##Device = Tablets*/
	@media only screen and (min-width: 460px) and (max-width: 767px) {
		.header-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.header_logo {
			margin-bottom: 1.69rem;
		}

		.mobile-dropdown {
			display: none;
		}

		.mobile-dropdown a {
			display: none;
		}
	}

	.mobile-menu-button {
		display: none;
	}

	/* ##Device = Most of the Smartphones Mobiles */
	@media (max-width: 460px) {
		.header_menu {
			display: none;
		}

		.mobile-dropdown {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			position: absolute;
			top: 60px;
			right: 10px;
			background-color: #070724;
			padding: 10px;
			z-index: 1;
		}

		.mobile-dropdown a {
			color: white;
			margin-bottom: 10px;
		}

		.mobile-menu-button {
			display: flex;
			background: none;
		}
	}
</style>
