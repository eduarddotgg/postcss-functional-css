
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./text-alignment-rules');

module.exports = (node, config, prefix) => {
  if (config.features.textAlignment) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.textAlignment.className === '') {
      className = '';
    } else if (config.features.textAlignment.className) {
      className = config.features.textAlignment.className + '-';
    } else {
      className = 'text-align-'
    }

    values.forEach(item => {
      let selector;

      if (config.cssModules) {
        selector = camelCase(`${classNamePrefix}${item.selector}`);
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
