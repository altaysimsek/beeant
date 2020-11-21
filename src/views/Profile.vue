<template>
    <div class="container-fluid mt-5">
        <loading v-if="loadingState"></loading>
        <div class="row">
            <div class="col-md-4">
                <user-card
                    :userDetail="pagetUser"
                ></user-card>
            </div>
            <div class="col-md-8">
                <div class="row"></div>
                <div class="row d-flex flex-column" style="width:100%;">
                    <div v-for="item in getProfileQuesiton" :key="item.id">
                        <app-soru-item :list="item"></app-soru-item>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserCard from "../components/profile/UserCard.vue";
import Loading from "../components/shared/Loading.vue";
import appSoruItem from "../components/sorular/Soru-item.vue";

export default {
    components: {
        UserCard,
        Loading,
        appSoruItem,
    },
    data(){
        return({
            profilDetail:null,
        })
    },
    computed: {
        loadingState() {
            return this.$store.getters.getLoading;
        },
        pagetUser() {
            return this.$store.getters.getWantedUser;
        },
        getProfileQuesiton() {
            return this.$store.getters["getSpecificQuestionfromUserId"](
                this.$route.params.id
                    ? this.$route.params.id
                    : this.$store.getters.getCurrentUser.uid
            );
        },
    },
    async created() {
        
        await this.$store.dispatch("getUpdateQuestions");
        if (this.$route.params.id) {
            await this.$store.dispatch("selectUser", this.$route.params.id);
            const wantedUser = this.$store.getters.getWantedUser;
            this.$store.commit("setWantedUser", wantedUser.userData);
            
        } else {
            this.$store.commit(
                "setWantedUser",
                this.$store.getters.getCurrentUser
            );
            
        }
    },
};
</script>

<style lang="scss" scoped>
.container-fluid {
    color: white;
}
</style>
