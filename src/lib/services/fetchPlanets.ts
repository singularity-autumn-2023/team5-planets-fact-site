import { baseUrl } from '$lib/baseUrl';
import type { PlanetsList } from '../../types/planetsList';

type ResponseBody = {
	count: number;
	data: PlanetsList;
}

async function fetchPlanets() {
	const res = await fetch(baseUrl, {
		cache: "no-cache",
	});
	if (!res.ok) {
		await Promise.reject(
			new Error(`planets fetch error: ${res.status} - ${res.statusText}`),
		);
	}

	const json: ResponseBody = await res.json();

	return json.data;
}

export default fetchPlanets;