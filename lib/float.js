
module.exports = (node, mediaQuery) => {
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}float-left { float: left; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}float-none { float: none; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}float-right { float: right; }`);
};
