exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulToy {
        edges {
          node {
            id
            name
            description {
              raw
            }
            image {
              file {
                url
              }
            }
            price
            rating
          }
        }
      }
    }
  `);

  data.allContentfulToy.edges.forEach((node) => {
    actions.createPage({
      path: `toy-details/${node.node.id}`,
      component: require.resolve(`./src/templates/toy-details.tsx`),
      context: { data: node.node },
    });
  });
};
