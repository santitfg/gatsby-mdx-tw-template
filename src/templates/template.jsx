import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";



const MyH1 = (props) => <h1 style={{ color: `tomato` }} {...props} />;
const MyParagraph = (props) => (
  <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
);

export default function BlogPostTemplate({
  data: { mdx } 
}) {
  // const { mdx } = data; // data.mdx holds your post data
  const { frontmatter,body } = mdx;


  const components = {
    h1: MyH1,
    p: MyParagraph,
  };

  return (
    <Layout titulo={frontmatter.title}>
      <main className=" w-9/12 md:container mx-auto text-justify ">
        {/* <h2>{frontmatter.date}</h2> */}
        <>
          <h1>{frontmatter.title}</h1>
          <MDXProvider components={components}>
            {/* <MDXRenderer> */}
            {body}

            {/* </MDXRenderer> */}
          </MDXProvider>
          

        </>

        {/* <div          className=" unreset"         dangerouslySetInnerHTML={{ __html: html }}        /> */}
      </main>
    </Layout>
  );
}
export const Head = ({ data, pageContext }) => {
  return (
    <>
      <title>{data.mdx.frontmatter.title}</title>

      <meta property="og:title" content={data.mdx.frontmatter.title} />
      <meta
        property="og:image"
        content={
          "https://santitfg.github.io" +
          data.mdx.frontmatter.image.childImageSharp.gatsbyImageData.images
            .fallback.src
        }
      />
      <meta
        property="og:url"
        content={"https://santitfg.github.io" + data.mdx.fields.slug}
      />
      <meta property="og:type" content="post" />
      <meta
        name="og:description"
        content={
          "post de santi fecha de contenido: " + data.mdx.frontmatter.date
        }
      />
    </>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      body

      frontmatter {
        date
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
