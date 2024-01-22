import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { baseUrl } from '$lib/baseUrl';
import type { Planet } from '../../types/planet';

export const load: PageServerLoad = async ({ fetch, params }) => {
	try {
		const res = await fetch(`${baseUrl}/${params.id}`);
		if (!res.ok) {
			await Promise.reject(
				new Error(`planet/${params.id} fetch error: ${res.status} - ${res.statusText}`),
			);
		}
		const planet: Planet = await res.json();
		return { planet };

	} catch (err) {

		if (err instanceof Error) {
			throw error(400, err.message);
		}
		throw error(404, 'Not found!');
	}
};