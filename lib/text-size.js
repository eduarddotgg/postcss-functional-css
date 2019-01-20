
const postcss = require('postcss');

module.exports = (values, media, global) => {
  const rules = [];
  const newRules = [];

  values.forEach(item => {
    const rule = {
      selector: `text-size-${item.fontSize}-${item.lineHeight}`,
      decls: [
        {
          prop: 'font-size',
          value: `${item.fontSize}px`
        },
        {
          prop: 'line-height',
          value: `${item.lineHeight}px`
        }
      ]
    };

    rules.push(rule);
  });

  rules.forEach(rule => {
    let selector = '';
    if (!global) {
      selector = `.${media.prefix}${media.prefixSeparator}${rule.selector}`;
    } else {
      selector = `.${rule.selector}`;
    }

    const newRule = postcss.rule({
      selector: selector
    });

    rule.decls.forEach(decl => {
      newRule.append(postcss.decl({
        prop: decl.prop,
        value: decl.value
      }))
    });

    newRules.push(newRule);
  });

  return newRules;
};
