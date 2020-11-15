---
tag:
- Gridsome
- Sanity.io
title: How to Make Taxonomy Pages with Gridsome and Sanity.io
description: Taxonomy pages are a great way to group your site's content together
  through reference tags or categories. This is a walkthrough of how to build them
  with Gridsome and Sanity.io
main_image: "/v1605413423/gridsome_sanity_combo.png"

---
Taxonomy pages are a great way to group your site's content through reference tags or categories. For my personal site, I have been using \[Gridsome\]([https://gridsome.org](https://gridsome.org "https://gridsome.org")), a static site generator, and \[Sanity\]([https://sanity.io](https://sanity.io "https://sanity.io")) for my structured content. It's been a great experience using both of these tools so far and I wanted to implement taxonomy pages for my site. Looking into it, Gridsome already supports this feature out of the box by referencing different content nodes and references these different content types with a \`belongsTo\` node. Ok great! Looks like this should be pretty straight forward then.

\## The Problem

As I started to develop this feature by following the gridsome documentation, I created a \`Category.vue\` template for my category pages, which will have a list of each type of content with an associated category, but then when I went to query my content with the \`belongsTo\` node, I found an issue related to the \`belongsTo\` node and the \`sanity-source-gridsome\` plugin which is used to fetch my Sanity graphql schema to map types correctly, and to make all of my content available on my Gridsome site with a single API request. The issue is that no data is returned in the \`belongsTo\` node, even though there are references! There is currently an open \[github issue\]([https://github.com/sanity-io/gridsome-source-sanity/issues/2](https://github.com/sanity-io/gridsome-source-sanity/issues/2 "https://github.com/sanity-io/gridsome-source-sanity/issues/2")) where the Sanity team has said they will be looking into it further, but as of this time, the feature does not work as expected to create taxonomy pages in Gridsome, bummer!

However, after doing a little digging around, I found a solution that has been working for me for the time being by taking a page out of the Sanity teams solution for creating taxonomy pages with Gatsby and Sanity! What's fortunate about Gridsome, is that even though it is a static site generator that utilizes Vue, the Gridsome team took a lot of inspiration from Gatsby when creating the framework, and a lot of things that work with Gatsby can more or less work the same way in Gridsome. So I managed to find a \[blog post\]([https://css-tricks.com/how-to-make-taxonomy-pages-with-gatsby-and-sanity-io/](https://github.com/sanity-io/gridsome-source-sanity/issues/2 "https://github.com/sanity-io/gridsome-source-sanity/issues/2")) on CSS-Tricks from the Head of Developer Relations at Sanity, Knut Melvær, about creating taxonomy pages with Gatsby and Sanity, and sure enough, a similar solution works with Gridsome as well! So while this is not the intended way to use with Gridsome, it is a workaround for the time being until the official Sanity plugin is fixed.

\## The Solution

So the solution for this is to utilize some features of the Gridsome Data Store API to insert our referenced content into our existing data types, but also create pages based on each category. From there, we can use the Gridsome Schema API to resolve the referenced content to our existing data types, so that the data that we need is available in our graphql schema to be queried on a template page.

\### Create Category Slug Pages

Since we cant utilize the \`belongsTo\` feature on in our Category template page query, we'll need to create individual category pages, like a \`/categories/vue\` page, at build time from the category slugs in the schema. Since we know that the category types are being mapped correctly from the Sanity schema to the Gridsome schema, we can query the category types to return the slug and id of the category within the \`createPages\` hook, and programmatically create the pages based off of the slug route, and \`Category.vue\` template. This will build static pages for each category.

```javascript
//gridsome.server.js
module.exports = function(api) {
api.createPages(async ({ createPage, graphql }) => {
    const { data } = await graphql(\`
      {
        allSanityCategory {
          edges {
            node {
              slug {
                current
              }
              id
            }
          }
        }
      }
    \`)

    // If there are any errors in the query, cancel the build and tell us
    if (data.errors) throw data.errors

    // Let‘s gracefully handle if allSanityCategory is null
    const categoryEdges = (data.allSanityCategory || {}).edges || \[\]
    categoryEdges
      // Loop through the category nodes, but don't return anything
      .forEach(({ node }) => {
      
        // Destructure the id and slug fields for each category
        // const id = node.id
        // const slug = node.slug
        const { id, slug = {} } = node
        
        // If there isn't a slug, we want to do nothing
        if (!slug) return

        // Create the page using the URL path and the template file, and pass down the id
        // that we can use to query for the right category in the template file
        createPage({
          path: \`/categories/${slug.current}\`,
          component: './src/templates/Category.vue',
          context: { id }
        })
    })
})	
}
```

\### Add Referenced Types to Schema

The next step is to utilize the Gridsome Schema API and create brand new schema types that get added to your Gridsome GraphQL schema during build time, which is exactly what we'll use to create a new \`ReferencedPost\` and \`ReferencedProject\` type, which for my portfolio are currently the two data types, \`Post\` and \`Project\`, include references to a collection of categories. This method could be used for any number of types you want to reference, and the types can be called whatever you want. I called them 'Referenced' types to make it clear how these types differ from the original types they are based on and provide context to how they could be used in my site. These types can have any number of properties or property types, so if you just needed, say 3-4 properties from a \`post\` in Sanity, you could map that out accordingly.

One thing I have also found is that some of the Sanity types do not map one to one with the schema types that are mapped in Gridsome. What this means is that you may have to map some types manually from the Sanity schema to the Gridsome schema. This may not always be the case and some types do map one to map, like image types. This is especially true with Sanity's block content type, since it becomes mapped in Gridsome as '_raw' content, and as you'll see in the GROQ responses that Sanity returns the block content without the '_raw' prefix. It is also important to note that these new types must implement the \`Node\` interface, and Gridsome will not infer field types for custom fields unless the \`@infer\` directive is used.

Now you may also be asking, why can't I use the existing types I already have? To answer this, you absolutely could use the existing Sanity types that are already present in your schema. However you would still need to map all of the values manually from the GROQ query response that isn't a one to one map from Sanity to Gridsome, and depending on your types could be a lot of data you may not need for a taxonomy page. This is why I decided to make new types for this purpose. Since I know which values I needed from the \`post\` and \`project\` types for my categories page, I opted for creating new types for this solution. The choice is yours how on how you want to handle the reference types though, either choice would work.

```javascript
//gridsome.server.js

module.exports = function(api) {

...

api.loadSource(({ addSchemaTypes }) => {
addSchemaTypes(`
    type ReferencedPost implements Node @infer {
      	id: ID!
	    title: String
	    publishedAt: Date
	    mainImage: SanityMainImage
	    _rawBody: JSON
	    _rawExcerpt: JSON
	    path: String
	    slug: SanitySlug
	    categories: [JSON]
    }
    type ReferencedProject implements Node @infer {
		id: ID!
		title: String
		publishedAt: Date
		mainImage: SanityMainImage
		_rawExcerpt: JSON
		path: String
		slug: SanitySlug
		categories: [JSON]
	}
`)
})

...
}
```

\### Querying Sanity's references and Adding \`schemaResolvers\`

Now that we have the reference types defined, we'll need to query Sanity for all of the types we want with references and map the responses to our newly defined types. A cool feature that we can utilize with Sanity here is \[GROQ\]([https://www.sanity.io/docs/overview-groq](https://github.com/sanity-io/gridsome-source-sanity/issues/2 "https://github.com/sanity-io/gridsome-source-sanity/issues/2")), which is Sanity's query language. What we can do with GROQ, is query the category type for all of the available categories, and join the types and any properties in the response. So for my use case in which I wanted all of the referenced \`posts\` and \`projects\` from a \`category\`, I wrote a GROQ query that returns all posts based on a \`category\` and \`categoryID\`, and where the \`post\` references the \`categoryID\`. I also return the list of the other categories on the \`post\` to match the ui component that I built to display as a post card. I used a similar query for my \`projects\` type as well.

```javascript
const categoriesQuery = `*[_type == "category" && _id == $categoryID] {
	"posts": *[_type == "post" && references($categoryID)] {
		..., categories[]->{_id, title, slug}
	}
}`
```

With this query I get the following output as a data structure in JSON that I can use to make a \`ReferencedPost\`:

```json
[
	{
		"posts": [
          {
              "_createdAt":"2020-04-28T18:02:39Z"
              "_id":"0f6bb0e4-7009-4b12-9c92-0c3b28f6f1dd"
              "_rev":"0Ox5zGUPjTF8jIyPAfinDK"
              "_type":"post"
              "_updatedAt":"2020-07-11T05:46:12Z"
              "authors": [...]
              "body":
                  [0 - 50]
                  [50 - 100]
                  [100 - 135]
              "categories": [...]
              "excerpt": [...]
              "mainImage": {...}
              "publishedAt": "2020-04-28T06:00:00.000Z"
              "slug": {...}
              "title": "Jamstack Denver Meetup Livestreaming and Recording Setup"
          }	
		]
	}
]
```

This is where we need to create a new \`schemaResolver\` to map the output of the query to our new reference types. We do so by adding a collection of these new schema types, which I have called \`posts\` and \`projects\` which are both arrays of type \`ReferencedPost\` and \`ReferencedProject\` respectively. These collections are then added to the existing \`SanityCategory\` type, or whatever your category type is named, that is already a mapped data structure in Gridsome. This allows us to have access to the collections of \`posts\` and \`projects\` when we query \`allSanityCategory\` in the \`Category.vue\` template.

What we'll also need to do is to import the \`@sanity/client\` module into \`gridsome.server.js\` so that we can interface with our Sanity project and make the necessary GROQ queries. We'll need to initialize it with a Sanity \`projectId\`, and the \`dataset\`, which is the name of the dataset you want to query. These values are unique to your Sanity project and can be viewed from the Sanity management dashboard if you don't have the project id already. I have mine set right now in a separate configuration file but this could also be done with an environment variable. From there, we can create the schema resolvers, make the GROQ queries, and map the data to the collection types as such:

\`\`\`javascript

//gridsome.server.js

const clientConfig = require('./client-config')

const sanityClient = require('@sanity/client')

const client = sanityClient({

projectId: clientConfig.sanity.projectId,

dataset: clientConfig.sanity.dataset,

useCdn: true // \`false\` if you want to ensure fresh data

})

module.exports = function(api) {

    api.loadSource(({ addSchemaResolvers }) => {
    
        addSchemaResolvers({
    
          	SanityCategory: {
    
    	        posts: {
    
    	          type: \['ReferencedPost'\],
    
    	          async resolve(obj) {
    
    	            const posts = \[\]
    
    	            const categoriesQuery =
    
    	              '*\[_type == "category" && _id == $categoryID\] {"posts": *\[_type == "post" && references($categoryID)\]{..., categories\[\]->{_id, title, slug}}}'
    
    	            const categoriesParams = { categoryID: obj._id }
    
    	            await client.fetch(categoriesQuery, categoriesParams).then(category => {
    
    	              category.forEach(categoryPosts => {
    
    	                categoryPosts.posts.forEach(post => {
    
    	                  //Dynamically set the variables that are mapped by gridsome
    
    	                  post\['id'\] = post._id
    
    	                  post\['_rawBody'\] = post.body
    
    	                  post\['_rawExcerpt'\] = post.excerpt
    
    	                  post\['categories'\] = post.categories.map(category => ({
    
    	                    id: category._id,
    
    	                    title: category.title,
    
    	                    slug: category.slug
    
    	                  }))
    
    	                  post\['path'\] = \`/blog/${post.slug.current}\`
    
    	                  posts.push(post)
    
    	                })
    
    	              })
    
    	            })
    
                	return posts
    
            	  }
    
    	        },
    
    	        projects: {
    
    	          type: \['ReferencedProject'\],
    
    	          async resolve(obj) {
    
    	            const projects = \[\]
    
    	            const categoriesQuery =
    
    	              '*\[_type == "category" && _id == $categoryID\] {"projects": *\[_type == "project" && references($categoryID)\]{..., categories\[\]->{_id, title, slug}}}'
    
    	            const categoriesParams = { categoryID: obj._id }
    
    	            await client.fetch(categoriesQuery, categoriesParams).then(category => {
    
    	              category.forEach(categoryProjects => {
    
    	                categoryProjects.projects.forEach(project => {
    
    	                  //Dynamically set the variables that are mapped by gridsome
    
    	                  project\['id'\] = project._id
    
    	                  project\['_rawExcerpt'\] = project.excerpt
    
    	                  project\['categories'\] = project.categories.map(category => ({
    
    	                    id: category._id,
    
    	                    title: category.title,
    
    	                    slug: category.slug
    
    	                  }))
    
    	                  project\['path'\] = \`/projects/${project.slug.current}\`
    
    	                  projects.push(project)
    
    	                })
    
    	              })
    
    	            })
    
    	            return projects
    
    	          }
    
            	}
    
      		}
    
    	})
    
    })

}

\`\`\`

A couple of other things to note in the code above, you may have noticed on lines 16 and 43, that when we resolve the type, we pass in an \`obj\` argument. What that \`obj\` value is, is a \`SanityCategory\` object that the \`schemaResolvers\` are essentially looping through each existing \`SanityCategory\` during build time so that they are resolved with a \`posts\` and \`projects\` collection. The resolve function also needs to be async in this case because each \`SanityCategory\` is making a fetch request to our Sanity dataset with the passed GROQ queries. The \`categoriesParams\` are also an object with defined parameters that are passed into GROQ queries with the \`$\` attribute.

\### Querying the Referenced Types in the Template

Once we have the schema built, we can now access a category's referenced content collections, along with any other data we want to render in the template with a graphql query in the \`Category.vue\` template. In my site, I use the collections as props for a \`PostCard.vue\` and \`ProjectCard.vue\` components, but you can use the collections however you want though to render them.

\`\`\`vue

//templates/Category.vue

<template>

...

</template>

<script>

...

</script>

<page-query>

query Category ($id: ID!) {

metadata {

    sanityOptions {
    
      projectId
    
      dataset
    
    }

}

category: sanityCategory(id: $id) {

    id
    
    title
    
    posts {
    
      id
    
      title
    
      path
    
      publishedAt(format: "MMMM D YYYY")
    
      _rawExcerpt
    
      _rawBody
    
      categories
    
      mainImage {
    
        asset {
    
          _id
    
          url
    
        }
    
        caption
    
        alt
    
        hotspot {
    
          x
    
          y
    
          height
    
          width
    
        }
    
        crop {
    
          top
    
          bottom
    
          left
    
          right
    
        }
    
      }
    
    }
    
    projects {
    
      id
    
      title
    
      path
    
      publishedAt(format: "MMMM D YYYY")
    
      _rawExcerpt
    
      categories
    
      mainImage {
    
        asset {
    
          _id
    
          url
    
        }
    
        caption
    
        alt
    
        hotspot {
    
          x
    
          y
    
          height
    
          width
    
        }
    
        crop {
    
          top
    
          bottom
    
          left
    
          right
    
        }
    
      }
    
    }

}

}

</page-query>

<style>

...

</style>

\`\`\`

and this is the result I get when I go to a \`/categories/twitch\` page. I should note that in this example that the twitch category only has a single referenced blog post and no projects.

![category page with blog posts](https://res.cloudinary.com/zacharybrooks-dev/image/upload/v1605413543/sanity_gridsome_category_example.png)

\## Conclusion

That's it! Hopefully, this helped you find a temporary workaround if you are using Gridsome and Sanity together and wanted to create taxonomy pages. This isn't the ideal solution to use in the long term since Gridsome has a built-in way for this to work already, but until the issue with the \`gridsome-source-sanity\` plugin is resolved this will get you similar results. I will be sure to update this post at a later date when it is resolved of the proper solution to use since, in the end, this is still technically a workaround. Feel free to modify this solution as well as there may be other workarounds or solutions and get the same results.

Happy Coding!