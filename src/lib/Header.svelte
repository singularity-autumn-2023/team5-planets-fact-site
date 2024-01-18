<script lang="ts">
	export let planets: {
		id: string;
		name: string;
	}[];
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