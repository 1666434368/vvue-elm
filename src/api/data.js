
export function shopList () {
  this.$jsonp('https://api.douban.com/v2/book/1220562', {}).then(json => {
    console.log(json)
    // 返回数据 json， 返回的数据就是json格式
  }).catch(err => {
    console.log(err)
  })
}
