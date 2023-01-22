import * as React from "react";
import Layout from "../components/layout";
import CardPreview from "../components/cardpreview";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main className="max-w-[100%] md:max-w-[75%]  mx-auto text-justify">
   
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-1 md:gap-4 ">
          {data.allMdx.edges.map(({ node }) => (
            <CardPreview data={node} key={node.fields.slug} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => {
  return  <>
    <title>Santiago Fernandez</title>

    <meta
      name="description"
      content="Portfolio de Santiago Fernandez, orientado principalmente a la difusion de trabajos artisticos de ilustracion y programacion creativa"
    />

    <meta property="og:title" content="Santiago Fernandez" />
    <meta property="og:url" content="https://santitfg.github.io/" />
    <meta property="og:type" content="website" />
    <meta
      name="og:description"
      content="Portfolio de Santiago Fernandez, orientado principalmente a la difusion de trabajos artisticos de ilustracion y programacion creativa"
    />
  </>;
};
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      totalCount
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

          excerpt
        }
      }
    }
  }
`;
