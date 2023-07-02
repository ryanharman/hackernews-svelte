type Response = {
	id: number;
	title: string;
	points: number;
	user: string;
	time: number;
	time_ago: string;
	type: string;
	url: string;
	domain: string;
	comments: Comment[];
	comments_count: number;
};

type Comment = {
	id: number;
	level: number;
	user: string;
	time: number;
	time_ago: string;
	content: string;
	comments: Comment[];
};

export async function load({ fetch, params }) {
	const id = params.id;

	const item: Response = await fetch(
		`https://node-hnapi.herokuapp.com/item/${id}`
	).then((r) => r.json());

	return { item };
}

export type { Response as PostResponse };
