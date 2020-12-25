<template>
  <div id="app">
    <app-header class="red"></app-header>
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/shared/Header";
export default {
  components: {
    AppHeader,
  },
  computed: {
    errors() {
      return this.$store.getters.getErrors;
    },
  },
  created(){
    this.$store.dispatch("getUpdateQuestions");
  },
  watch: {
    errors(oldVal) {
      if (oldVal.length > 0) {
        this.$toast.open({
          message: "Something went wrong!",
          type: "error",
          // all of other options may go here
        });
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
body {
  background-color: #121212;
  font-family: 'Space Grotesk', sans-serif;
}
.loading {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  top: calc(100% / 2);
  left: calc(100% / 2);
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
