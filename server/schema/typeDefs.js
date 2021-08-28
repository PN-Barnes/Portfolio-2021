const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID
    projectName: String
    github: String
    deployed: String
  }
`;

module.exports = typeDefs;
