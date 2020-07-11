/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `PedicuresJson`) {
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allProductsJson {
          edges {
            node {
              id
              type
              products {
                code
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allProductsJson.edges.forEach(({ node }) => {
        const indexLink = path.join(`products`, node.type)
        // console.log("PRODUCT TYPE!!!!!", indexLink, node)
        // create product page
        createPage({
          path: indexLink,
          component: `${__dirname}/src/templates/productList.jsx`,
          context: {
            id: node.id,
          },
        })

        node.products.forEach(product => {
          const productLink = path.join(indexLink, product.code)
          // console.log(`PRODUCT`, productLink)
          createPage({
            path: productLink,
            component: path.resolve(`src/templates/product.jsx`),
            context: {
              id: node.id,
              code: product.code,
            },
          })
        })
      })
      resolve()
    })
  })
}
