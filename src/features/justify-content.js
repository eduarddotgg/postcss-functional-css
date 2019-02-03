
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./justify-content-rules');

module.exports = (node, config, prefix) => {
  if (config.features.justifyContent) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.justifyContent.className === '') {
      className = '';
    } else if (config.features.justifyContent.className) {
      className = config.features.justifyContent.className + '-';
    } else {
      className = 'justify-'
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
