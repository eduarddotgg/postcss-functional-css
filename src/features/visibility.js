
const generateNodes = require('../utils/generate-nodes');
const rules = require('./visibility-rules');

module.exports = (node, config) => {
  if (config.features.visibility) {
    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
