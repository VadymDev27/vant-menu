<template>
  <van-index-bar :index-list="indexList">
    <van-index-anchor index="1">Title 1</van-index-anchor>
    <van-cell title="Text" />
    <van-cell title="Text" />
    <van-cell title="Text" />

    <van-index-anchor index="2">Title 2</van-index-anchor>
    <van-cell title="Text" />
    <van-cell title="Text" />
    <van-cell title="Text" />

    <van-index-anchor index="3">Title 3</van-index-anchor>
    <van-cell title="Text" />
    <van-cell title="Text" />
    <van-cell title="Text" />

    <van-index-anchor index="4">Title 4</van-index-anchor>
    <van-cell title="Text" />
    <van-cell title="Text" />
    <van-cell title="Text" />

    <van-index-anchor index="5">Title 5</van-index-anchor>
    <van-cell title="Text" />
    <van-cell title="Text" />
    <van-cell title="Text" />

    <van-index-anchor index="6">Title 6</van-index-anchor>
    <van-cell title="Text" />
    <van-cell title="Text" />
    <van-cell title="Text" />

    <van-index-anchor index="7">Title 7</van-index-anchor>
    <van-cell title="Text" />
    <van-cell title="Text" />
    <van-cell title="Text" />

    <van-index-anchor index="8">Title 8</van-index-anchor>
    <van-cell title="Text" />
    <van-cell title="Text" />
    <van-cell title="Text" />
  </van-index-bar>
</template>

<script>

export default {
  setup() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
}

</script>

<style>
 .van-index-bar__sidebar {
    height: 40px;
    padding-top: 30px;
    background-color: white;
    display: block !important;
    left: 0%;
    top: 3% !important;
    z-index: 10;
 }
</style>