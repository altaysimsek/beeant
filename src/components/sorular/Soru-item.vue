<template>
  <div class="own-card">
    <div class="likey">
      <span class="like"
        ><img src="../../assets/icons/like.svg" alt="like-icon" />
        {{ list.data.questionData.likes.length }}</span
      >
      <span class="dislike"
        ><img src="../../assets/icons/dislike.svg" alt="dislike-icon" />{{
          list.data.questionData.dislikes.length
        }}</span
      >
    </div>
    <div class="own-card-body">
      <span class="content mb-auto">
        <p>{{ ToText(list.data.questionData.content) }}</p>
      </span>
      <span class="detail">
        <span class="author"
          ><i class="fas fa-at"></i
          >{{ list.data.questionData.authorName }}</span
        >
        <span class="category"
          ><i class="fas fa-bars"></i
          >{{ list.data.questionData.category }}</span
        >
        <span class="level"
          ><i class="fas fa-level-up-alt"></i
          >{{ list.data.questionData.level }}</span
        ></span
      >
    </div>
    <div class="own-card-end">
      <button class="classy-btn">Devamını oku!</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    ToText(HTML) {
      var input = HTML;
      return input
        .slice(0, 120 || input.length)
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
    },
  },
};
</script>

<style lang="scss" scoped>
.own-card {
  display: flex;
  background-color: #25262a;
  margin: 20px 0px;
  width: 100%;
  border-radius: 0px 10px 10px 0px;
  border-left: 6px solid #533ed6;
  box-shadow: -3px 4px 8px 0px rgba(0, 0, 0, 0.3),
    0px 4px 4px rgba(0, 0, 0, 0.2);
  .likey {
    margin-right: 25px;
    padding: 20px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 18px;
    color: #8f9cac;
    .like {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      transition: all ease 0.18s;
      align-items: center;
      img {
        height: 18px;
        margin-right: 10px;
        transform: rotate(-90deg);
        fill: green($color: #000000);
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    .dislike {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: all ease 0.18s;
      img {
        height: 18px;
        margin-right: 10px;
        transform: rotate(90deg);
        fill: green($color: #000000);
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .own-card-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    .content {
      display: flex;
      flex-wrap: wrap;
      max-width: 800px;
      font-weight: 500;
      font-size: 22px;
      padding: 10px;
      width: 100%;

      p {
        word-break: break-all;
      }
    }

    .detail {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding: 5px;
      padding-right: 50%;
      color: #8f9cac;
      .author {
        cursor: pointer;
        font-weight: 600;
        transition: all ease 0.18s;
        i {
          margin-right: 5px;
        }
        &:hover {
          transform: scale(1.05);
        }
      }
      .category {
        font-weight: 600;
        i {
          margin-right: 5px;
        }
      }
      .level {
        font-weight: 600;
        i {
          margin-right: 5px;
        }
      }
    }
  }
  .own-card-end {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .classy-btn {
      border-radius: 10px;
      color: white;
      font-weight: 600;
      background-color: #533ed6;
      font-size: 16px;
      border: none;
      transition: all ease 0.19s;
      &:hover {
        background-color: #3f30a1;
      }
    }
  }
}
</style>
