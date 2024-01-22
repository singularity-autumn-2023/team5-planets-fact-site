import type { LayoutServerLoad } from './$types';
import fetchPlanets from '$lib/services/fetchPlanets';
import type { PlanetsList } from '../types/planetsList';

export const load: LayoutServerLoad<Promise<{planets: PlanetsList | []}>> = async () => {
	let planets: PlanetsList | [] = [];

	try {
		planets = await fetchPlanets();
	} catch (err) {
		if (err instanceof Error) {
			console.log(err.message);
		}
	}

	return { planets };
};