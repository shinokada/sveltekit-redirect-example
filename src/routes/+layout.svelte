<script>
  import '../app.css';
</script>

<main>
  <h1>Redirect examples</h1>
  <h2>Proper links</h2>
  <a href="/">Home</a>
  <h3>Blog posts</h3>
  <a href="/blog/post-1">Post 1: Link /blog/post-1</a>
  <a href="/blog/post-2">Post 2: Link /blog/post-2</a>

  <h3>Pages</h3>
  <a href="/pages/about">About: Link /pages/about</a>
  <a href="/pages/contact">Contact: Link /pages/contact</a>
  <a href="/pages/portfolio">Portfolio: Link /pages/portfolio</a>

  <h2>Redirect</h2>
  <h3>Blog posts</h3>
  <a href="/post-1">Post 1: Link /post-1</a>
  <a href="/post-2">Post 2: Link /post-2</a>

  <h3>Pages</h3>
  <a href="/about">About: Link /about</a>
  <a href="/contact">Contact Link /contact</a>
  <a href="/portfolio">Portfolio Link /portfolio</a>

  <slot />
</main>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
