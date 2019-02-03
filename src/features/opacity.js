
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.opacity) {
    const rules = [];
    const classNamePrefix = prefix || '';
    const className = config.features.opacity.className || 'opacity';

    let inc = 0;

    while (inc <= 100) {
      let selector;

      if (config.cssModules) {
        selector = camelCase(`${classNamePrefix}${className}-${inc}`);
      } else {
        selector = `${classNamePrefix}${className}-${inc}`;
      }

      const rule = {
        selector: `.${selector}`,
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
