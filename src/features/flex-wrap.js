
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./flex-wrap-rules');

module.exports = (node, config, prefix) => {
  if (config.features.flexWrap) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.flexWrap.className === '') {
      className = '';
    } else if (config.features.flexWrap.className) {
      className = config.features.flexWrap.className + '-';
    } else {
      className = 'flex-wrap-'
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
