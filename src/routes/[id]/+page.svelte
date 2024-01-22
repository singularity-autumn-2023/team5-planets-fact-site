<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.planet.name}</h1>
<h1>{data.planet.radius}</h1>


<style>
	:root {
			color: white;
	}
</style>