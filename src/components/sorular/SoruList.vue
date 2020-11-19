<template>
    <div class="container">
        <loading v-if="loadingState"></loading>
        
        <div v-else v-for="item in getQuestions" :key="item.id">
            <soru-item :list="item"></soru-item>
        </div>
        
    </div>
</template>

<script>

import SoruItem from "./Soru-item.vue";

import Loading from "../shared/Loading.vue";
export default {
    components: { SoruItem, Loading },
    computed: {
        getQuestions(){
          return this.$store.getters.getQuestions;
        },
        loadingState() {
            return this.$store.getters.getLoading;
        },
    },
    async created() {
        this.$store.commit("setLoading", true);
        this.$store.dispatch("getUpdateQuestions")
        this.$store.commit("setLoading", false);
    },
};
</script>

<style></style>
