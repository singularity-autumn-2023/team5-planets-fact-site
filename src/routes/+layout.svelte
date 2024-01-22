<script lang="ts">
	import 'reset-css';
	import Header from '$lib/Header.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Header planets={data.planets} />

<main>
	<slot />
</main>
