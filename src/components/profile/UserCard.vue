<template>
    <div class="user-card">
        <div class="image">
            <img style="height:125px;width:125px;" :src="userDetail.photoUrl" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L18.5,160C36.9,160,74,160,111,154.7C147.7,149,185,139,222,122.7C258.5,107,295,85,332,90.7C369.2,96,406,128,443,165.3C480,203,517,245,554,229.3C590.8,213,628,139,665,133.3C701.5,128,738,192,775,202.7C812.3,213,849,171,886,138.7C923.1,107,960,85,997,96C1033.8,107,1071,149,1108,165.3C1144.6,181,1182,171,1218,154.7C1255.4,139,1292,117,1329,133.3C1366.2,149,1403,203,1422,229.3L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
        <div class="details">
            <span class="post"><span>Toplam Gönderi 📨</span><span class="counter"> {{totalS.totalQuestion}}</span></span>
            <span class="likey"><span>Toplam Beğeni 👍🏼</span><span class="counter">{{totalS.totalLike}}</span></span>
            <span class="dislike"><span>Toplam Dislike 👎🏼 </span><span class="counter">{{totalS.totalDislike}}</span></span>
        </div>
    </div>
</template>

<script>
export default {
    props:['userDetail'],
    data(){
        return({
            totalS:null,
        })
    },
    computed:{
        getProfileQuesiton() {
            return this.$store.getters["getSpecificQuestionfromUserId"](
                this.$route.params.id
                    ? this.$route.params.id
                    : this.$store.getters.getCurrentUser.uid
            );
        },
        sendProfileDetail() {
            const customDetail = {
                totalLike: 0,
                totalDislike: 0,
                totalQuestion: 0,
            };
            customDetail.totalQuestion = this.getProfileQuesiton.length;
            let totalLike = 0;
            let totalDis = 0;
            this.getProfileQuesiton.forEach((item) => {
                totalLike += item.data.questionData.likes.length;
            });
            this.getProfileQuesiton.forEach((item) => {
                totalDis += item.data.questionData.dislikes.length;
            });
            customDetail.totalLike = totalLike;
            customDetail.totalDislike = totalDis;
            
            return customDetail
        },
        
    },
    methods:{
        
    },
    created(){
        
        this.totalS = this.sendProfileDetail;
    }
    
};
</script>

<style lang="scss" scoped>
.user-card {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    margin:20px;
    color: black;
    .image{
        background-color:#0099FF;
        border-radius: 10px 10px 0px 0px ;
        padding:20px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            border-radius: 100%;
            border: 5px solid #0077c7;
        }
    }
    .details{
        padding:20px;
        font-size:16px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;

        .post{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #0077c7;
        }
        .likey{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: darkgreen;
        }
        .dislike{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: darkred;
        }
        .counter{
            font-size: 24px;
        }
    }
}
</style>
