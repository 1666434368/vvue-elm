// import Vue from 'vue'
// import AMap from 'AMap'
// Vue.use(AMap)

let getLocation = (onComplete = function () {}, onError = function () {}) => {
  let map = new AMap.Map('aMap', {
    resizeEnable: true,
    zoom: 16
  })
  let geolocation = null
  // eslint-disable-next-line no-unused-vars
  let geocoder = null

  // 加载地理位置编码插件
  AMap.service('AMap.Geocoder', function () { // 回调函数
    // 实例化Geocoder
    geocoder = new AMap.Geocoder({
      city: '010' // 城市，默认：“全国”
    })
    // TODO: 使用geocoder 对象完成相关功能
  })
  // 加载定位插件
  map.plugin('AMap.Geolocation', function () {
    // 初始化定位插件
    geolocation = new AMap.Geolocation({
      enableHighAccuracy: true, // 是否使用高精度定位，默认:true
      timeout: 10000, // 超过10秒后停止定位，默认：无穷大
      maximumAge: 0, // 定位结果缓存0毫秒，默认：0
      convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
      showButton: true, // 显示定位按钮，默认：true
      buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
      buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      showMarker: false, // 定位成功后在定位到的位置显示点标记，默认：true
      showCircle: false, // 定位成功后用圆圈表示定位精度范围，默认：true
      panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
      zoomToAccuracy: true // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    })
    // 把定位插件加入地图实例
    map.addControl(geolocation)

    // 添加地图全局定位事件
    AMap.event.addListener(geolocation, 'complete', onComplete) // 返回定位信息
    AMap.event.addListener(geolocation, 'error', onError) // 返回定位出错信息
    // 调用定位
    geolocation.getCurrentPosition()
  })
}

export default getLocation
