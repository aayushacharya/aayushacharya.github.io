import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "./layout"
import Seo from "./seo"
import { BlogTags, BlogTitle, BlogTitleInfo, ExtLink, TagIcon, Callout } from "./atoms"
import Contact from "./contact"
import Toc from "./toc"
// import Img from "gatsby-image"
import { getSrc, GatsbyImage } from "gatsby-plugin-image"
const shortcodes = {
  ExtLink,
  Link,
  Callout,
  GatsbyImage,
}


const PostLayout = ({ data: { mdx, ogImage }, children }) => {
  return (
    <Layout activePage="blog">
      <Seo
        blog
        title={mdx.frontmatter.title}
        description={mdx.excerpt}
        ogImage={ogImage && getSrc(ogImage.childImageSharp.gatsbyImageData)}
      />
      <div className="flex justify-between mt-10 mb-10 relative">
        <article className="prose sm:prose md:prose-lg min-w-0 max-w-none tracking-normal">
          <div className="">
            <BlogTitleInfo
              date={mdx.frontmatter.date}
              datetime={mdx.frontmatter.datetime}
              timeToRead={mdx.fields?.timeToRead?.text}
              updated={mdx.frontmatter.updated}
              updated_datetime={mdx.frontmatter.updated_datetime}
            />
            <BlogTitle>{mdx.frontmatter.title}</BlogTitle>

            <BlogTags tags={mdx.frontmatter.tags}>
              <TagIcon />
            </BlogTags>
          </div>
          <MDXProvider components={shortcodes}>
            {children}
          </MDXProvider>
        </article>
        {mdx.tableOfContents && mdx.frontmatter.toc === true && (
          <aside className="sticky hidden lg:block max-w-xs ml-6 mt-8 h-screen">
            <Toc items={mdx.tableOfContents.items} />
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
      fields{
        timeToRead{
          text
        }
      }
    }
    ogImage: file(relativePath: { eq: $ogImageSlug }) {
      childImageSharp {
        gatsbyImageData(width: 1280, layout: FIXED)
      }
    }
  }
`

export default PostLayout
