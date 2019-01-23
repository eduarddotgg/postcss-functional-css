
const generateNodes = require('../utils/generate-nodes');
const rules = require('./float-rules');

module.exports = (node, config) => {
  if (config.features.float) {
    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
