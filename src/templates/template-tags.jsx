import React from "react";
import CardPreview from "../components/cardpreview";

// Components
import {  graphql } from "gatsby";
import Layout from "../components/layout";

const Tags = ({ pageContext, data }) => {
  // const { tag } = pageContext;
  // const { edges } = data.allMarkdownRemark;
  return (
    <Layout >
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data.allmdx.edges.map(({ node }) => (
            <CardPreview data={node} key={node.fields.slug} />
          ))}
        </div>
        </main>
        {/* <Link to="/tags">All tags</Link> */}
    </Layout>
  );
};


export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            layout
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
