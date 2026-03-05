const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const readingTime = require("reading-time");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`,
    });

    createNodeField({
      name: "timeToRead",
      node,
      value: readingTime(node.body),
    });
  }
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              seoImage
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('😱😱😱 ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    console.log(
      `🍕 Dynamically creating page for ${node.fields.slug} with og-image ${node.frontmatter.seoImage}`
    )

    const postTemplate = path.resolve(`./src/components/postLayout.js`)

    createPage({
      path: node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id, ogImageSlug: node.frontmatter.seoImage },
    })
  })
}
