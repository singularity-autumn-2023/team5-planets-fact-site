import fetchPlanets from '../services';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`http://localhost:8081/api/v1/planets`);
	const item = await res.json();
	console.log(item)

	return { item };


	// let planets;
	//
	// try {
	// 	planets = await fetchPlanets();
	// } catch (err) {
	// 	if (err instanceof Error) {
	// 		alert(err.message);
	// 	}
	// }
	//
	// return { planets };
};