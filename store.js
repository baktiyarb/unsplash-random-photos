import { createStore } from "vuex";

export default createStore({
  state: {
    favorites: [],
  },
  mutations: {
    addToFavorites(state, photo) {
      state.favorites.push(photo);
    },
    removeFromFavorites(state, photo) {
      state.favorites = state.favorites.filter((p) => p.id !== photo.id);
    },
  },
  actions: {
    addPhotoToFavorites({ commit }, photo) {
      commit("addToFavorites", photo);
    },
    removePhotoFromFavorites({ commit }, photo) {
      commit("removeFromFavorites", photo);
    },
  },
  getters: {
    getFavorites(state) {
      return state.favorites;
    },
  },
});
