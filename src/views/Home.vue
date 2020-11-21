<template>
    <div class="home container-fluid">
        <div class="row" style="margin-top:-100px;">
            <div class="col-md-6 p-5 d-flex flex-column justify-content-center">
                <h1>Aklındaki düşünceyi yaz ve paylaş, sorunu sor</h1>
                <p>Her düşünceni paylaş ve diğer kullanıcılardan tepki al</p>
            </div>
            <div class="col-md-6">
                <img
                    class="img-fluid"
                    src="../assets/Saly-1.png"
                    alt="saly-resim"
                />
            </div>
        </div>
        <div class="row">
            <div class="container backgroundtt p-5 mb-4">
                <span class="desc">Soru Sormak istiyorsan, giriş yapmalısın!</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home {
    color: white;
    p {
        color: rgb(185, 185, 185);
        font-weight: 600;
        font-size: 22px;
    }
    h1 {
        font-size: 64px;
        margin-bottom: 75px;
    }
    .backgroundtt {
        background-color: #4158d0;
        background-image: linear-gradient(
            43deg,
            #4158d0 22%,
            #c850c0 52%,
            #ffcc70 89%
        );
        border-radius: 10px;
        .desc{
            font-size:24px;
            font-weight: 700;
        }
    }
}
</style>
