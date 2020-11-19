<template>
  <div class="container">
    <loading v-if="loadingState"></loading>
    <div v-else v-for="item in questions" :key="item.id">
      <soru-item :list="item"></soru-item>
    </div>
  </div>
</template>

<script>
import { getQuestions } from "@/firebase/utils";
import SoruItem from "./Soru-item.vue";

import Loading from "../shared/Loading.vue";
export default {
  components: { SoruItem, Loading },
  data() {
    return {
      questions: {},
    };
  },
  computed: {
    loadingState() {
      return this.$store.getters.getLoading;
    },
  },
  async created() {
    this.$store.commit("setLoading", true);
    const questions = await getQuestions();
    this.questions = questions;
    this.$store.commit("setLoading", false);
  },
};
</script>

<style></style>
