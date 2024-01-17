<script lang="ts">
	export let planets: string[];
</script>

<header>
	<nav>
		<ul>
			{#each planets as planet}
				<li><a href="/{planet}">{planet}</a></li>
			{/each}
		</ul>
	</nav>
</header>