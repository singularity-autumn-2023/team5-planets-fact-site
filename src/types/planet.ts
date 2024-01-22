export type Planet = {
	geology: {
		content: string;
		source: string;
	},
	id: string;
	name: string;
	overview: {
		content: string;
		source: string;
	},
	radius: number;
	revolution: number;
	rotation: number;
	structure: {
		content: string;
		source: string;
	},
	temperature: number;
}