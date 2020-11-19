<template>
  <div class="container pt-5">
    <div class="ask p-2">
      <h2>Bir soru sor</h2>
      <p>
        Sormak istediğin soruyu alttaki metin editöründe düzenleyerek
        gönderebilirsin.
      </p>
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
      ></ckeditor>
      <select class="form-control">
        <option>Default select</option>
      </select>
      <button class="question" @click="postData">SORU SOR</button>
    </div>
    <loading v-if="loadingState"></loading>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Loading from "@/components/shared/Loading";
export default {
  name: "app",
  components: {
    Loading,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "|",
          "blockQuote",
          "|",
          "undo",
          "redo",
        ],
      },
    };
  },
  computed: {
    loadingState() {
      return this.$store.getters.getLoading;
    },
  },
  methods: {
    formValidation() {},
    async postData() {
      this.$store.dispatch("postData", this.editorData);
      this.editorData = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.ask {
  background-color: #202020;
  border-radius: 10px;
  h2 {
    font-weight: 700;
  }
  p {
    color: #93a0b1;
    font-weight: 600;
  }
  .question {
    border-radius: 50px;
    padding: 5px 20px;
    margin: 10px 0px;
    font-size: 20px;
    font-weight: 700;
    color: white;
    border: none;
    color: white;
    background-color: #533ed6;
    &:hover {
      background-color: #3e2fa3;
    }
  }
}
</style>
