
const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem");
const kebabCase =require( "lodash/kebabCase");


exports.onCreateNode = ({ node, getNode, actions }) => {
  //funcion que por cada nodo creado si es markdown le asigna un campo de slug (la url)
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: "content" });
    createNodeField({ node, value: `/blog${slug}`, name: "slug" });
  }
};


exports.createPages = ({ graphql, actions }) => {
  //funcion que crea paginas a partir de una consulta graphql sobre los markdown y y les asigna un template (layout)
  const tagTemplate = path.resolve("src/templates/template-tags.jsx")

  const { createPage } = actions;
  return graphql(`
    query {
      postsRemark: allMdx (
        sort: { frontmatter: { date: DESC }}
        limit: 2000
      ) {        
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              layout
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }


  //     if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }

    const posts = result.data.postsRemark.edges;
    // Create post detail pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          // `./src/templates/template.jsx`
          `./src/templates/${node.frontmatter.layout || "template"}.jsx`
        ),
        context: {
          slug: node.fields.slug,
        },
      });
    });

    // Extract tag data from query
    const tags = result.data.tagsGroup.group;

    // Make tag pages
    tags.forEach((tag) => {
      createPage({
        path: `/tags/${kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  });


};
