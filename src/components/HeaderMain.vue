<template>
  <div class="contain">
    <div class="header" to="/favorites">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/OBJECTS.png" alt="" />
        </router-link>
      </div>

      <div class="favourite" to="/favorites">
        <router-link to="/favorites">
          <img src="../assets/Group7.png" alt=""
        /></router-link>
      </div>
    </div>
  </div>
  <div class="search">
    <div class="input1">
      <input
        class="input"
        v-model="search"
        placeholder="&nbsp&nbsp&nbspПоиск"
      />
    </div>

    <div v-for="photo in filteredPhotos" :key="photo.id">
      <img :src="photo.url" alt="Photo" />
    </div>
  </div>
</template>

<style scoped>
.contain {
  width: 100%;
  background-color: #000;
}
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  align-items: center;
}
.logo {
  padding-left: 10%;
}
.favourite {
  padding-right: 10%;
  cursor: pointer;
}
.search {
  background-image: url(../assets/search.png);
  background-size: contain;
  height: 230px;
  width: 100%;
}
.input {
  margin-top: 5rem;
  height: 50px;
  width: 30%;
  border-radius: 1px;
}
.input1 {
  display: flex;
  justify-content: center;
}
</style>
<script>
export default {
  data() {
    return {
      search: "",
      photos: [
        // Your array of photos goes here
        // Example: { id: 1, url: 'photo1.jpg' },
      ],
    };
  },
  computed: {
    filteredPhotos() {
      return this.photos.filter((photo) =>
        photo.url.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
