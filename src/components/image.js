import React from "react"
import { graphql } from "gatsby"
import { getSrc, GatsbyImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ path }) => {
  const data = graphql`{
    file(relativePath: { eq: "images/example.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1280,layout: FIXED)
      }
    }
  }
`

  return (
    <GatsbyImage image={getSrc(data.file.childImageSharp.gatsbyImageData)} alt="Avatar" />
  )
}

export default Image
