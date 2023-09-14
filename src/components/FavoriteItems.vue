<template>
  <div>
    <h2>Favorites</h2>
    <div v-for="photo in favorites" :key="photo.id">
      <img :src="photo.url" alt="Favorite Photo" />
      <button @click="removeFromFavorites(photo)">Remove from Favorites</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.getters.getFavorites;
    },
  },
  methods: {
    removeFromFavorites(photo) {
      this.$store.dispatch("removePhotoFromFavorites", photo);
    },
  },
};
</script>
