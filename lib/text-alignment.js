
module.exports = (node, mediaQuery) => {
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}text-align-center { text-align: center; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}text-align-justify { text-align: justify; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}text-align-left { text-align: left; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}text-align-right { text-align: right; }`);
};
