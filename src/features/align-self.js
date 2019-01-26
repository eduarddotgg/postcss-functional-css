
const generateNodes = require('../utils/generate-nodes');
const values = require('./align-self-rules');

module.exports = (node, config, prefix) => {
  if (config.features.alignSelf) {
    const rules = [];
    const classNamePrefix = prefix || '';

    values.forEach(item => {
      const rule = {
        selector: `.${classNamePrefix}${item.selector}`,
        decls: item.decls
      };

      rules.push(rule);
    });

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
