import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { baseUrl } from '$lib/baseUrl';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`${baseUrl}/${params.id}`);
	const json = await res.json();

	if (!json) throw error(404);

	return { planet: json };
};