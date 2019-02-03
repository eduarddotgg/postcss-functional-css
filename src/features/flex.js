
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./flex-rules');

module.exports = (node, config, prefix) => {
  if (config.features.flex) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.flex.className === '') {
      className = '';
    } else if (config.features.flex.className) {
      className = config.features.flex.className + '-';
    } else {
      className = 'flex-'
    }

    values.forEach(item => {
      let selector;

      if (config.cssModules) {
        selector = camelCase(`${classNamePrefix}-${item.selector}`);
      } else {
        selector = `${classNamePrefix}${className}${item.selector}`;
      }

      const rule = {
        selector: `.${selector}`,
        decls: item.decls
      };

      rules.push(rule);
    });

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
