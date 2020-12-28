<template>
  <div class="template">
    <div class="desc">
      <h6>BEEANT Nedir?</h6>
      <div class="row" style="margin-bottom: 100px">
        <div class="p-5 d-flex flex-row justify-content-center">
          <div class="col-md-5">
            <img
              class="img-fluid"
              src="../assets/Saly-10.png"
              alt="saly-hakkinda-resim"
            />
          </div>
          <div class="text">
            <p>
              <strong>BEEANT</strong>, kategori ve zorluk seviyesi belirleyerek
              <i>dilediğiniz kadar</i> soru sorabileceğiniz bir platformdur.
              Aynı zamanda trend soruları inceleyebilir, tepki verebilir ve
              diğer insanlarla etkileşime geçebilirsiniz.
              <br />
              Üç bilgisayar mühendisliği öğrencisi tarafından ortak geliştirilen
              <strong>BEEANT</strong>, ismini çalışkanlıklarıyla bilinen arılar
              ve karıncalardan alır. <br />
              Sen de Google hesabın ile giriş yaparak <strong>BEEANT</strong>'in
              bir üyesi olabilir, dilersen aşağıda bulunan Twitter ve LinkedIn
              hesaplarımız üzerinden bizlerle iletişime geçebilirsin.
              <br />
              <strong>BE ANT</strong>
            </p>
            <img src="../assets/beeantlogo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="each">
        <p>Sezgi ALTAN</p>
        <div class="smedia">
          <a href="https://twitter.com/Szq_ii" target="_blank">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-32.png"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/sezgi-altan/" target="_blank">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-32.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="each">
        <p>Altay ŞİMŞEK</p>
        <div class="smedia">
          <a href="https://twitter.com/altitans" target="_blank">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-32.png"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/altaysimsek/" target="_blank">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-32.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="each">
        <p>M. Emrullah CİRİT</p>
        <div class="smedia">
          <a href="https://twitter.com/Iamemrullah" target="_blank">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-32.png"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-emrullah-cirit-32a3a2167/"
            target="_blank"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-32.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.template {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;
  color: #fff;
  h6 {
    font-size: 34px;
    margin-bottom: 10px;
    padding: 1rem;
  }
  p {
    text-align: center;
    font-size: 18px;
  }
  .img-hakkinda {
    width: 300px;
  }
  .desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 300px;
    p {
      padding: 2rem;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem 200px;
    background-color: #5f5f5f;
    color: #fff;
    .each {
      width: 33%;
    }
    .smedia {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      a {
        margin-right: 6px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
