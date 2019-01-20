
module.exports = (node, mediaQuery) => {
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}object-contain { object-fit: contain; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}object-cover { object-fit: cover; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}object-fill { object-fit: fill; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}object-none { object-fit: none; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}object-scale-down { object-fit: scale-down; }`);
};
