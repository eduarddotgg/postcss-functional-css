
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./align-content-rules');

module.exports = (node, config, prefix) => {
  if (config.features.alignContent) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.alignContent.className === '') {
      className = '';
    } else if (config.features.alignContent.className) {
      className = config.features.alignContent.className + '-';
    } else {
      className = 'content-'
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
