
const API = "http://localhost:8080";

const getBlog = async (slug)  => {
  const response = await fetch(`${API}/blogs/${slug}`);
  const post = await response.json();
  if (!post) notFound()
  return await post;
}


export async function generateStaticParams() {
  const response = await fetch(`${API}/blogs`)
  const posts = await response.json()

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlog(slug);

  return {
    title: post.description,
    description: post.slug,
  };
}

async function Blog({ params }) {
  const { slug } = await params;

  const post = await getBlog(slug);

  return (
    <ul>
      <h1>{post.slug}</h1>
      <p>{post.description}</p>
    </ul>
  )
}

export default Blog