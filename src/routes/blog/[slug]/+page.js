// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, dir } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		dir
	};
}
