
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, direction, prefix) => {
  if (config.features.padding[direction]) {
    const rules = [];
    const values = config.features.padding[direction].values;
    const classNamePrefix = prefix || '';
    let className;
    const unit = config.features.padding[direction].unit;

    if (config.cssModules) {
      className = direction
    } else {
      className = config.features.margin[direction].className || `padding-${direction}`;
    }

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
            prop: `padding-${direction}`,
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
