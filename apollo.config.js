module.exports = {
  client: {
    service: {
      name: "rick-and-morty",
      localSchemaFile: "src/generated/graphql.schema.json",
    },
    excludes: ["**/generated/**", "src/apollo/typeDefs.ts"],
  },
};

// Or alternatively:
// module.exports = {
//   client: {
//     service: {
//       name: "rick-and-morty",
//       url: "https://rickandmortyapi.com/graphql"
//     },
//     excludes: ["**/generated/**"]
//   }
// };
