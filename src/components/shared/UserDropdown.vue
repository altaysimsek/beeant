<template>
  <div
    class="dropdown dropdown-toggle"
    id="dropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <img
      height="50px"
      :src="getCurrentUser.photoUrl ? getCurrentUser.photoUrl : '#'"
    />

    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <h6 class="dropdown-header"><b>Beeant Menu</b></h6>
      <router-link to="/profile" tag="a" class="dropdown-item"
        >Profil</router-link
      >
      <router-link to="/soruekle" tag="a" class="dropdown-item"
        >Soru ekle</router-link
      >
      <a class="dropdown-item" @click="logOut">Log out</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    ...mapActions(["logOut"]),
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  color: white;
  cursor: pointer;
  border-radius: 50%;
  transition: all ease 0.18s;

  img {
    border-radius: 50%;
    border: 2px solid #533ed6;
  }

  &:hover {
    transform: scale(1.05);
  }

  a {
    cursor: pointer;
  }
}
</style>
