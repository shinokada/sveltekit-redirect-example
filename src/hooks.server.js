export const handle = async ({ event, resolve }) => {
  // vite function to get all md files from components dir
  const allBlogFiles = import.meta.glob('/src/routes/blog/*.md');
  const allPagesFiles = import.meta.glob('/src/routes/pages/*.md');
  // returns an array of files
  const blogFiles = Object.entries(allBlogFiles);
  const pagesFiles = Object.entries(allPagesFiles);
  // returns an array of paths
  const allBlog = await Promise.all(
    blogFiles.map(async ([path]) => {
      const postPath = path.slice(16, -3);
      return postPath;
    })
  );
  const allPages = await Promise.all(
    pagesFiles.map(async ([path]) => {
      const postPath = path.slice(17, -3);
      return postPath;
    })
  );

  // check if pathname is included itn allPosts
  if (allBlog.includes(event.url.pathname)) {
    console.log('redirecting ...', `${event.url.origin}/blog${event.url.pathname}`);
    // redirect
    return Response.redirect(`${event.url.origin}/blog${event.url.pathname}`, 301);
  } else if (allPages.includes(event.url.pathname)) {
    // redirect
    return Response.redirect(`${event.url.origin}/pages${event.url.pathname}`, 301);
  }

  return await resolve(event);
};
