# File Base Routing

## in /app folder
- /app/posts/page.js
- /app/posts/[postId]/page.js 
    - use for dynamic routing
- /app/layouts.js or /app/loading.js or /app/error.js
    - error.js can only be use for "use client"

# Data Fetching

## Server Side Rendering (SSR)
``` 
    // use this to always fetch the latest changes
    use cache: 'no store'
```
## Static Site Generation (SSG)
- Nextjs by default uses SSG and cache data by default, used for data that doesn't change frequently blog, marketing and etc.
## Incremental Site Generation (ISG)
``` 
    // combines the benefits of SSR and SSG
    // this means data will cache, but with specific timeframe it will refresh for the latest data
    next: { revalidate: 10 }
```

# API Endpoints 
## using file base /app/api/* routing (recommended)
- use the /app/api folder to create js files for api routing
- to create an api routes
    - Create a folder /app/api/{name of folder}/route.js
    - Example /app/api/users/route.js
- Nexts supports the following HTTP verbs
    - GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
```
// Example
export async function GET(requests) {
    const users = [
        { id: 1, name: 'John'},
        { id: 2, name: 'Paul'},
        { id: 3, name: 'Kelvin'},
    ];
    return new Response(JSON.stringify(users));
}
```
## using route.js inside /app/route.js
- or manually create route.js inside /app folder

# SEO & Metadata
- Two ways of defining Metadata
    - Static Metadata
    - Dyanamic Metadata
## Static Metadata
```
// export the below code on your page.js and it will automatically apply to your html header

export const metadata = {
    title: 'This is Posts'
}
```
## Dynamic Metadata
```
// export the below code on your page.js and it will automatically apply to your html header

export async function generateMetadata({params, searchParam}) {
    const product = await getProduct(params.js);
    return {title: product.title}
}
```

# File Stucture

- app/
    - layout.jsx
    - page.jsx
- components/
    - Feed.jsx
    - Form.jsx
    - Nav.jsx
    - Footer.jsx
    - Profle.jsx
- models/
- node_modules
- public
    - icons/
    - images/
- styles/
    - global.css
- utils/

# Standards

## app router naming
- /blog/ = /blog 
- /blog/slug/page.js = /blog/blog-12345
- use the layout to inherit the design to your child components

## static site generation
- use the two components to build a dynamic static sites
    - generateStaticParams
        - use to fetch all data from backend API
    - generateMetadata
        - use to add dynamic metadata
```
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

```

## out folder
- add out export to your next.config.mjs file to create a output folder during build time
```
const nextConfig = {
    output: 'export',
};
```
