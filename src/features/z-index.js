
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.zIndex) {
    const rules = [];
    const classNamePrefix = prefix || '';
    const className = config.features.zIndex.className || 'z-index';
    let inc = 0;

    while (inc <= config.features.zIndex.limit) {
      const rule = {
        selector: `.${classNamePrefix}${className}-${inc}`,
        decls: [
          {
            prop: 'z-index',
            value: `${inc}`
          }
        ]
      };
      rules.push(rule);
      inc += config.features.zIndex.increment;
    }

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
