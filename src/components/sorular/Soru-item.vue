<template>
  <div class="own-card">
    <div class="likey">
      <span class="like" @click="sendLike('likes')"
        ><img src="../../assets/icons/like.svg" alt="like-icon" />
        {{ list.data.questionData.likes.length }}</span
      >
      <span class="dislike" @click="sendLike('dislikes')"
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
        <router-link :to="`/profile/${list.data.questionData.author}`"
          ><span class="author"
            ><i class="fas fa-at"></i
            >{{ list.data.questionData.authorName }}</span
          ></router-link
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
      <router-link :to="`/sorular/${list.id}`"
        ><button class="classy-btn">Devamını oku!</button></router-link
      >
    </div>
  </div>
</template>

<script>
import { likeOrDislikeQuesiton } from "@/firebase/utils";
import Vue from "vue";
export default {
  props: ["list"],
  methods: {
    ToText(HTML) {
      var input = HTML;
      return input
        .slice(0, 120 || input.length)
        .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "")
        .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "")
        .replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});/ig, "")
    },
    sendLike(state) {
      const user = this.$store.getters.getCurrentUser;
      if (!user) {
        Vue.$toast.open({
          message: "Önce giriş yapmalısın.",
          type: "error",
          // all of other options may go here
        });
        return;
      }
      likeOrDislikeQuesiton(this.list.id, state, user.uid);
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
        filter: brightness(150%);
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
        filter: brightness(150%);
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
        color: white;
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
          filter: brightness(200%);
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
      padding: 0.5rem;
      border: none;
      transition: all ease 0.19s;
      &:hover {
        background-color: #3f30a1;
        color: #fff;
      }
    }
  }
}
</style>
