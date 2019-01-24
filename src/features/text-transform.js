
const generateNodes = require('../utils/generate-nodes');
const rules = require('./text-transform-rules');

module.exports = (node, config) => {
  if (config.features.textTransform) {
    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
