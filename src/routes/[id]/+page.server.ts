import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { baseUrl } from '$lib/baseUrl';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`${baseUrl}/${params.id}`);
	if (!res.ok) throw error(404);

	const json = await res.json();

	return { planet: json };
};
