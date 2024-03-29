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

const getElementHeight = (cssId, component) => new Promise((resolve, reject) => {
  if (!component) {
    reject(new Error('missing component'));
  } else {
    querySelect(cssId, component).then((res) => {
      if (Array.isArray(res[0])) {
        resolve(Math.max(...res[0].map((x) => x.height)));
      } else if (res[0] && res[0].height) {
        resolve(res[0].height);
      } else {
        reject(new Error('element not found'));
      }
    });
  }
});

const getElementWidth = (cssId, component) => new Promise((resolve, reject) => {
  if (!component) {
    reject(new Error('missing component'));
  } else {
    querySelect(cssId, component).then((res) => {
      if (Array.isArray(res[0]) && res[0].length) {
        resolve(Math.max(...res[0].map((x) => x.width)));
      } else if (res[0] && res[0].width) {
        resolve(res[0].width);
      } else {
        reject(new Error('element not found'));
      }
    });
  }
});

const getNavHeight = () => {
  const navbar = getCurrentPages().pop().selectComponent('#navbar');
  return getElementHeight('#navbar', navbar);
};

const getTabHeight = () => {
  const tabbar = getCurrentPages().pop().selectComponent('#tabbar');
  return getElementHeight('#tabbar', tabbar);
};

module.exports = {
  querySelect, getElementHeight, getElementWidth, getNavHeight, getTabHeight,
};
