
module.exports = (node, mediaQuery) => {
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}visible { visibility: visible; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}invisible { visibility: hidden; }`);
};
