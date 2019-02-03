
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.fontWeight) {
    const rules = [];
    const values = config.features.fontWeight.values;
    const classNamePrefix = prefix || '';
    const className = config.features.fontWeight.className || 'font-weight';

    values.forEach(item => {
      let selector;

      if (config.cssModules) {
        selector = camelCase(`${classNamePrefix}${className}-${item}`);
      } else {
        selector = `${classNamePrefix}${className}-${item}`;
      }

      const rule = {
        selector: `.${selector}`,
        decls: [
          {
            prop: 'font-weight',
            value: `${item}`
          }
        ]
      };

      rules.push(rule);
    });

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
