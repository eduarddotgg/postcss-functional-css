
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./text-transform-rules');

module.exports = (node, config, prefix) => {
  if (config.features.textTransform) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.textTransform.className === '') {
      className = '';
    } else if (config.features.textTransform.className) {
      className = config.features.textTransform.className + '-';
    } else {
      className = 'text-transform-'
    }

    values.forEach(item => {
      let selector;

      if (config.cssModules) {
        selector = camelCase(`${classNamePrefix}-${item.selector}`);
      } else {
        selector = `${classNamePrefix}${className}-${item.selector}`;
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
