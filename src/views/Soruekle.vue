<template>
  <div class="container pt-5">
    <div class="ask p-2">
      <h2>Bir soru sor</h2>
      <p>
        Sormak istediğin soruyu alttaki metin editöründe düzenleyerek
        gönderebilirsin.
      </p>
      <ckeditor
        class="red"
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
      ></ckeditor>
      <div class="form-inline mt-2">
        <div class="mr-auto">
          <span>Kategori : </span>
          <select class="form-control" v-model="kategori">
            <option value="Dag" selected>Dag</option>
            <option value="Tas">Taş</option>
            <option value="Dere">Dere</option>
            <option value="Tepe">Tepe</option>
          </select>
        </div>
        <div>
          <span>Seviye : </span>
          <select class="form-control" name="sa" v-model="level">
            <option value="Grandmaster" selected="selected">Grandmaster</option>
            <option value="Master">Master</option>
            <option value="Noobie">Noobie</option>
          </select>
        </div>
      </div>
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
      kategori: "all",
      level: "all",
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
    formValidation() {
      if (this.editorData.length == 0) {
        this.$toast.open({
          message:
            "Boş, doldurulmamış alan bırakmayın. Kategori ve seviye seçmeyi unutmayın 😀 ",
          type: "error",
          // all of other options may go here
        });
        return false;
      }
    },
    async postData() {
      this.$store.dispatch("postData", {
        editorData: this.editorData,
        category: this.kategori,
        level: this.level,
      });
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
    color: white;
  }
  p {
    color: #93a0b1;
    font-weight: 600;
  }

  span {
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

    background-color: #533ed6;
    &:hover {
      background-color: #3e2fa3;
    }
  }
}
</style>
