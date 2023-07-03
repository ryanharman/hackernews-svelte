import type { PageLoad } from './$types';

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
	isPost: boolean;
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

export const load = (async ({ fetch, params }) => {
	const id = params.id;

	const item: Response = await fetch(
		`https://node-hnapi.herokuapp.com/item/${id}`
	).then((r) => r.json());

	return { item: { ...item, isPost: true } };
}) satisfies PageLoad;

export type { Response as PostResponse };
