
module.exports = (node, mediaQuery, margin) => {
  if (margin.top && margin.top.length) {
    margin.top.forEach(top => {
      if (typeof top === 'number') {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}margin-top-${top} { margin-top: ${top}px; }`);
      }
    });
  }
  if (margin.right && margin.right.length) {
    margin.right.forEach(right => {
      if (typeof right === 'number') {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}margin-right-${right} { margin-right: ${right}px; }`);
      }
    });
  }
  if (margin.bottom && margin.bottom.length) {
    margin.bottom.forEach(bottom => {
      if (typeof bottom === 'number') {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}margin-bottom-${bottom} { margin-bottom: ${bottom}px; }`);
      }
    });
  }
  if (margin.left && margin.left.length) {
    margin.left.forEach(left => {
      if (typeof left === 'number') {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}margin-left-${left} { margin-left: ${left}px; }`);
      }
    });
  }
};
