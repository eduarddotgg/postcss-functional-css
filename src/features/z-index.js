
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.zIndex) {
    const rules = [];
    const classNamePrefix = prefix || '';
    const className = config.features.zIndex.className || 'z-index';
    let inc = 0;

    while (inc <= config.features.zIndex.limit) {
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
