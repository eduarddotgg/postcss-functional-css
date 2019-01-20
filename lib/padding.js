
module.exports = (node, mediaQuery, padding) => {
  if (padding.top && padding.top.length) {
    padding.top.forEach(top => {
      if (typeof top === 'number') {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}padding-top-${top} { padding-top: ${top}px; }`);
      }
    });
  }
  if (padding.right && padding.right.length) {
    padding.right.forEach(right => {
      if (typeof right === 'number') {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}padding-right-${right} { padding-right: ${right}px; }`);
      }
    });
  }
  if (padding.bottom && padding.bottom.length) {
    padding.bottom.forEach(bottom => {
      if (typeof bottom === 'number') {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}padding-bottom-${bottom} { padding-bottom: ${bottom}px; }`);
      }
    });
  }
  if (padding.left && padding.left.length) {
    padding.left.forEach(left => {
      if (typeof left === 'number') {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}padding-left-${left} { padding-left: ${left}px; }`);
      }
    });
  }
};
