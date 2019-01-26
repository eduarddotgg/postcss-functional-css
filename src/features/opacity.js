
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.opacity) {
    const rules = [];
    const classNamePrefix = prefix || '';
    const className = config.features.opacity.className || 'opacity';

    let inc = 0;

    while (inc <= 100) {
      const rule = {
        selector: `.${classNamePrefix}${className}-${inc}`,
        decls: [
          {
            prop: 'opacity',
            value: `${inc / 100}`
          }
        ]
      };
      rules.push(rule);
      inc += config.features.opacity.increment;
    }

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
