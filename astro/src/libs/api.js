import { groq, useSanityClient } from "astro-sanity";

export async function listPosts() {
 const query = groq`
  *[_type == "post"]{
    title,
    slug,
    mainImage,
    releaseDate,
    excerpt,
    body
  }
 `;
 const guide = await useSanityClient().fetch(query);
 return guide;
}

export async function blogGet() {
 const query = groq`
  *[_type == "blog"]{
    title,
    slug,
    releaseDate,
    excerpt,
    body
  }
 `;
 const blogPosts = await useSanityClient().fetch(query);
 return blogPosts;
}

export async function devsGet() {
 const query = groq`
  *[_type == "devs"]{
    title,
    slug,
    mainImage,
    releaseDate,
    excerpt,
    body
  }
 `;
 const devsPosts = await useSanityClient().fetch(query);
 return devsPosts;
}

export async function groupsGet() {
 const query = groq`
    *[_type == "groups"]{
      group_name,
      group_time,
      body,
      group_url,
    } | order(_createdAt desc)
 `;
 const groups = await useSanityClient().fetch(query);
 return groups;
}
