const { Project } = require('../models');

const resolvers = {
  Query: {
    projects: async () => {
      return Project.find();
    },
    project: async (parent, { projectName }) => {
      return Project.findOne({ projectName });
    },
  },
};

module.exports = resolvers;
