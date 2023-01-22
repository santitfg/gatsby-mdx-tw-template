import React from "react";

// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
// export const Head = () => <title>{title}</title>;

const TagsPage = ({
  data: {
    allMdx: { group },
    // site: {
    //   siteMetadata: { title },
    // },
  },
}) => (
  <Layout >
      <main className="md:max-w-[75%] mx-auto text-justify">
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
  </main>
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
