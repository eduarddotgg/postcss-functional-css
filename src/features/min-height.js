
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.minHeight && config.features.minHeight.values) {
    const rules = [];
    const values = config.features.minHeight.values;
    const classNamePrefix = prefix || '';
    const className = config.features.minHeight.className || 'min-height';
    const unit = config.features.minHeight.unit;

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
            prop: `min-height`,
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
