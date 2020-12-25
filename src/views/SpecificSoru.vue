<template>
  <div class="container mt-5">
    <div
      class="content-box"
      v-html="specificQuestion[0].data.questionData.content"
    ></div>
    <div>
      <span class="label">this page in Development</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      specificQuestion: {},
    };
  },
  created() {
    this.specificQuestion = this.$store.getters["getSpecificQuestion"](
      this.$route.params.id
    );
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  padding: 30px;
  color: white;
  font-size: 16px;
  border: 2px solid rgba($color: white, $alpha: 0.15);
  border-radius: 10px;
  overflow: hidden;
  word-break: break-all;
  color: white;
}
.label {
  padding: 8px;
  font-weight: 600;
  color: #a1760f;
  background-color: #ecb22e;
  border-radius: 8px;
}
</style>
