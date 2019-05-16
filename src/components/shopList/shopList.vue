<template>
  <div class='shoplist'>
    <div id='shoplist-title' class='shoplist-title'>推荐商家</div>
    <div class='home-filter'>
      <aside class='filter'>
        <div class='filter-header'>
          <a href='javascript:' class='filter-nav active'>
            <span>综合排序</span>
          </a>
          <a href='javascript:' class='filter-nav'>
            <span>综合排序</span>
          </a>
          <a href='javascript:' class='filter-nav'>
            <span>综合排序</span>
          </a>
          <a href='javascript:' class='filter-nav'>
            <span>综合排序</span>
          </a>
        </div>
      </aside>
    </div>
    <div class='shoplist-content'>
      <section class='shop-item' v-for='(item, index) in data.items' :key='index' @click="shop(1)">
        <div class='item-top'>
          <div class='logo-container'>
            <div class='logo-main'>
              <img :alt='item.restaurant.name' class='logo-logo' :src='imgUrl(item.restaurant.image_path)'>
              <!----> <!---->
            </div>
            <!---->
          </div>
          <div class='index-main'>
            <section class='index-line'>
              <h3 class='index-shopname'>
                <i content='品牌' class='index-premium' v-if='item.restaurant.is_premium'>品牌</i>
                <span>{{item.restaurant.name}}</span>
              </h3>
              <div class='index-supportWrap'>
                <!---->
                <span class='index-omit'>···</span>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-rateWrap'>
                <div class='Rating-wrapper index-stars'>
                  <div class='Rating-gray'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                  <div class='Rating-actived' :style="{ width: item.restaurant.rating * 20 + '%' }">
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                </div>
                <span class='index-rate'>{{item.restaurant.rating}}</span>
                <span>月售{{item.restaurant.recent_order_num}}单</span>
              </div>
              <div class='delivery-delivery' v-if='item.restaurant.delivery_mode'>
                <!---->
                <div :content='item.restaurant.delivery_mode.text' :alt='item.restaurant.delivery_mode.text' class='delivery-icon-hollow'>{{item.restaurant.delivery_mode.text}}</div>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-moneylimit'>
                <span>¥{{item.restaurant.float_minimum_order_amount}}起送</span>
                <span>配送费¥{{item.restaurant.float_delivery_fee}}</span>
                <!---->
              </div>
              <div class='index-timedistanceWrap'>
                <span class='index-distanceWrap' v-if='item.restaurant.distance > 1000'>{{(item.restaurant.distance / 1000).toFixed(2)}}km</span>
                <span class='index-distanceWrap' v-if='item.restaurant.distance < 1000'>{{item.restaurant.distance}}m</span>
                <span>{{item.restaurant.order_lead_time}}分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class='item-bottom'>
          <!---->
          <section class='index-tagLine'>
            <span class='index-tagGhost' v-for='(item1, index1) in item.restaurant.support_tags' :key='index1' :style="{ color: '#' + item1.color, borderColor: '#' + item1.border }">{{item1.text}}</span>
            <span class='index-recommendTag' v-if='item.restaurant.recommend.reason'>
              <img src='https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'>
              <span>{{item.restaurant.recommend.reason}}</span>
            </span>
          </section>
          <span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=' class='index-dashedline_7B79b3W'>
          </span>
          <section class='index-activities'>
            <div class='index-activityList'>
              <div class='index-actRow' v-for='(item2, index2) in item.restaurant.activities' :key='index2' v-show='index2 < 2'>
                <span class='index-iconWrap'>
                  <span class='index-icon' :style="{ backgroundColor: '#' + item2.icon_color }">{{item2.icon_name}}</span>
                </span>
                <span class='index-desc'>{{item2.description}}</span>
              </div>
              <div class='index-actRow' v-for='(item3, index3) in item.restaurant.supports' :key='item.restaurant.activities.length + index3' v-show='item.restaurant.activities.length + index3 < 2'>
                <span class='index-iconWrap'>
                  <span class='index-icon' :style="{backgroundColor: '#' + item3.icon_color}">{{item3.icon_name}}</span>
                </span>
                <span class='index-desc'>{{item3.description}}</span>
              </div>
            </div>
            <div class='index-activityBtn' @click.stop='indexActivityBtn(index)'>
              <span>{{item.restaurant.supports.length + item.restaurant.activities.length}}个活动</span>
              <img class='' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
            </div>
          </section>
        </div>
      </section>
      <section class='shop-item'>
        <div class='item-top'>
          <div class='logo-container'>
            <div class='logo-main'>
              <img alt='书亦烧仙草(武汉第十六中学店)' class='logo-logo' src='https://fuss10.elemecdn.com/4/9f/d8dc035c87d39edaa473ade27d964jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'>
              <!----> <!---->
            </div>
            <!---->
          </div>
          <div class='index-main'>
            <section class='index-line'>
              <h3 class='index-shopname'>
                <i content='品牌' class='index-premium'>品牌</i>
                <span>书亦烧仙草(武汉第十六中学店)</span>
              </h3>
              <div class='index-supportWrap'>
                <!---->
                <span class='index-omit'>···</span>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-rateWrap'>
                <div class='Rating-wrapper index-stars'>
                  <div class='Rating-gray'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                  <div class='Rating-actived' style='width: 98%;'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                </div>
                <span class='index-rate'>4.9</span>
                <span>月售272单</span>
              </div>
              <div class='delivery-delivery'>
                <!---->
                <div content='蜂鸟专送' alt='蜂鸟专送' class='delivery-icon-hollow'>蜂鸟专送</div>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-moneylimit'>
                <span>¥20起送</span>
                <span>配送费¥1.1</span>
                <!---->
              </div>
              <div class='index-timedistanceWrap'>
                <span class='index-distanceWrap'>470m</span>
                <span>21分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class='item-bottom'>
          <!---->
          <section class='index-tagLine'>
            <span class='index-tagGhost'>奶茶果汁</span>
            <span class='index-recommendTag'>
              <img src='https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'>
              <span>口碑人气好店</span>
            </span>
          </section>
          <span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=' class='index-dashedline_7B79b3W'>
          </span>
          <section class='index-activities'>
            <div class='index-activityList'>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(240, 115, 115);'>减</span>
                </span>
                <span class='index-desc'>满25减2，满34减6，满49减10</span>
              </div>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(112, 188, 70);'>首</span>
                </span>
                <span class='index-desc'>新用户下单立减17元</span>
              </div>
            </div>
            <div class='index-activityBtn'>
              <span>8个活动</span>
              <img class='index-open' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
            </div>
          </section>
        </div>
      </section>
      <section class='shop-item'>
        <div class='item-top'>
          <div class='logo-container'>
            <div class='logo-main'>
              <img alt='书亦烧仙草(武汉第十六中学店)' class='logo-logo' src='https://fuss10.elemecdn.com/4/9f/d8dc035c87d39edaa473ade27d964jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'>
              <!----> <!---->
            </div>
            <!---->
          </div>
          <div class='index-main'>
            <section class='index-line'>
              <h3 class='index-shopname'>
                <i content='品牌' class='index-premium'>品牌</i>
                <span>书亦烧仙草(武汉第十六中学店)</span>
              </h3>
              <div class='index-supportWrap'>
                <!---->
                <span class='index-omit'>···</span>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-rateWrap'>
                <div class='Rating-wrapper index-stars'>
                  <div class='Rating-gray'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                  <div class='Rating-actived' style='width: 98%;'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                </div>
                <span class='index-rate'>4.9</span>
                <span>月售272单</span>
              </div>
              <div class='delivery-delivery'>
                <!---->
                <div content='蜂鸟专送' alt='蜂鸟专送' class='delivery-icon-hollow'>蜂鸟专送</div>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-moneylimit'>
                <span>¥20起送</span>
                <span>配送费¥1.1</span>
                <!---->
              </div>
              <div class='index-timedistanceWrap'>
                <span class='index-distanceWrap'>470m</span>
                <span>21分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class='item-bottom'>
          <!---->
          <section class='index-tagLine'>
            <span class='index-tagGhost'>奶茶果汁</span>
            <span class='index-recommendTag'>
              <img src='https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'>
              <span>口碑人气好店</span>
            </span>
          </section>
          <span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=' class='index-dashedline_7B79b3W'>
          </span>
          <section class='index-activities'>
            <div class='index-activityList'>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(240, 115, 115);'>减</span>
                </span>
                <span class='index-desc'>满25减2，满34减6，满49减10</span>
              </div>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(112, 188, 70);'>首</span>
                </span>
                <span class='index-desc'>新用户下单立减17元</span>
              </div>
            </div>
            <div class='index-activityBtn'>
              <span>8个活动</span>
              <img class='index-open' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
            </div>
          </section>
        </div>
      </section>
      <section class='shop-item'>
        <div class='item-top'>
          <div class='logo-container'>
            <div class='logo-main'>
              <img alt='书亦烧仙草(武汉第十六中学店)' class='logo-logo' src='https://fuss10.elemecdn.com/4/9f/d8dc035c87d39edaa473ade27d964jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'>
              <!----> <!---->
            </div>
            <!---->
          </div>
          <div class='index-main'>
            <section class='index-line'>
              <h3 class='index-shopname'>
                <i content='品牌' class='index-premium'>品牌</i>
                <span>书亦烧仙草(武汉第十六中学店)</span>
              </h3>
              <div class='index-supportWrap'>
                <!---->
                <span class='index-omit'>···</span>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-rateWrap'>
                <div class='Rating-wrapper index-stars'>
                  <div class='Rating-gray'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                  <div class='Rating-actived' style='width: 98%;'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                </div>
                <span class='index-rate'>4.9</span>
                <span>月售272单</span>
              </div>
              <div class='delivery-delivery'>
                <!---->
                <div content='蜂鸟专送' alt='蜂鸟专送' class='delivery-icon-hollow'>蜂鸟专送</div>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-moneylimit'>
                <span>¥20起送</span>
                <span>配送费¥1.1</span>
                <!---->
              </div>
              <div class='index-timedistanceWrap'>
                <span class='index-distanceWrap'>470m</span>
                <span>21分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class='item-bottom'>
          <!---->
          <section class='index-tagLine'>
            <span class='index-tagGhost'>奶茶果汁</span>
            <span class='index-recommendTag'>
              <img src='https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'>
              <span>口碑人气好店</span>
            </span>
          </section>
          <span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=' class='index-dashedline_7B79b3W'>
          </span>
          <section class='index-activities'>
            <div class='index-activityList'>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(240, 115, 115);'>减</span>
                </span>
                <span class='index-desc'>满25减2，满34减6，满49减10</span>
              </div>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(112, 188, 70);'>首</span>
                </span>
                <span class='index-desc'>新用户下单立减17元</span>
              </div>
            </div>
            <div class='index-activityBtn'>
              <span>8个活动</span>
              <img class='index-open' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
            </div>
          </section>
        </div>
      </section>
      <section class='shop-item'>
        <div class='item-top'>
          <div class='logo-container'>
            <div class='logo-main'>
              <img alt='书亦烧仙草(武汉第十六中学店)' class='logo-logo' src='https://fuss10.elemecdn.com/4/9f/d8dc035c87d39edaa473ade27d964jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'>
              <!----> <!---->
            </div>
            <!---->
          </div>
          <div class='index-main'>
            <section class='index-line'>
              <h3 class='index-shopname'>
                <i content='品牌' class='index-premium'>品牌</i>
                <span>书亦烧仙草(武汉第十六中学店)</span>
              </h3>
              <div class='index-supportWrap'>
                <!---->
                <span class='index-omit'>···</span>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-rateWrap'>
                <div class='Rating-wrapper index-stars'>
                  <div class='Rating-gray'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                  <div class='Rating-actived' style='width: 98%;'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                </div>
                <span class='index-rate'>4.9</span>
                <span>月售272单</span>
              </div>
              <div class='delivery-delivery'>
                <!---->
                <div content='蜂鸟专送' alt='蜂鸟专送' class='delivery-icon-hollow'>蜂鸟专送</div>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-moneylimit'>
                <span>¥20起送</span>
                <span>配送费¥1.1</span>
                <!---->
              </div>
              <div class='index-timedistanceWrap'>
                <span class='index-distanceWrap'>470m</span>
                <span>21分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class='item-bottom'>
          <!---->
          <section class='index-tagLine'>
            <span class='index-tagGhost'>奶茶果汁</span>
            <span class='index-recommendTag'>
              <img src='https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'>
              <span>口碑人气好店</span>
            </span>
          </section>
          <span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=' class='index-dashedline_7B79b3W'>
          </span>
          <section class='index-activities'>
            <div class='index-activityList'>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(240, 115, 115);'>减</span>
                </span>
                <span class='index-desc'>满25减2，满34减6，满49减10</span>
              </div>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(112, 188, 70);'>首</span>
                </span>
                <span class='index-desc'>新用户下单立减17元</span>
              </div>
            </div>
            <div class='index-activityBtn'>
              <span>8个活动</span>
              <img class='index-open' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
            </div>
          </section>
        </div>
      </section>
      <section class='shop-item'>
        <div class='item-top'>
          <div class='logo-container'>
            <div class='logo-main'>
              <img alt='书亦烧仙草(武汉第十六中学店)' class='logo-logo' src='https://fuss10.elemecdn.com/4/9f/d8dc035c87d39edaa473ade27d964jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'>
              <!----> <!---->
            </div>
            <!---->
          </div>
          <div class='index-main'>
            <section class='index-line'>
              <h3 class='index-shopname'>
                <i content='品牌' class='index-premium'>品牌</i>
                <span>书亦烧仙草(武汉第十六中学店)</span>
              </h3>
              <div class='index-supportWrap'>
                <!---->
                <span class='index-omit'>···</span>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-rateWrap'>
                <div class='Rating-wrapper index-stars'>
                  <div class='Rating-gray'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                  <div class='Rating-actived' style='width: 98%;'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                </div>
                <span class='index-rate'>4.9</span>
                <span>月售272单</span>
              </div>
              <div class='delivery-delivery'>
                <!---->
                <div content='蜂鸟专送' alt='蜂鸟专送' class='delivery-icon-hollow'>蜂鸟专送</div>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-moneylimit'>
                <span>¥20起送</span>
                <span>配送费¥1.1</span>
                <!---->
              </div>
              <div class='index-timedistanceWrap'>
                <span class='index-distanceWrap'>470m</span>
                <span>21分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class='item-bottom'>
          <!---->
          <section class='index-tagLine'>
            <span class='index-tagGhost'>奶茶果汁</span>
            <span class='index-recommendTag'>
              <img src='https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'>
              <span>口碑人气好店</span>
            </span>
          </section>
          <span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=' class='index-dashedline_7B79b3W'>
          </span>
          <section class='index-activities'>
            <div class='index-activityList'>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(240, 115, 115);'>减</span>
                </span>
                <span class='index-desc'>满25减2，满34减6，满49减10</span>
              </div>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(112, 188, 70);'>首</span>
                </span>
                <span class='index-desc'>新用户下单立减17元</span>
              </div>
            </div>
            <div class='index-activityBtn'>
              <span>8个活动</span>
              <img class='index-open' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
            </div>
          </section>
        </div>
      </section>
      <section class='shop-item'>
        <div class='item-top'>
          <div class='logo-container'>
            <div class='logo-main'>
              <img alt='书亦烧仙草(武汉第十六中学店)' class='logo-logo' src='https://fuss10.elemecdn.com/4/9f/d8dc035c87d39edaa473ade27d964jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'>
              <!----> <!---->
            </div>
            <!---->
          </div>
          <div class='index-main'>
            <section class='index-line'>
              <h3 class='index-shopname'>
                <i content='品牌' class='index-premium'>品牌</i>
                <span>书亦烧仙草(武汉第十六中学店)</span>
              </h3>
              <div class='index-supportWrap'>
                <!---->
                <span class='index-omit'>···</span>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-rateWrap'>
                <div class='Rating-wrapper index-stars'>
                  <div class='Rating-gray'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                  <div class='Rating-actived' style='width: 98%;'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                </div>
                <span class='index-rate'>4.9</span>
                <span>月售272单</span>
              </div>
              <div class='delivery-delivery'>
                <!----> 
                <div content='蜂鸟专送' alt='蜂鸟专送' class='delivery-icon-hollow'>蜂鸟专送</div>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-moneylimit'>
                <span>¥20起送</span>
                <span>配送费¥1.1</span>
                <!---->
              </div>
              <div class='index-timedistanceWrap'>
                <span class='index-distanceWrap'>470m</span>
                <span>21分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class='item-bottom'>
          <!---->
          <section class='index-tagLine'>
            <span class='index-tagGhost'>奶茶果汁</span>
            <span class='index-recommendTag'>
              <img src='https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'>
              <span>口碑人气好店</span>
            </span>
          </section>
          <span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=' class='index-dashedline_7B79b3W'>
          </span>
          <section class='index-activities'>
            <div class='index-activityList'>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(240, 115, 115);'>减</span>
                </span>
                <span class='index-desc'>满25减2，满34减6，满49减10</span>
              </div>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(112, 188, 70);'>首</span>
                </span>
                <span class='index-desc'>新用户下单立减17元</span>
              </div>
            </div>
            <div class='index-activityBtn'>
              <span>8个活动</span>
              <img class='index-open' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
            </div>
          </section>
        </div>
      </section>
      <section class='shop-item'>
        <div class='item-top'>
          <div class='logo-container'>
            <div class='logo-main'>
              <img alt='书亦烧仙草(武汉第十六中学店)' class='logo-logo' src='https://fuss10.elemecdn.com/4/9f/d8dc035c87d39edaa473ade27d964jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'>
              <!----> <!---->
            </div>
            <!---->
          </div>
          <div class='index-main'>
            <section class='index-line'>
              <h3 class='index-shopname'>
                <i content='品牌' class='index-premium'>品牌</i>
                <span>书亦烧仙草(武汉第十六中学店)</span>
              </h3>
              <div class='index-supportWrap'>
                <!---->
                <span class='index-omit'>···</span>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-rateWrap'>
                <div class='Rating-wrapper index-stars'>
                  <div class='Rating-gray'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                  <div class='Rating-actived' style='width: 98%;'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                </div>
                <span class='index-rate'>4.9</span>
                <span>月售272单</span>
              </div>
              <div class='delivery-delivery'>
                <!----> 
                <div content='蜂鸟专送' alt='蜂鸟专送' class='delivery-icon-hollow'>蜂鸟专送</div>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-moneylimit'>
                <span>¥20起送</span>
                <span>配送费¥1.1</span>
                <!---->
              </div>
              <div class='index-timedistanceWrap'>
                <span class='index-distanceWrap'>470m</span>
                <span>21分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class='item-bottom'>
          <!---->
          <section class='index-tagLine'>
            <span class='index-tagGhost'>奶茶果汁</span>
            <span class='index-recommendTag'>
              <img src='https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'>
              <span>口碑人气好店</span>
            </span>
          </section>
          <span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=' class='index-dashedline_7B79b3W'>
          </span>
          <section class='index-activities'>
            <div class='index-activityList'>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(240, 115, 115);'>减</span>
                </span>
                <span class='index-desc'>满25减2，满34减6，满49减10</span>
              </div>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(112, 188, 70);'>首</span>
                </span>
                <span class='index-desc'>新用户下单立减17元</span>
              </div>
            </div>
            <div class='index-activityBtn'>
              <span>8个活动</span>
              <img class='index-open' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
            </div>
          </section>
        </div>
      </section>
      <section class='shop-item'>
        <div class='item-top'>
          <div class='logo-container'>
            <div class='logo-main'>
              <img alt='书亦烧仙草(武汉第十六中学店)' class='logo-logo' src='https://fuss10.elemecdn.com/4/9f/d8dc035c87d39edaa473ade27d964jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'>
              <!----> <!---->
            </div>
            <!---->
          </div>
          <div class='index-main'>
            <section class='index-line'>
              <h3 class='index-shopname'>
                <i content='品牌' class='index-premium'>品牌</i>
                <span>书亦烧仙草(武汉第十六中学店)</span>
              </h3>
              <div class='index-supportWrap'>
                <!---->
                <span class='index-omit'>···</span>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-rateWrap'>
                <div class='Rating-wrapper index-stars'>
                  <div class='Rating-gray'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                  <div class='Rating-actived' style='width: 98%;'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                </div>
                <span class='index-rate'>4.9</span>
                <span>月售272单</span>
              </div>
              <div class='delivery-delivery'>
                <!----> 
                <div content='蜂鸟专送' alt='蜂鸟专送' class='delivery-icon-hollow'>蜂鸟专送</div>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-moneylimit'>
                <span>¥20起送</span>
                <span>配送费¥1.1</span>
                <!---->
              </div>
              <div class='index-timedistanceWrap'>
                <span class='index-distanceWrap'>470m</span>
                <span>21分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class='item-bottom'>
          <!---->
          <section class='index-tagLine'>
            <span class='index-tagGhost'>奶茶果汁</span>
            <span class='index-recommendTag'>
              <img src='https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'>
              <span>口碑人气好店</span>
            </span>
          </section>
          <span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=' class='index-dashedline_7B79b3W'>
          </span>
          <section class='index-activities'>
            <div class='index-activityList'>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(240, 115, 115);'>减</span>
                </span>
                <span class='index-desc'>满25减2，满34减6，满49减10</span>
              </div>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(112, 188, 70);'>首</span>
                </span>
                <span class='index-desc'>新用户下单立减17元</span>
              </div>
            </div>
            <div class='index-activityBtn'>
              <span>8个活动</span>
              <img class='index-open' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
            </div>
          </section>
        </div>
      </section>
      <section class='shop-item'>
        <div class='item-top'>
          <div class='logo-container'>
            <div class='logo-main'>
              <img alt='书亦烧仙草(武汉第十六中学店)' class='logo-logo' src='https://fuss10.elemecdn.com/4/9f/d8dc035c87d39edaa473ade27d964jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'>
              <!----> <!---->
            </div>
            <!---->
          </div>
          <div class='index-main'>
            <section class='index-line'>
              <h3 class='index-shopname'>
                <i content='品牌' class='index-premium'>品牌</i>
                <span>书亦烧仙草(武汉第十六中学店)</span>
              </h3>
              <div class='index-supportWrap'>
                <!---->
                <span class='index-omit'>···</span>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-rateWrap'>
                <div class='Rating-wrapper index-stars'>
                  <div class='Rating-gray'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                  <div class='Rating-actived' style='width: 98%;'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
                  </div>
                </div>
                <span class='index-rate'>4.9</span>
                <span>月售272单</span>
              </div>
              <div class='delivery-delivery'>
                <!---->
                <div content='蜂鸟专送' alt='蜂鸟专送' class='delivery-icon-hollow'>蜂鸟专送</div>
              </div>
            </section>
            <section class='index-line'>
              <div class='index-moneylimit'>
                <span>¥20起送</span>
                <span>配送费¥1.1</span>
                <!---->
              </div>
              <div class='index-timedistanceWrap'>
                <span class='index-distanceWrap'>470m</span>
                <span>21分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class='item-bottom'>
          <!---->
          <section class='index-tagLine'>
            <span class='index-tagGhost'>奶茶果汁</span>
            <span class='index-recommendTag'>
              <img src='https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'>
              <span>口碑人气好店</span>
            </span>
          </section>
          <span>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=' class='index-dashedline_7B79b3W'>
          </span>
          <section class='index-activities'>
            <div class='index-activityList'>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(240, 115, 115);'>减</span>
                </span>
                <span class='index-desc'>满25减2，满34减6，满49减10</span>
              </div>
              <div class='index-actRow'>
                <span class='index-iconWrap'>
                  <span class='index-icon' style='background-color: rgb(112, 188, 70);'>首</span>
                </span>
                <span class='index-desc'>新用户下单立减17元</span>
              </div>
            </div>
            <div class='index-activityBtn'>
              <span>8个活动</span>
              <img class='index-open' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import { Z_FILTERED } from 'zlib'
import { shopList1 } from '@/api/data.js'
export default {
  data () {
    return {
      data: {
        has_next: true,
        items: [
          {
            restaurant: {
              act_tag: 0,
              activities: [
                {
                  attribute: "{'100': {'1': 20.0, '0': 0}, '70': {'1': 14.0, '0': 0}, '45': {'1': 9.0, '0': 0}, '30': {'1': 6.0, '0': 0}}",
                  description: '满30减6，满45减9，满70减14，满100减20',
                  icon_color: 'f07373',
                  icon_name: '减',
                  id: 21566240058,
                  is_exclusive_with_food_activity: true,
                  name: '鑫小城6店满减',
                  tips: '满30减6，满45减9，满70减14，满100减20',
                  type: 102
                },
                {
                  description: '折扣商品5折起',
                  icon_color: 'f07373',
                  icon_name: '折',
                  id: 21488765267,
                  name: '鑫小城单品5折',
                  tips: '鑫小城单品5折'
                },
                {
                  attribute: '17.0',
                  description: '新用户下单立减17元',
                  icon_color: '70bc46',
                  icon_name: '首',
                  id: 21538672411,
                  is_exclusive_with_food_activity: true,
                  name: '新用户立减(不与其他活动共享)',
                  tips: '新用户下单立减17元',
                  type: 103
                }
              ],
              address: '武汉市江岸区球场街915号京汉花园1层部分商网',
              authentic_id: 5354644704660869,
              business_info: "{'lemon_support_tags': [{'color': 'cce23028', 'text': '30减6', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'cce23028', 'text': '45减9', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'cce23028', 'text': '70减14', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'cce23028', 'text': '100减20', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'a25c03', 'text': '8元会员红包', 'border': '4ca25c03', 'background': null, 'type': 2, 'icon': null}, {'color': 'cce23028', 'text': '品质联盟', 'border': '4ce23028', 'background': null, 'type': 4, 'icon': null}, {'color': 'cce23028', 'text': '5折', 'border': '4ce23028', 'background': null, 'type': 7, 'icon': null}, {'color': 'cce23028', 'text': '首单减17', 'border': '4ce23028', 'background': null, 'type': 5, 'icon': null}], 'ad_info': null}",
              delivery_fee_discount: 0,
              delivery_mode: {
                border: '',
                color: '2395FF',
                gradient: {
                  rgb_from: '00AAFF',
                  rgb_to: '0085FF'
                },
                icon_hash: 'b9b45d2f6ff0dbeef3a78ef0e4e90abapng',
                id: 1,
                is_solid: true,
                text: '蜂鸟专送',
                text_color: 'FFFFFF'
              },
              description: '鑫小城故事（京汉店）',
              distance: 1272,
              favored: false,
              flavors: [
                {id: 221, name: '川湘菜'},
                {id: 263, name: '其他菜系'}
              ],
              float_delivery_fee: 3.6,
              float_minimum_order_amount: 20,
              folding_restaurant_brand: '鑫小城故事餐厅',
              folding_restaurants: [
                {
                  distance: 3037,
                  id: 'E7282129515627882457',
                  name: '鑫小城故事(幸福面居店)',
                  order_lead_time: 33,
                  scheme: 'https://h5.ele.me/shop/#id=E7282129515627882457',
                  type: 0
                }
              ],
              has_story: false,
              id: 'E1350356474343071678',
              image_path: '187a9f901d68682674f364ddd2d12c37png',
              is_new: false,
              is_premium: true,
              is_star: true,
              is_stock_empty: 0,
              is_valid: 1,
              latitude: 30.59343,
              longitude: 114.295739,
              max_applied_quantity_per_order: -1,
              name: '鑫小城故事(京汉大道店)',
              next_business_time: '16:30',
              only_use_poi: false,
              opening_hours: ['10:40/14:00', '16:30/21:00'],
              order_lead_time: 28,
              out_of_range: false,
              phone: '027-82818576',
              piecewise_agent_fee: {
                description: '配送费¥3.6',
                extra_fee: 0.1,
                is_extra: true,
                no_subsidy_fee: '',
                rules: [{fee: 3.6, price: 20}],
                tips: '配送费¥3.6'
              },
              platform: 0,
              posters: [],
              promotion_info: '温馨提示：9：00—17：00期间闭店状态可以下预订单！所有菜品不包含米饭，米饭需单点。不单独提供餐具，餐具只包含筷子和勺子，谢谢！',
              rating: 4.8,
              rating_count: 395,
              recent_order_num: 866,
              recommend: {
                color: '#e8470b',
                image_hash: 'ac124c767ffa7fd296d3e2d6f01798c6png',
                is_ad: false,
                reason: '口碑人气好店'
              },
              recommend_reasons: [{name: '回头客多'}, {name: '配送飞快'}],
              regular_customer_count: 0,
              scheme: 'https://h5.ele.me/shop/#id=E1350356474343071678',
              status: 1,
              support_tags: [
                {border: 'dddddd', color: '666666', icon: '4e20966ca2a516de3f02fb9c7fd1bc6dpng', text: '川湘菜', type: 1},
                {border: '4c000000', color: '99000000', text: '支持自取', type: 20},
                {border: 'dddddd', color: '333333', text: '品质联盟'}
              ],
              supports: [],
              tags: [],
              target_tag_path: 'd6a7283753e66cad4c4dc9a459d96a7fpng',
              theme: {default_color: '2395ff', header_style: 0, hongbao_style: 0, price_color: 'ff5339', third_tab_name: '商家', vanish_fields: []},
              type: 0
            }
          },
          {
            restaurant: {
              act_tag: 0,
              activities: [
                {
                  attribute: "{'50': {'1': 25.0, '0': 0}, '110': {'1': 60.0, '0': 0}, '85': {'1': 54.0, '0': 0}, '30': {'1': 20.0, '0': 0}}",
                  description: '满30减20，满50减25，满85减54，满110减60',
                  icon_color: 'f07373',
                  icon_name: '减',
                  id: 21567114786,
                  is_exclusive_with_food_activity: true,
                  name: '满减工作日4',
                  tips: '满30减20，满50减25，满85减54，满110减60',
                  type: 102
                },
                {
                  description: '特价商品1元起',
                  icon_color: 'f1884f',
                  icon_name: '特',
                  id: 21516762371,
                  name: '单品定价',
                  tips: '单品定价'
                },
                {
                  attribute: '17.0',
                  description: '新用户下单立减17元',
                  icon_color: '70bc46',
                  icon_name: '首',
                  id: 21538674443,
                  is_exclusive_with_food_activity: true,
                  name: '新用户立减(不与其他活动共享)',
                  tips: '新用户下单立减17元',
                  type: 103
                }
              ],
              address: '武汉市江汉区燕马小区8栋1层6室',
              authentic_id: 1384634724382516,
              business_info: "{'lemon_support_tags': [{'color': 'cce23028', 'text': '30减20', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'cce23028', 'text': '50减25', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'cce23028', 'text': '85减54', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'cce23028', 'text': '110减60', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'a25c03', 'text': '8元会员红包', 'border': '4ca25c03', 'background': null, 'type': 2, 'icon': null}, {'color': 'cce23028', 'text': '品质联盟', 'border': '4ce23028', 'background': null, 'type': 4, 'icon': null}, {'color': 'cce23028', 'text': '1元特价', 'border': '4ce23028', 'background': null, 'type': 7, 'icon': null}, {'color': 'cce23028', 'text': '领16元红包', 'border': '4ce23028', 'background': null, 'type': 8, 'icon': null}, {'color': 'cce23028', 'text': '返红包', 'border': '4ce23028', 'background': null, 'type': 9, 'icon': null}, {'color': 'cce23028', 'text': '首单减17', 'border': '4ce23028', 'background': null, 'type': 5, 'icon': null}], 'ad_info': null}",
              delivery_fee_discount: 3.5,
              description: '主经营汉堡类快餐，连锁品牌，全国分店多达百余家，欢迎加盟咨询， 加盟二维码：jlhb100， 加盟咨询热线：4000-300-517',
              distance: 3327,
              favored: false,
              flavors: [{id: 234, name: '炸鸡炸串'}, {id: 212, name: '汉堡薯条'}],
              float_delivery_fee: 1.6,
              float_minimum_order_amount: 20,
              folding_restaurant_brand: '港堡汉堡',
              folding_restaurants: [
                {distance: 4925, id: 'E5932311226450992319', name: '港堡汉堡·炸鸡(菱角湖店)', order_lead_time: 36, scheme: 'https://h5.ele.me/shop/#id=E5932311226450992319', type: 0}
              ],
              has_story: false,
              id: 'E2450833100825538336',
              image_path: '3e9750da03d1d8612c0fd3b6e81461cbpng',
              is_new: false,
              is_premium: true,
              is_star: false,
              is_stock_empty: 0,
              is_valid: 1,
              latitude: 30.581487,
              longitude: 114.282016,
              max_applied_quantity_per_order: -1,
              name: '港堡汉堡·炸鸡(江汉店)',
              next_business_time: '明天 10:10',
              only_use_poi: false,
              opening_hours: ['10:10/03:40'],
              order_lead_time: 41,
              out_of_range: false,
              phone: '15927348518',
              piecewise_agent_fee: {description: '远距离配送费¥1.6', extra_fee: -1.9, is_extra: true, no_subsidy_fee: '¥5.1', rules: [{fee: 1.6, price: 20}], tips: '远距离配送费¥1.6'},
              platform: 0,
              posters: [],
              promotion_info: '加盟二维码：jlhb100 加盟咨询热线：4000-300-517',
              rating: 4.7,
              rating_count: 530,
              recent_order_num: 3008,
              recommend: {is_ad: false, reason: ''},
              recommend_reasons: [{name: '味道超赞'}, {name: '回头客多'}],
              regular_customer_count: 0,
              scheme: 'https://h5.ele.me/shop/#id=E2450833100825538336',
              status: 1,
              support_tags: [
                {border: 'dddddd', color: '666666', icon: '4e20966ca2a516de3f02fb9c7fd1bc6dpng', text: '炸鸡炸串', type: 1},
                {border: '4c000000', color: '99000000', text: '支持自取', type: 20},
                {border: 'dddddd', color: '333333', text: '品质联盟'}
              ],
              supports: [
                {border: '90dddddd', description: '商家原因导致订单取消，赔付代金券', icon_color: '999999', icon_name: '赔', id: 10, name: '拒单赔', text_color: '666666', two_characters_icon_name: ''},
                {border: '90dddddd', description: '该商户食品安全已由国泰产险承担，食品安全有保障', icon_color: '999999', icon_name: '保', id: 7, name: '食安保', text_color: '666666', two_characters_icon_name: '保险'}
              ],
              tags: [],
              target_tag_path: 'd53fc0cb4dc67973038cbc591938a1b6png',
              theme: {default_color: '2395ff', header_style: 0, hongbao_style: 0, price_color: 'ff5339', third_tab_name: '商家', vanish_fields: []},
              type: 0
            }
          },
          {
            restaurant: {
              act_tag: 0,
              activities: [
                {
                  attribute: "{'49': {'1': 26.0, '0': 0}, '27': {'1': 20.0, '0': 0}, '109': {'1': 37.0, '0': 0}, '79': {'1': 31.0, '0': 0}}",
                  description: '满27减20，满49减26，满79减31，满109减37',
                  icon_color: 'f07373',
                  icon_name: '减',
                  id: 21561000266,
                  is_exclusive_with_food_activity: true,
                  name: '四季粥铺',
                  tips: '满27减20，满49减26，满79减31，满109减37',
                  type: 102
                },
                {
                  description: '特价商品13.9元起',
                  icon_color: 'f1884f',
                  icon_name: '特',
                  id: 1221334761,
                  name: '单品定价',
                  tips: '单品定价'
                },
                {
                  attribute: '13.0',
                  description: '新用户下单立减13元',
                  icon_color: '70bc46',
                  icon_name: '首',
                  id: 21543362235,
                  is_exclusive_with_food_activity: true,
                  name: '新用户立减(不与其他活动共享)',
                  tips: '新用户下单立减13元',
                  type: 103
                }
              ],
              address: '武汉市江岸区海寿街6-16号1层2室',
              authentic_id: 5334634722107316,
              business_info: "{'lemon_support_tags': [{'color': 'cce23028', 'text': '27减20', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'cce23028', 'text': '49减26', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'cce23028', 'text': '79减31', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'cce23028', 'text': '109减37', 'border': '4ce23028', 'background': null, 'type': 1, 'icon': null}, {'color': 'a25c03', 'text': '8元会员红包', 'border': '4ca25c03', 'background': null, 'type': 2, 'icon': null}, {'color': 'cce23028', 'text': '13.9元特价', 'border': '4ce23028', 'background': null, 'type': 7, 'icon': null}, {'color': 'cce23028', 'text': '领5元红包', 'border': '4ce23028', 'background': null, 'type': 8, 'icon': null}, {'color': 'cce23028', 'text': '首单减13', 'border': '4ce23028', 'background': null, 'type': 5, 'icon': null}], 'ad_info': null}",
              delivery_fee_discount: 2,
              description: '',
              distance: 578,
              favored: false,
              flavors: [{id: 265, name: '简餐'}, {id: 215, name: '包子粥店'}],
              float_delivery_fee: 0.1,
              float_minimum_order_amount: 0,
              folding_restaurant_brand: '四季粥铺',
              folding_restaurants: [{distance: 3564, id: 'E14581911331232547846', name: '四季粥铺(汉口店)', order_lead_time: 32, scheme: 'https://h5.ele.me/shop/#id=E14581911331232547846', type: 0}],
              has_story: false,
              id: 'E1867020023010868979',
              image_path: '985c9350a978157eb1f3776243bb5db2png',
              is_new: false,
              is_premium: false,
              is_star: false,
              is_stock_empty: 0,
              is_valid: 1,
              latitude: 30.592829,
              longitude: 114.3009,
              max_applied_quantity_per_order: -1,
              name: '四季粥铺(武汉天地店)',
              next_business_time: '明天 00:00',
              only_use_poi: false,
              opening_hours: ['00:00/24:00'],
              order_lead_time: 23,
              out_of_range: false,
              phone: '18696104117',
              piecewise_agent_fee: {description: '配送费¥0.1', extra_fee: -0.9, is_extra: true, no_subsidy_fee: '¥2.1', rules: [{fee: 0.1, price: 0}], tips: '配送费¥0.1'},
              platform: 0,
              posters: [],
              promotion_info: '因春节人力物力成本增加，配送压力较大，需要补贴骑手，故将满减活动稍微下调，等节后即会恢复。祝大家新年吉祥！',
              rating: 4.5,
              rating_count: 993,
              recent_order_num: 2548,
              recommend: {is_ad: false, reason: ''},
              recommend_reasons: [{name: '味道超赞'}, {name: '配送飞快'}],
              regular_customer_count: 0,
              scheme: 'https://h5.ele.me/shop/#id=E1867020023010868979',
              status: 1,
              support_tags: [
                {border: 'dddddd', color: '666666', icon: '4e20966ca2a516de3f02fb9c7fd1bc6dpng', text: '简餐', type: 1},
                {border: '4c000000', color: '99000000', text: '支持自取', type: 20}
              ],
              supports: [
                {border: '90dddddd', description: '商家原因导致订单取消，赔付代金券', icon_color: '999999', icon_name: '赔', id: 10, name: '拒单赔', text_color: '666666', two_characters_icon_name: ''},
                {border: '90dddddd', description: '该商户食品安全已由国泰产险承担，食品安全有保障', icon_color: '999999', icon_name: '保', id: 7, name: '食安保', text_color: '666666', two_characters_icon_name: '保险'}
              ],
              tags: [],
              theme: {default_color: '2395ff', header_style: 0, hongbao_style: 0, price_color: 'ff5339', third_tab_name: '商家', vanish_fields: []},
              type: 0
            }
          }
        ]
      }
    }
  },
  created () {
    /*
    // 测试代理是否成功
    // 第一种代理解决跨域请求的写法
    this.$axios.get("/restapi/bgs/poi/reverse_geo_coding?latitude=30.592935&longitude=114.305215")
    .then(res=>{
      console.log('res', res)
    })
    .catch(err=>{
      console.log(err)
    })
    // 第二种代理解决跨域请求的写法
    shopList1().then(response => {
      console.log('response', response)
    })
    */

    this.getData()
  },
  methods: {
    imgUrl (path) {
      console.log(path)
      let imgUrl = 'https://fuss10.elemecdn.com/' + path.substring(0, 1) + '/' + path.substring(1, 3) + '/' + path.substring(3) + '.png/?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'
      return imgUrl
    },
    indexActivityBtn (index) {
      console.log('1')
      $('.index-activities').find('.index-activityBtn').find('img').toggleClass('index-open')
      $('.index-activities').eq(index).find('.index-activityList').find('.index-actRow').each(function (i) {
        if (i > 1) {
          $('.index-activities').eq(index).find('.index-actRow').eq(i).toggle()
        }
      })
    },
    shop (id) {
      this.$router.push({
        name: 'shop',
        params: {
          id: id
        }
      })
    },
    getData () {
      console.log('json')
      this.$jsonp('https://h5.ele.me/restapi/shopping/v3/restaurants', {
        // params: {
        latitude: 30.492457,
        longitude: 114.389512
        // }
      }).then(json => {
        console.log(json)
        // 返回数据 json， 返回的数据就是json格式
      }).catch(err => {
        console.log('123', err)
      })
    }
  }
}
</script>

<style lang='less' scoped>
.shoplist{
  .shoplist-title{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.96rem;
    font-size: 0.4rem;
    color: #000000;
  }
  .shoplist-title::after,.shoplist-title::before{
    display: block;
    content: '';
    width: .533333rem;
    height: .026667rem;
    background-color: #999;
    margin: 0 .346667rem;
  }
  .home-filter{
    position: sticky;
    top: 1.333rem;
    z-index: 100;
    .filter{
      position: relative;
      line-height: 1.04rem;
      z-index: 101;
      height: 1.066667rem;
      .filter-header{
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 1.053333rem;
        display: flex;
        z-index: 4;
        background-color: #fff;
        .filter-nav{
          flex: 1;
          text-align: center;
          color: #666;
          position: relative;
          font-size: .373333rem;
          z-index: 101;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-decoration: none;
        }
        .active{
          color: #333;
          font-weight: 700;
        }
      }
    }
  }
  .shoplist-content{
    background-color: #fff;
    .shop-item{
      position: relative;
      border-bottom: .013333rem solid #eee;
      background-color: #fff;
      color: #666;
      padding: .4rem 0;
      list-style: none;
      font-size: .293333rem;
      line-height: normal;
      .item-top{
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        padding: 0 .266667rem;
        .logo-container{
          position: relative;
          flex: none;
          z-index: 0;
          .logo-main{
            position: relative;
            width: 1.733333rem;
            height: 1.733333rem;
            .logo-logo{
              box-sizing: border-box;
              display: block;
              width: 100%;
              height: 100%;
              border-radius: .053333rem;
              border: .013333rem solid rgba(0,0,0,.08);
            }
          }
        }
        .index-main{
          display: flex;
          justify-content: space-between;
          flex-grow: 1;
          flex-direction: column;
          overflow: hidden;
          user-select: none;
          padding-left: .266667rem;
          .index-line{
            display: flex;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
            .index-shopname{
              display: flex;
              align-items: center;
              margin: 0;
              padding: 0;
              color: #333;
              font-weight: 700;
              font-size: .4rem;
              overflow: hidden;
              .index-premium{
                position: relative;
                margin-right: .133333rem;
                padding: .026667rem .066667rem;
                color: transparent;
                text-align: center;
                white-space: nowrap;
                font-weight: 700;
                font-size: .293333rem;
                font-style: normal;
                line-height: normal;
                &::after{
                  display: block;
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: 0;
                  content: attr(content);
                  padding: .053333rem .133333rem;
                  color: #6f3f15;
                  font-weight: 700;
                  font-size: .586667rem;
                  border-radius: .106667rem;
                  background-image: linear-gradient(-139deg,#fff100,#ffe339);
                  white-space: nowrap;
                  transform: scale(.5);
                  transform-origin: 0 0;
                }
              }
              span{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
            .index-supportWrap{
              display: flex;
              align-items: center;
              margin-left: .266667rem;
              .index-omit{
                margin-left: .266667rem;
                padding: 0 .133333rem;
              }
            }
            .index-rateWrap{
              display: flex;
              align-items: center;
              .Rating-wrapper{
                position: relative;
                overflow: hidden;
                display: inline-block;
                vertical-align: middle;
                .Rating-gray{
                  display: flex;
                  img{
                    width: 1.493333rem;
                    height: .266667rem;
                    flex: none;
                    max-width: none;
                  }
                }
                .Rating-actived{
                  display: flex;
                  position: absolute;
                  top: 0;
                  left: 0;
                  overflow: hidden;
                  img{
                    width: 1.493333rem;
                    height: .266667rem;
                    flex: none;
                    max-width: none;
                  }
                }
              }
              .index-stars{
                margin-right: .106667rem;
              }
              .index-rate{
                margin-right: .106667rem;
              }
            }
            .delivery-delivery{
              display: flex;
              align-items: center;
              .delivery-icon-hollow{
                position: relative;
                padding: 0 .04rem;
                color: transparent;
                white-space: nowrap;
                font-size: .266667rem;
                border: .013333rem solid transparent;
                border-radius: .04rem;
                line-height: 1.2;
                margin-left: .106667rem;
                &::after{
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: 0;
                  white-space: nowrap;
                  content: attr(content);
                  font-size: .533333rem;
                  padding: 0 .053333rem;
                  border-radius: .08rem;
                  transform: scale(.5);
                  transform-origin: 0 0;
                  color: #fff;
                  border: .013333rem solid #0097ff;
                  background-image: linear-gradient(45deg,#0085ff,#0af);
                }
              }
            }
            .index-moneylimit{
              display: flex;
              align-content: center;
              span:nth-of-type(2) {
                overflow: hidden;
                max-width: 2.666667rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                &::before{
                  margin: 0 .017067rem;
                  margin: 0 .08rem;
                  color: #ddd;
                  content: '|';
                }
              }
            }
            .index-timedistanceWrap{
              display: flex;
              align-items: center;
              color: #999;
              .index-distanceWrap{
                &::after{
                  margin: 0 .017067rem;
                  margin: 0 .08rem;
                  color: #ddd;
                  content: '|';
                }
              }
            }
          }
        }
      }
      .item-bottom{
        padding-left: 2.266667rem;
        .index-tagLine{
          margin: .266667rem .266667rem 0 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          span{
            margin-right: .133333rem;
            margin-bottom: .106667rem;
          }
          .index-tagGhost{
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            font-size: .266667rem;
            color: transparent;
            white-space: nowrap;
            margin-right: .133333rem;
            margin-bottom: .106667rem;
            color: rgb(102, 102, 102);
            border-color: rgb(221, 221, 221);
          }
          .index-recommendTag{
            display: flex;
            align-items: center;
            border-radius: .013333rem;
            font-size: .266667rem;
            color: #666;
            height: .4rem;
            padding: 0 .106667rem;
            color: #e8470b;
            img{
              margin-top: .04rem;
              height: .266667rem;
              width: .266667rem;
              margin-right: .08rem;
            }
            span{
              margin-right: 0;
              margin-bottom: 0;
            }
          }
        }
        .index-activities{
          display: flex;
          position: relative;
          justify-content: space-between;
          align-content: stretch;
          overflow: hidden;
          .index-activityList{
            flex: 1;
            padding-right: .266667rem;
            overflow: hidden;
            .index-actRow{
              display: flex;
              align-items: center;
              font-size: .293333rem;
              line-height: .48rem;
              .index-iconWrap{
                display: inline-block;
                position: relative;
                margin-right: .16rem;
                height: .373333rem;
                width: .373333rem;
                vertical-align: middle;
                .index-icon{
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: 0;
                  height: .746667rem;
                  width: .746667rem;
                  font-size: .56rem;
                  color: #fff;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: .106667rem;
                  transform: scale(.5);
                  transform-origin: 0 0;
                }
              }
              .index-desc{
                display: inline-block;
                flex: 1;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                vertical-align: middle;
              }
            }
          }
          .index-activityBtn{
            padding: .08rem .266667rem 0 0;
            color: #999;
            text-align: right;
            font-size: .266667rem;
            line-height: 1;
            img{
              width: .173333rem;
              opacity: .9;
              margin-left: .106667rem;
              transition: all .3s ease-in-out;
              transform: rotate(0deg);
              fill: currentColor;
              will-change: transform;
              vertical-align: middle;
              position: relative;
              z-index: 1;
            }
            .index-open{
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }
}

</style>
