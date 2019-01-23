
const generateNodes = require('../utils/generate-nodes');
const rules = require('./text-alignment-rules');

module.exports = (node, config) => {
  if (config.features.textAlignment) {
    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
