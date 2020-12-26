<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark transparent">
    <div class="container">
      <router-link tag="a" class="navbar-brand" to="/"
        ><img src="../../assets/beeantlogo.png" alt="beeantlogo"
      /></router-link>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
            to="/"
            tag="a"
            class="nav-link"
            active-class="active"
            exact
            >Anasayfa</router-link
          >
          <router-link
            to="/sorular"
            tag="a"
            class="nav-link"
            active-class="active"
            exact
            >Sorular</router-link
          >
          <router-link
            to="/soruekle"
            tag="a"
            class="nav-link"
            active-class="active"
            exact
            >Soru Ekle</router-link
          >
          <router-link
            to="/hakkinda"
            tag="a"
            class="nav-link"
            active-class="active"
            exact
            >Hakkında</router-link
          >
        </div>
      </div>
      <button
        v-if="!getCurrentUser"
        @click="signInWithGoogle"
        type="button"
        class="btn-google"
      >
        <img src="../../assets/icons/google.svg" alt="google-icon" />
        Google ile giriş yap
      </button>
      <app-user-dropdown v-else></app-user-dropdown>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import AppUserDropdown from "./UserDropdown";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    AppUserDropdown,
  },
  computed: {
    ...mapGetters(["getCurrentUser", "getLoading"]),
  },
  methods: {
    ...mapActions(["signInWithGoogle"]),
  },
};
</script>

<style lang="scss" scoped>
// .navbar {
//   font-family: "Nunito", sans-serif;
// }
.navbar-brand {
  font-weight: 700;
  font-size: 32px;
}

.transparent {
  backdrop-filter: blur(5px);
  border-bottom: 1px solid #121212;
}
.nav-link {
  font-size: 18px;
}

.btn-google {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  transition: transform ease 0.25s;

  &:hover {
    transform: scale(1.02);
  }

  img {
    height: 20px;
    margin-right: 15px;
    filter: brightness(0) invert(1);
  }
}
</style>
