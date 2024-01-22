import type { Planet } from './planet';

export type PlanetsList = {
	id: Planet["id"];
	name: Planet["name"];
}[];