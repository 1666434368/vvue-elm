<template>
  <div class="ratings">
    <div class="overview">
      <div class="overview-left">
        <p class="overview-num">4.7</p>
        <div class="overview-text">
          <span>商家评分</span>
          <div class="rating-wrapper">
            <div class="rating-gray">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="xx">
            </div>
            <div class="rating-actived" style="width: 94%">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt="xx">
            </div>
          </div>
        </div>
      </div>
      <div class="overview-right">
        <div class="overview-taste">
          <div>
            <span>味道</span>
            <p>4.7</p>
          </div>
          <div>
            <span>包装</span>
            <p>4.7</p>
          </div>
        </div>
        <div class="overview-delivery">
            <span>配送</span>
            <p>4.9</p>
        </div>
      </div>
    </div>
    <div class="appraise">
      <ul class="title">
        <li class="rating-tags rating-one">全部 1235</li>
        <li class="rating-tags">最新</li>
        <li class="rating-tags">好评 1145</li>
        <li class="rating-tags rating-two">差评 34</li>
        <li class="rating-tags">有图 141</li>
        <li class="rating-tags">味道好 41</li>
        <li class="rating-tags rating-two">不好吃 17</li>
        <li class="rating-tags rating-two">分量一般 15</li>
      </ul>
      <p class="condition">只看有内容的评价</p>
      <ul>
        <li class="items" v-for="(item, index) in ratings" :key="index">
          <div class="comment">
            <div class="image" style="width: 60px; height: 60px;">
              <img v-if="item.avatar" :src="imgUrl60(item.avatar)" :alt="item.username">
              <span v-else-if="!item.avatar" style="background-position: 0px 60px; background-size: 60px;"></span>
            </div>
            <div class="comment-block">
              <div class="comment-title">
                <h3 class="comment-name">{{item.username}}</h3>
                <small class="comment-time">{{item.rated_at}}</small>
              </div>
              <div class="comment-star">
                <div class="rating-wrapper">
                  <div class="rating-gray">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="xx">
                  </div>
                  <div class="rating-actived" :style="{width: 20 * item.rating + '%'}">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt="xx">
                  </div>
                </div>
                <span v-if="item.rating === 1" class="comment-pj" style="color: rgb(137, 159, 188);">吐槽</span>
                <span v-else-if="item.rating === 2" class="comment-pj" style="color: rgb(137, 159, 188);">较差</span>
                <span v-else-if="item.rating === 3" class="comment-pj" style="color: rgb(251, 154, 11);">一般</span>
                <span v-else-if="item.rating === 4" class="comment-pj" style="color: rgb(251, 154, 11);">较好</span>
                <span v-else-if="item.rating === 5" class="comment-pj" style="color: rgb(255, 96, 0);">超赞</span>
              </div>
              <div class="comment-content">{{item.rating_text}}</div>
              <div class="comment-response" v-if="item.reply">{{item.reply.content}}</div>
              <ul class="comment-images">
                <li v-for="(item1, index1) in item.order_images" :key="index1">
                  <img :src="imgUrl300(item1.image_hash)" :alt="item1.food_names[index1]">
                </li>
              </ul>
              <div class="comment-dish">
                <span class="comment-dishImg"></span>
                <span v-for="(item2, index2) in item.food_ratings" :key="index2"><span v-if="item2.rating === 5" class="comment-dishName">{{item2.rate_name}}</span></span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {imgUrl60, imgUrl300} from '@/utils/imgurl.js'
export default {
  data() {
    return {
      ratings: [
        {
          avatar: "",
          food_ratings: [
            {food_id: 997721298, rate_name: "金汤酸菜鱼", rating: 4, rating_text: "金汤酸菜鱼 好吃又好看", sku_id: 622047192220, sku_id_str: "622047192220"},
            {food_id: 900216215, rate_name: "米饭", rating: 4, rating_text: "", sku_id: 522181398684, sku_id_str: "522181398684"}
          ],
          highlights_v2: {金汤酸菜鱼: 622047192220},
          is_super_vip: false,
          is_taobao_vip: false,
          order_id: 2107048113731551200,
          rated_at: "2019-04-17",
          rating: 5,
          rating_text: "金汤酸菜鱼 好吃又好看",
          tags: [""],
          time_spent_desc: "",
          username: "匿名用户"
        },
        {
          avatar: "d1d762f31c209c74bd382ed0a9b733e3jpeg",
          food_ratings: [
            {food_id: 900239412, rate_name: "香辣鸡杂", rating: 5, rating_text: "", sku_id: 522205164700, sku_id_str: "522205164700"},
            {food_id: 900216215, rate_name: "米饭", rating: 5, rating_text: "", sku_id: 522181398684, sku_id_str: "522181398684"}
          ],
          highlights_v2: {},
          is_super_vip: true,
          is_taobao_vip: false,
          order_id: 2106998510625992700,
          rated_at: "2019-04-16",
          rating: 5,
          rating_text: "味道是很不错，就是量太少，不够吃😂",
          reply: {
            content: "亲爱的顾客，感谢您的好评，老乡鸡会再接再厉，提供更好的外送服务。你是风儿，我是沙，坐着电瓶车到你那。希望在路上的风吹雨打，没有失去我本来的滋味，给你一个完美的体验。好吃才是硬道理。我要做到更好吃，变得更硬。期待您再次点餐, 老乡鸡全国600多家快餐直营店竭诚为您服务！",
            created_at: "23小时40分钟前"
          },
          tags: [""],
          time_spent_desc: "",
          username: "爱*******4"
        },
        {
          avatar: "02acd64171e2df0122272c665d4100e3jpeg",
          food_ratings: [
            {food_id: 900221996, rate_name: "肥西老母鸡汤小份", rating: 5, rating_text: "", sku_id: 522187308188, sku_id_str: "522187308188"},
            {food_id: 900216215, rate_name: "米饭", rating: 5, rating_text: "", sku_id: 522181398684, sku_id_str: "522181398684"}
          ],
          highlights_v2: {},
          is_super_vip: true,
          is_taobao_vip: false,
          order_id: 2106974738703220700,
          order_images: [
            {food_ids: [900221996], food_names: ["肥西老母鸡汤小份"], image_hash: "94a43b7a505a47d4f28cd1db0d1629ccjpeg"}
          ],
          rated_at: "2019-04-15",
          rating: 5,
          rating_text: "味道好，也很热，下次还会点",
          reply: {
            content: "亲爱的顾客，感谢您的好评，老乡鸡会再接再厉，提供更好的外送服务。你是风儿，我是沙，坐着电瓶车到你那。希望在路上的风吹雨打，没有失去我本来的滋味，给你一个完美的体验。好吃才是硬道理。我要做到更好吃，变得更硬。期待您再次点餐, 老乡鸡全国600多家快餐直营店竭诚为您服务！",
            created_at: "2019-04-16 03:39:00"
          },
          tags: [""],
          time_spent_desc: "",
          username: "5*********6"
        },
        {
          avatar: "",
          food_ratings: [
            {food_id: 900239404, rate_name: "鸡汤娃娃菜", rating: 2, rating_text: "鸡汤娃娃菜 是生的", sku_id: 522205156508, sku_id_str: "522205156508"},
            {food_id: 900230355, rate_name: "葱油鸡", rating: 4, rating_text: "", sku_id: 522195855516, sku_id_str: "522195855516"},
            {food_id: 900216215, rate_name: "米饭", rating: 4, rating_text: "", sku_id: 522181398684, sku_id_str: "522181398684"}
          ],
          highlights_v2: {鸡汤娃娃菜: 522205156508},
          is_super_vip: true,
          is_taobao_vip: false,
          order_id: 2106887304158231600,
          rated_at: "2019-04-14",
          rating: 3,
          rating_text: "鸡汤娃娃菜 是生的",
          reply: {
            content: "尊敬的顾客，您好！给您用餐带来不好的体验，非常抱歉！关于产品的品质，我们会再次强调产品份品质准的重要性，如有类似情况发生，餐厅电话027-87650015，我们会马上为您解决。下次再定我家外卖，如果有任何需求，我们可以及时沟通给您解决，保证让您满意。老乡鸡600多家直营店祝您生活愉快！",
            created_at: "2019-04-15 01:21:34"
          },
          tags: [""],
          time_spent_desc: "",
          username: "匿名用户"
        },
        {
          avatar: "",
          food_ratings: [
            {food_id: 997691857, rate_name: "菌菇滑鸡", rating: 2, rating_text: "", sku_id: 622038936732, sku_id_str: "622038936732"},
            {food_id: 900216215, rate_name: "米饭", rating: 5, rating_text: "", sku_id: 522181398684, sku_id_str: "522181398684"},
            {food_id: 900239404, rate_name: "鸡汤娃娃菜", rating: 5, rating_text: "", sku_id: 522205156508, sku_id_str: "522205156508"}
          ],
          highlights_v2: {},
          is_super_vip: false,
          is_taobao_vip: false,
          order_id: 2106873665128953900,
          order_images: [
            {food_ids: [997691857], food_names: ["菌菇滑鸡"], image_hash: "4b625e9359131d3f0f242148929ab239jpeg"}
          ],
          rated_at: "2019-04-13",
          rating: 2,
          rating_text: "17块的菌菇滑鸡还没有手掌大",
          reply: {
            content: "商家回复：亲爱的顾客，我们的米饭都是单点的，如有任何疑问可致电餐厅027—87650015与我们联系！老乡鸡，全国600多家直营店祝您生活愉快！",
            created_at: "2019-04-14 03:27:29"
          },
          tags: [""],
          time_spent_desc: "",
          username: "匿名用户"
        },
        {
          avatar: "",
          food_ratings: [
            {food_id: 900225314, rate_name: "特色鸡汤馄饨", rating: 4, rating_text: "特色鸡汤馄饨 ", sku_id: 522190732444, sku_id_str: "522190732444"},
            {food_id: 997712688, rate_name: "儿童成长餐", rating: 4, rating_text: "", sku_id: 622007818396, sku_id_str: "622007818396"}
          ],
          highlights_v2: {特色鸡汤馄饨: 522190732444},
          is_super_vip: true,
          is_taobao_vip: false,
          order_id: 2106775045708931000,
          rated_at: "2019-04-13",
          rating: 5,
          rating_text: "特色鸡汤馄饨 ",
          reply: {
            content: "亲爱的顾客，感谢您的好评，老乡鸡会再接再厉，提供更好的外送服务。你是风儿，我是沙，坐着电瓶车到你那。希望在路上的风吹雨打，没有失去我本来的滋味，给你一个完美的体验。好吃才是硬道理。我要做到更好吃，变得更硬。期待您再次点餐, 老乡鸡全国600多家快餐直营店竭诚为您服务！",
            created_at: "2019-04-14 03:28:18"
          },
          tags: [""],
          time_spent_desc: "",
          username: "C********i"
        },
        {
          avatar: "",
          food_ratings: [
            {food_id: 900239412, rate_name: "香辣鸡杂", rating: 5, rating_text: "", sku_id: 522205164700, sku_id_str: "522205164700"},
            {food_id: 963062213, rate_name: "粉蒸肉", rating: 5, rating_text: "", sku_id: 586568427676, sku_id_str: "586568427676"},
            {food_id: 900216215, rate_name: "米饭", rating: 5, rating_text: "", sku_id: 522181398684, sku_id_str: "522181398684"},
            {food_id: 900221994, rate_name: "剁椒鱼头", rating: 5, rating_text: "", sku_id: 522187306140, sku_id_str: "522187306140"},
            {food_id: 900239413, rate_name: "农家蒸蛋", rating: 5, rating_text: "", sku_id: 522205165724, sku_id_str: "522205165724"}
          ],
          highlights_v2: {},
          is_super_vip: true,
          is_taobao_vip: true,
          order_id: 2106682833247635500,
          rated_at: "2019-04-12",
          rating: 5,
          rating_text: "非常好，良心商家，味道正点！",
          reply: {
            content: "亲爱的顾客，感谢您的评价，为了您的满意，5星好评的您平时一定是个平易近人、乐于助人的人，鸡小宝多么想和您认识交你这个朋友呀。我叫鸡小宝，是老乡鸡的吉祥物。有我更吉祥，有我更快乐。鸡小宝会在接下来的日子更加努力的！期待您的下次光临。老乡鸡全国600多家快餐直营店祝您生活愉快！",
            created_at: "2019-04-13 04:14:00"
          },
          tags: [""],
          time_spent_desc: "",
          username: "w********b"
        },
        {
          avatar: "",
          food_ratings: [
            {food_id: 900221996, rate_name: "肥西老母鸡汤小份", rating: 5, rating_text: "", sku_id: 522187308188, sku_id_str: "522187308188"},
            {food_id: 963062213, rate_name: "粉蒸肉", rating: 5, rating_text: "", sku_id: 586568427676, sku_id_str: "586568427676"},
            {food_id: 900203752, rate_name: "香肠蒸豆米", rating: 5, rating_text: "", sku_id: 522168675484, sku_id_str: "522168675484"},
            {food_id: 900216230, rate_name: "咸鸭蛋", rating: 5, rating_text: "", sku_id: 522181414044, sku_id_str: "522181414044"},
            {food_id: 900216215, rate_name: "米饭", rating: 5, rating_text: "", sku_id: 522181398684, sku_id_str: "522181398684"}
          ],
          highlights_v2: {},
          is_super_vip: true,
          is_taobao_vip: false,
          order_id: 2106575048501485600,
          rated_at: "2019-04-12",
          rating: 5,
          rating_text: "跟在店里吃一样，健康卫生",
          reply: {
            content: "亲爱的顾客，感谢您的评价，为了您的满意，5星好评的您平时一定是个平易近人、乐于助人的人，鸡小宝多么想和您认识交你这个朋友呀。我叫鸡小宝，是老乡鸡的吉祥物。有我更吉祥，有我更快乐。鸡小宝会在接下来的日子更加努力的！期待您的下次光临。老乡鸡全国600多家快餐直营店祝您生活愉快！",
            created_at: "2019-04-13 04:13:38"
          },
          tags: [""],
          time_spent_desc: "",
          username: "4*******0"
        },
      ]
    }
  },
  created() {
  },
  mounted() {
    $('.items').each(function(i){
      if($(this).find('.comment-dish').find('.comment-dishName').length > 0) {
        $(this).find('.comment-dish').find('.comment-dishImg').show()
      } else {
        $(this).find('.comment-dish').find('.comment-dishImg').hide()
      }
    })
  },
  methods: {
    imgUrl60, imgUrl300,

  }
}
</script>

<style lang="less" scoped>
.ratings{
  background-color: #f5f5f5;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .rating-wrapper{
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    .rating-gray{
      display: flex;
      img{
        width: 1.493333rem;
        height: .266667rem;
        flex: none;
        max-width: none;
      }
    }
    .rating-actived{
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
  .overview{
    margin-bottom: .213333rem;
    padding: .533333rem 0 .8rem .64rem;
    background-color: #fff;
    display: flex;
    .overview-left{
      display: flex;
      width: 3.36rem;
      justify-content: space-between;
      align-items: center;
      color: #666;
      .overview-num{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.013333rem;
        color: #ff6000;
      }
      .overview-text{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
          font-size: .32rem;
          margin-bottom: .133333rem;
        }
      }
    }
    .overview-right{
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      color: #666;
      .overview-taste{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex: 1;
        padding: 0 .72rem;
        align-items: center;
        div{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
      .overview-delivery{
        width: 2.293333rem;
        border-left: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      span{
        font-size: .32rem;
        margin-bottom: .133333rem;
      }
      p{
        font-size: .533333rem;
        margin: 0;
        font-weight: 400;
      }
    }
  }
  .appraise{
    background-color: #fff;
    padding: .266667rem .32rem 0;
    font-size: .36rem;
    .title{
      padding-bottom: .266667rem;
      border-bottom: 1px solid #eee;
      font-size: 0;
      .rating-tags{
        display: inline-block;
        padding: 0 .24rem;
        height: .746667rem;
        line-height: .746667rem;
        margin: .093333rem;
        font-size: .32rem;
        border-radius: .053333rem;
        color: #6d7885;
        background-color: #ebf5ff;
      }
      .rating-one{
        color: #fff;
        background-color: #0097ff;
      }
      .rating-two{
        color: #aaa;
        background-color: #f5f5f5;
      }
    }
    .condition{
      display: flex;
      align-items: center;
      padding-left: .4rem;
      height: 1.066667rem;
      color: #666;
      border-bottom: .013333rem solid #eee;
    }
    .items{
      padding: .4rem 0 .32rem;
      border-bottom: .013333rem solid #eee;
      .comment{
        position: relative;
        padding-left: 1.066667rem;
        .image{
          position: absolute;
          top: 0;
          left: 0;
          width: .8rem;
          height: .8rem;
          border-radius: 50%;
          img{
            border-radius: 50%;
            width: 100%;
            height: 100%;
          }
          span{
            border-radius: 50%;
            width: 100%;
            height: 100%;
            display: inline-block;
            background: url(//shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png);
          }
        }
        .comment-block{
          .comment-title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .comment-name{
              font-size: .346667rem;
              margin-top: 0;
              color: #333;
              margin-right: .16rem;
            }
            .comment-time{
              font-size: .293333rem;
              color: #999;
            }
          }
          .comment-star{
            display: flex;
            -webkit-align-items: center;
            align-items: center;
            margin: .16rem 0 .053333rem;
            .comment-pj{
              font-size: .293333rem;
              margin-left: .106667rem;
            }
          }
          .comment-content{
            display: flex;
            color: #333;
            font-size: .373333rem;
            word-break: break-word;
            margin: .213333rem 0;
          }
          .comment-response{
            position: relative;
            margin: .266667rem 0;
            padding: .266667rem;
            background: #f3f3f3;
            border-radius: .106667rem;
            font-size: 0.346667rem;
            &::after{
              content: " ";
              position: absolute;
              bottom: 100%;
              left: .4rem;
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 0 .213333rem .213333rem;
              border-color: transparent transparent #f3f3f3;
            }
          }
          .comment-images{
            margin-top: .106667rem;
            margin-bottom: .32rem;
            li{
              display: inline-block;
              margin: 0 .053333rem;
              img{
                width: 4rem;
                height: 4rem;
              }
            }
          }
          .comment-dish{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: -.106667rem;
            .comment-dishImg{
              display: inline-block;
              width: .453333rem;
              height: .453333rem;
              margin-right: .16rem;
              background-color: red;
            }
            .comment-dishName{
              display: inline-flex;
              align-items: center;
              height: .64rem;
              margin-right: .106667rem;
              margin-bottom: .106667rem;
              font-size: .293333rem;
              color: #6d7885;
              padding: 0 .16rem;
              border-radius: .053333rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              background-color: #ebf5ff;
            }
          }
        }
      }
    }
  }
}
</style>
