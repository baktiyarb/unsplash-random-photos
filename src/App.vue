<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderMain />
    <RandomPhotos />
  </div>
</template>

<script>
import "ant-design-vue/dist/reset.css";
import RandomPhotos from "./components/RandomPhotos.vue";
import HeaderMain from "./components/HeaderMain.vue";
export default {
  components: {
    RandomPhotos,
    HeaderMain,
  },
  data() {
    return {
      images: [
        /* массив изображений */
      ],
    };
  },
};
</script>

<style scoped>
.contain {
  width: 100%;
}
.app {
  width: 80%;
}
</style>
