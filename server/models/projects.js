const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  github: {
    type: String,
    required: true,
    unique: true,
    match: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  },
  deployed: {
    type: String,
    required: true,
    unique: true,
    match: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  },
});

const Project = model('Project', projectSchema);

module.exports = Project;
