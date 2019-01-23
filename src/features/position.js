
const generateNodes = require('../utils/generate-nodes');
const rules = require('./position-rules');

module.exports = (node, config) => {
  if (config.features.position) {
    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
