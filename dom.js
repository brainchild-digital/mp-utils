function querySelect(cssId, component) {
  return new Promise((resolve) => {
    const query = component.createSelectorQuery();
    if (cssId[0] === '#') query.select(`${cssId}`).boundingClientRect();
    if (cssId[0] === '.') query.selectAll(`${cssId}`).boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec((res) => {
      resolve(res);
    });
  });
}

const getElementHeight = (cssId, component) => new Promise((resolve) => {
  if (!component) {
    resolve('missing component');
  } else {
    querySelect(cssId, component).then((res) => {
      if (Array.isArray(res[0])) {
        resolve(Math.max(...res[0].map((x) => x.height)));
      } else if (res[0] && res[0].height) {
        resolve(res[0].height);
      } else {
        resolve('not found');
      }
    });
  }
});

module.exports = {
  querySelect, getElementHeight,
};
