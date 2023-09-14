<!-- src/components/RandomPhotos.vue -->
<template>
  <div class="randphoto">
    <div
      v-for="(photo, index) in photos"
      @click="openModal(photo)"
      :key="index"
      class="photo"
    >
      <div class="item">
        <img :src="photo.urls.regular" :alt="photo.alt_description" />
      </div>
    </div>

    <div v-if="isModalOpen" class="modal">
      <div class="head">
        <div v-for="photo in photos1" :key="photo.id">
          <button @click="addToFavorites(photo)">
            {{ isFavorite ? "Удалить из избранного" : "Добавить в избранное" }}
            sdsd
          </button>
        </div>
        <a :href="currentPhoto.urls.regular" download>
          <button class="button">Download</button>
        </a>
      </div>

      <div class="modal-content">
        <img
          :src="currentPhoto.urls.regular"
          :alt="currentPhoto.alt_description"
        />
        <button class="X" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["photos1"],
  components: {},
  data() {
    const currentPhoto = ref({});
    const openModal = (photo) => {
      this.isModalOpen = true;
      // Задайте URL изображения перед открытием модального окна
      //   this.imageUrl = "URL_ИЗОБРАЖЕНИЯ";
      currentPhoto.value = photo;
    };
    const closeModal = () => {
      this.isModalOpen = false;
      this.imageUrl = "";
    };
    return {
      isModalOpen: false,
      photos: [],
      currentPhoto,
      openModal,
      closeModal,
    };
  },
  mounted() {
    this.fetchRandomPhotos();
  },
  methods: {
    async fetchRandomPhotos() {
      try {
        const response = await this.$axios.get(
          `https://api.unsplash.com/photos/random/?count=9&client_id=66CuALTfL3U6LDOzK3_Tq29beJVIUygLhoi50byGkRo`
        );

        this.photos = response.data;
      } catch (error) {
        console.error("Error fetching random photos:", error);
      }
    },
    addToFavorites(photo1) {
      this.$store.dispatch("addPhotoToFavorites", photo1);
    },
  },
};
</script>

<style scoped>
/* Стили для модального окна */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  flex-direction: column;
}

.modal-content {
  border-radius: 5px;
  text-align: center;
}
.fav {
  border-radius: 10px;
}
button {
  margin-top: 10px;
}
/* Add your CSS styling here */
.randphoto {
  cursor: pointer;
  width: 100%;
  padding-top: 5%;
  padding-right: 10%;
  padding-left: 10%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 5%;
  justify-content: space-between;
}
.photo {
  width: 33%;
  height: 450px;
}
img {
  border-radius: 10px;
  width: 100%;
  height: 430px;
  display: block;
}
.head {
  display: flex;
  align-items: center;
}
/* .button {
  position: fixed;
  top: 20%;
  left: 60%;
  border-radius: 4px;
  border: 1px solid #fff200;
  background: #fff200;
  color: black;
  font-weight: 400;
}
.fav {
  width: 20px;
} */
.X {
  color: aliceblue;
  background: black;
  border-radius: 50%;
}
</style>
