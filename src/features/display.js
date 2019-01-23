
const generateNodes = require('../utils/generate-nodes');
const rules = require('./display-rules');

module.exports = (node, config) => {
  if (config.features.display) {
    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
