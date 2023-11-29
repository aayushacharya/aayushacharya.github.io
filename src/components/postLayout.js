import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import { BlogTags, BlogTitle, BlogTitleInfo, ExtLink, TagIcon, Callout } from "./atoms"
import Contact from "./contact"
import TOC from "./toc"
import Img from "gatsby-image"
const shortcodes = {
  ExtLink,
  Link,
  Callout,
  Img  
}

const PostLayout = ({ data: { mdx, ogImage } }) => {
  return (
    <Layout activePage="blog">
      <SEO
        blog
        title={mdx.frontmatter.title}
        description={mdx.excerpt}
        ogImage={ogImage && ogImage.childImageSharp.fixed.src}
      />
      <div className="flex justify-between mt-10 mb-10 relative">
        <article className="prose sm:prose md:prose-lg min-w-0 max-w-none tracking-normal">
          <div className="">
            <BlogTitleInfo
              date={mdx.frontmatter.date}
              datetime={mdx.frontmatter.datetime}
              timeToRead={mdx.timeToRead}
              updated={mdx.frontmatter.updated}
              updated_datetime={mdx.frontmatter.updated_datetime}
            />
            <BlogTitle>{mdx.frontmatter.title}</BlogTitle>

            <BlogTags tags={mdx.frontmatter.tags}>
              <TagIcon />
            </BlogTags>
          </div>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
        {mdx.tableOfContents && mdx.frontmatter.toc === true && (
          <aside className="sticky hidden lg:block max-w-xs ml-6 mt-8 h-screen">
            <TOC items={mdx.tableOfContents.items} />
          </aside>
        )}
      </div>
      <Contact />
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPostQuery($id: String, $ogImageSlug: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
        datetime: date
        updated(formatString: "MMMM Do YYYY")
        tags
        updated_datetime: updated
        description
        toc
      }
      excerpt(pruneLength: 140)
      tableOfContents
      timeToRead
    }
    ogImage: file(relativePath: { eq: $ogImageSlug }) {
      childImageSharp {
        fixed(width: 1280) {
          src
        }
      }
    }
  }
`

export default PostLayout
