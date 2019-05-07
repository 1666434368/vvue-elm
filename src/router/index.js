/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        isFootGuide: true
      }
    },
    {
      // path: '/shop/:id(\\d+)',
      path: '/shop',
      name: 'shop',
      component: () => import('@/page/shop/shop'),
      meta: {}
      // children: [
      //   {
      //     path: '/',
      //     redirect: { name: 'goods' }
      //   },
    //     {
    //       path: 'goods',
    //       name: 'goods',
    //       component: () => import('@/page/goods/goods')
    //     },
    //     {
    //       path: 'ratings',
    //       name: 'ratings',
    //       component: () => import('@/page/ratings/ratings')
    //     },
    //     {
    //       path: 'seller',
    //       name: 'seller',
    //       component: () => import('@/page/seller/seller')
    //     }
    //   ]
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('@/page/find/find'),
      meta: {
        isFootGuide: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/page/order/order'),
      meta: {
        isFootGuide: true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/page/mine/mine'),
      meta: {
        isFootGuide: true
      }
    }
  ]
})
