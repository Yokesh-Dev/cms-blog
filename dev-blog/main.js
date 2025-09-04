const projectId = 'ltu8jl1f';
const dataset = 'production';
const query = encodeURIComponent('*[_type == "post"]{title, slug, publishedAt}');
const url = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${query}`;

fetch(url)
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  })
  .then(({ result }) => {
    console.log('Posts from Sanity:', result);

    const container = document.getElementById('posts');
    if (!container) {
      console.error('Missing #posts container in HTML');
      return;
    }

    if (!result || result.length === 0) {
      container.innerHTML = '<p>No posts found.</p>';
      return;
    }

    result.forEach(post => {
      const slug = post.slug?.current || 'no-slug';
      const publishedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString()
        : 'No date';

      const postDiv = document.createElement('div');
      postDiv.innerHTML = `
        <h2><a href="post.html?slug=${slug}">${post.title}</a></h2>
        <p>Published: ${publishedDate}</p>
      `;
      container.appendChild(postDiv);
    });
  })
  .catch(err => {
    console.error('Fetch error:', err);
    const container = document.getElementById('posts');
    if (container) {
      container.innerHTML = '<p>Error loading posts.</p>';
    }
  });
