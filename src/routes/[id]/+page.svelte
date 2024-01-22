<script lang="ts">
	import Menu from '$lib/Menu.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Menu />

<h1>{data.planet.name}</h1>