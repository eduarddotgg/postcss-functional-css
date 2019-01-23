
const generateNodes = require('../utils/generate-nodes');
const rules = require('./object-fit-rules');

module.exports = (node, config) => {
  if (config.features.objectFit) {
    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
