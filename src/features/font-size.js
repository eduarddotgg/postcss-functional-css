
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.fontSize) {
    const rules = [];
    const values = config.features.fontSize.values;
    const classNamePrefix = prefix || '';
    const className = config.features.fontSize.className || 'font-size';
    const unit = config.features.fontSize.unit || 'px';

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
            prop: 'font-size',
            value: `${item}${unit}`
          }
        ]
      };

      rules.push(rule);
    });

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
