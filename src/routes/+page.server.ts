import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { planets } = await parent();

	throw redirect(308, `/${planets?.at(0)?.id}?tab=overview`);
};
