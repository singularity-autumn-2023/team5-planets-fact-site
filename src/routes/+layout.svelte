<script>
	import Header from '$lib/Header.svelte';

	export let data;
	console.log(data);
</script>

<Header planets={['mercury', 'venus']}/>

{data}

<slot />