import request from '@/utils/request'

export function shopList1 () {
  return request({
    url: '/restapi/bgs/poi/reverse_geo_coding?latitude=30.592935&longitude=114.305215',
    method: 'get'
  })
}
