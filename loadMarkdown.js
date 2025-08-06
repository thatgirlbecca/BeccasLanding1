// Change this to the name of the markdown file you want to load
const markdownFile = 'post1.md';

fetch(markdownFile)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Could not load ${markdownFile}`);
    }
    return response.text();
  })
  .then(markdown => {
    const html = marked.parse(markdown); // Convert markdown to HTML
    document.getElementById('blog-content').innerHTML = html;
  })
  .catch(error => {
    document.getElementById('blog-content').innerHTML = `<p>Error loading post.</p>`;
    console.error(error);
  });
