type PlanetsBody = {
	count: number;
	data: {
		id: string;
		name: string;
	}[];
};

async function fetchPlanets() {
	const res = await fetch("http://localhost:8081/api/v1/planets", {
		cache: "no-cache",
	});
	if (!res.ok) {
		await Promise.reject(
			new Error(`planets fetch error: ${res.status} - ${res.statusText}`),
		);
	}

	const json: PlanetsBody = await res.json();

	return json.data;
}

export default fetchPlanets;