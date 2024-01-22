<script lang="ts">
	import type { PlanetsList } from '../types/planetsList';

	export let planets: PlanetsList | [];
</script>

<header>
	<nav>
		<ul>
			{#each planets as { id, name }}
				<li><a href="/{id}">{name}</a></li>
			{/each}
		</ul>
	</nav>
</header>