
module.exports = (node, mediaQuery) => {
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}block { display: block; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}flex { display: flex; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}grid { display: grid; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}hidden { display: none; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}inline { display: inline; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}inline-block { display: inline-block; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}table { display: table; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}table-cell { display: table-cell; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}table-row { display: table-row; }`);
};
