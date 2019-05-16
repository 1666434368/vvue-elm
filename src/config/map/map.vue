<template>
  <div style="height: 100%">
    <div id="mapContainer" style="width: 100%;height: 100%"></div>
  </div>
 
</template>
 
<script>
  import AMap from 'AMap'
  import {getInitData} from "../../api/map"
  import {MessageError} from "../../utils/util"
 
  export default {
    name: "Map",
    data() {
      return {
        map: null,
        marker: '',
        snMarker: new Map()
      }
    },
    methods: {
      /**
       *  这个方法包含2个字方法
       *  1、加载地图
       *  2、加载数据
       */
      init() {
        this.initMap()
        this.initMarkerData()
      },
      initMap() {
        this.map = new AMap.Map('mapContainer', {
          zoom: 8,
          // dragEnable: false
        })
        // 工具栏
        AMap.plugin('AMap.ToolBar', () => {
          let toolbar = new AMap.ToolBar()
          this.map.addControl(toolbar)
        })
        //设置默认范围
        const bounds = new AMap.Bounds([70.530899, 23.234521], [138.537735, 55.384418])
        this.map.setBounds(bounds)
      },
    
      /* 这是普通的标记点*/
      async initMarkerData() {
        let marks = await getInitData() || []
        marks.result.map(mark => {
          let iconPath = mark.online ? '/static/success.png' : '/static/fail.png'
          let marker = new AMap.Marker({
            map: this.map,
            position: [mark.longitude, mark.latitude],
            icon: new AMap.Icon({
              size: new AMap.Size(55, 55),
              image: iconPath,
              imageOffset: new AMap.Pixel(0, 0)
            })
          })
          let info = []
          info.push(`<div style="padding-left: 4px">设备号:<b>${mark.deviceSn}</b></div>`)
          info.push(`<div>速度: <b>${mark.speed}</b></div>`)
          info.push(`<div>经度: <b>${mark.longitude}</b></div>`)
          info.push(`<div>纬度: <b>${mark.latitude}</b></div>`)
          info.push(`<div>方向: <b>${mark.direction}</b></div>`)
          marker.on('click', (e) => {
            let infoWindow = new AMap.InfoWindow({
              content: info.join('<br/>'),
            })
            infoWindow.open(this.map, e.target.getPosition())
          })
          this.snMarker.set(mark.deviceSn, marker)
        })
 
      },
      /* 这里是根据某个点查询的方法*/
      search() {
        let deviceSearch = new AMap.PlaceSearch({
          map: this.map
        })
        AMap.event.addListener(null, "select", (e) => {
          // deviceSearch.set
        })
      }
    },
    mounted() {
      this.init()
    },
    destroyed() {
      this.map.destroy()
    }
  }
</script>
 
<style scoped lang='less'>
  /*@import 'index';*/
</style>
