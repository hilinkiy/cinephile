<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__imgs">
        <a href="#/">
          <img src="../assets/images/bxl_telegram.png" alt="" />
        </a>
        <a href="#/"
          ><img src="../assets/images/akar-icons_vk-fill.png" alt=""
        /></a>
        <a href="#/"
          ><img src="../assets/images/akar-icons_facebook-fill.png" alt=""
        /></a>
        <a href="#/"
          ><img src="../assets/images/akar-icons_instagram-fill.png" alt=""
        /></a>
        <a href="#/"><img src="../assets/images/bxl_tiktok.png" alt="" /></a>
        <a href="#/"
          ><img src="../assets/images/akar-icons_youtube-fill.png" alt=""
        /></a>
        <a href="#/"
          ><img src="../assets/images/akar-icons_twitter-fill.png" alt=""
        /></a>
        <a href="#/"
          ><img src="../assets/images/akar-icons_linkedin-box-fill.png" alt=""
        /></a>
      </div>
      <div class="footer__text">
        <p class="footer__descr">
          © 2022 CINEPHILE. Может содержать информацию, не предназначенную для
          несовершеннолетних
        </p>
        <p class="footer__descr">Данные получены с сайта themoviedb.org</p>
      </div>
      <div class="footer__proweb">
        <img src="../assets/images/proweb.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss">
.footer {
  padding: 30px 50px 80px 50px;

  &__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 80px;
  }

  &__descr {
    color: #a5a5a5;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  
  &__proweb {
    display: flex;
    justify-content: center;
  }
}

.footer__imgs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
}
</style>