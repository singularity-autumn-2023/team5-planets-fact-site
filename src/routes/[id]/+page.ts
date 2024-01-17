import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`http://localhost:8081/api/v1/planets`);
	const item = await res.json();
	console.log(item)
	return { item };
};