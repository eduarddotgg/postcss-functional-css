
module.exports = (node, mediaQuery) => {
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}absolute { position: absolute; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}fixed { position: fixed; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}relative { position: relative; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}static { position: static; }`);
  node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}sticky { position: sticky; }`);
};
