function getRpx(px) {
  const winWidth = wx.getSystemInfoSync().windowWidth;
  return (750 / winWidth) * px;
}

function getPx(rpx) {
  const winWidth = wx.getSystemInfoSync().windowWidth;
  return (winWidth / 750) * rpx;
}

function getSafeArea() {
  return wx.getSystemInfoSync().safeArea;
}

module.exports = {
  getRpx,
  getPx,
  getSafeArea,
};
