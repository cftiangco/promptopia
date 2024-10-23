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