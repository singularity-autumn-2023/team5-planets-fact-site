import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { PlanetsList } from '../types/planetsList';
import { baseUrl } from '$lib/baseUrl';

type ResponseBody = {
	count: number;
	data: PlanetsList;
}

export const load: LayoutServerLoad<Promise<{planets: PlanetsList}>> = async ({ fetch }) => {
	try {
		const res = await fetch(baseUrl);
		if (!res.ok) {
			await Promise.reject(
				new Error(`planets fetch error: ${res.status} - ${res.statusText}`),
			);
		}
		const json: ResponseBody = await res.json();
		return { planets: json.data };

	} catch (err) {

		if (err instanceof Error) {
			throw error(400, err.message);
		}
		throw error(404, 'Not found!');
	}
};