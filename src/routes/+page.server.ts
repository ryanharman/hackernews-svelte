type Response = {
	id: number;
	title: string;
	points: number;
	user: string;
	time: number;
	time_ago: string;
	comments_count: number;
	type: string;
	url: string;
	domain: string;
};

export async function load({ fetch, url }) {
	const page = url.searchParams.get('page') || 1;

	const items: Response[] = await fetch(
		`https://node-hnapi.herokuapp.com/news?page=${page}`
	).then((r) => r.json());

	return {
		page: +page,
		items
	};
}

export type { Response as NewsResponse };
