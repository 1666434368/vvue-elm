import request from '@/utils/request'

export function shopList () {
  return request({
    url: 'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=30.592935&longitude=114.305215&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5',
    method: 'get'
  })
}
export function shopList1 () {
  return request({
    url: 'api/v2/book/1220562',
    method: 'get'
  })
}
