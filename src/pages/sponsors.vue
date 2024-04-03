<template>
  <div class="p-sponsors">
    <div class="header">
      <div class="wrapper">
        <img class="title" src="~/assets/img/title-sponsors.png" alt="img" />
        <p>
          User Security Summit is made possible thanks to our great partners and
          sponsors
        </p>
      </div>

      <div class="g-light g-light1"></div>
      <div class="g-light g-light2"></div>
      <div class="g-light g-light3"></div>
    </div>

    <!-- <img
      class="beautify beautify7"
      src="~/assets/img/beautify7.png"
      alt="img"
    />
    <img
      class="beautify beautify8"
      src="~/assets/img/beautify8.png"
      alt="img"
    /> -->

    <div class="content wrapper">
      <section class="section">
        <h2>Thanks to</h2>
        <div class="list gold">
          <div>
         

            <img
              class="gold-img kekkai "
              src="~/assets/img/kekkai.jpg"
              alt="img"
            />
            <br>
            <br>
            <br>
            <img
              class="gold-img"
              src="~/assets/img/Quanstamp.jpg"
              alt="img"
            />
        
          </div>
        </div>
      </section>



      <!-- <section class="section">
                <h2>Bronze</h2>
                <div class="list">
                    <NuxtLink to="/" class="item">
                        <img
                            src="~/assets/img/sponsor-coinbase.png"
                            alt="img"
                        />
                    </NuxtLink>
                    <NuxtLink to="/" class="item">
                        <img src="~/assets/img/sponsor-nftscan.png" alt="img" />
                    </NuxtLink>
                    <NuxtLink to="/" class="item">
                        <img src="~/assets/img/sponsor-mask.png" alt="img" />
                    </NuxtLink>
                    <NuxtLink to="/" class="item">
                        <img src="~/assets/img/sponsor-onto.png" alt="img" />
                    </NuxtLink>
                    <NuxtLink to="/" class="item">
                        <img
                            src="~/assets/img/sponsor-coinbase.png"
                            alt="img"
                        />
                    </NuxtLink>
                    <NuxtLink to="/" class="item">
                        <img src="~/assets/img/sponsor-nftscan.png" alt="img" />
                    </NuxtLink>
                    <NuxtLink to="/" class="item">
                        <img src="~/assets/img/sponsor-mask.png" alt="img" />
                    </NuxtLink>
                    <NuxtLink to="/" class="item">
                        <img src="~/assets/img/sponsor-onto.png" alt="img" />
                    </NuxtLink>
                </div>
            </section> -->
    </div>

    <div class="g-light g-light4"></div>
    <div class="g-light g-light5"></div>
    <div class="g-light g-light6"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.g-light {
  position: absolute;
  z-index: 0;
  animation: blink 3s infinite;
  &.g-light1 {
    left: 0;
    top: 400px;
    width: 99px;
    height: 99px;
    background: linear-gradient(180deg, #00ffff 1%, #09ff94 50%, #12ff6d 100%);
    filter: blur(60px);
    animation-delay: 1s;
  }
  &.g-light2 {
    right: 500px;
    top: 240px;
    width: 58px;
    height: 58px;
    background: rgba($color: #12ff64, $alpha: 0.38);
    filter: blur(24px);
    animation-delay: 2s;
  }
  &.g-light3 {
    right: 0;
    top: 200px;
    width: 58px;
    height: 96px;
    background: linear-gradient(180deg, #00ffff 1%, #09ff94 50%, #12ff6d 100%);
    filter: blur(50px);
    animation-delay: 3s;
  }
  &.g-light4 {
    left: 0;
    bottom: 0;
    width: 48px;
    height: 96px;
    background: rgba($color: #12ff64, $alpha: 0.65);
    filter: blur(33px);
    animation-delay: 1s;
  }
  &.g-light5 {
    bottom: -150px;
    left: 50%;
    transform: translate(-50%);
    width: 179px;
    height: 179px;
    background: rgba($color: #12ff64, $alpha: 0.33);
    filter: blur(46px);
    animation-delay: 2s;
  }
  &.g-light6 {
    bottom: 168px;
    right: -40px;
    transform: translate(-50%);
    width: 58px;
    height: 96px;
    background: linear-gradient(180deg, #00ffff 1%, #09ff94 50%, #12ff6d 100%);
    filter: blur(50px);
    animation-delay: 3s;
  }
}

.p-sponsors {
  position: relative;
  .beautify {
    position: absolute;
    z-index: 1;
    &.beautify7 {
      top: 0;
      left: 0;
      height: 498px;
      z-index: 0;
    }
    &.beautify8 {
      top: 118px;
      right: 0;
      height: 572.5px;
      z-index: 0;
    }
  }

  .header {

      //izzet
  background-image: url('~/assets/img/backgroundimage.png');
  background-size: cover; // Cover the entire space
  background-position: center; // Center the background image
  background-repeat: no-repeat; // Do not repeat the image

    position: relative;
    width: 100%;
    height: 640px;
   // background: linear-gradient(360deg, #111420 0%, #1f2748 42%, #008045 100%);
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      .title {
        height: 100px;
      }
      p {
        margin-top: 20px;
        font-size: 14px;
        font-family: Letter;
        font-weight: bold;
        color: #ffffff;
        line-height: 20px;
      }
    }
  }

  .content {
    position: relative;
    z-index: 1;
    margin-top: -174px;
    padding-bottom: 178px;

    .section {
      h2 {
        text-align: center;
        font-size: 60px;
        font-family: Letter;
        font-weight: bold;
        color: #ffffff;
        line-height: 60px;
        margin-top: 80px;
        margin-bottom: 40px;
      }
      .list {
        &.gold {
          justify-content: center;
          .gold-img {
            height: 73px;
          }
        }
        display: flex;
        // flex-wrap: wrap;
        justify-content: space-between;
        padding: 60px 105px;
        background: rgba($color: #0d0f17, $alpha: 0.88);
        border-radius: 30px;
        flex-wrap: wrap;

        .item {
          // margin-right: 10px;
          // margin-bottom: 20px;
          &:nth-child(2n) {
            margin-top: 40px;
          }
          &:nth-last-child(-n + 4) {
            margin-bottom: 0;
          }
          img {
            height: 90px;
          }
        }
      }
 
    }
  }
}

@media screen and (max-width: 750px) {
  .p-sponsors {
    .beautify {
      &.beautify7 {
        top: 0;
        left: 0;
        height: 298px;
      }
      &.beautify8 {
        top: 118px;
        right: 0;
        height: 272.5px;
      }
    }

    .header {
      .wrapper {
        height: 100%;
        padding: 0 40px;
        .title {
          height: 100px;
        }
        p {
          margin-top: 30px;
          font-size: 24px;
          line-height: 1.5;
          text-align: center;
        }
      }
    }

    .content {
      margin-top: -100px;
      padding: 0 40px 100px 40px;

      .section {
        h2 {
          font-size: 60px;
          line-height: 60px;
          margin-top: 80px;
          margin-bottom: 40px;
        }
        .list {
          &.gold {
            .gold-img {
              height: 53px;
            }
          }
          padding: 60px;
          .item {
            flex: 1;
            margin-right: 0;
            margin-bottom: 20px;
            &:nth-last-child(-n + 4) {
              margin-bottom: 20px;
            }
            &:nth-last-child(-n + 2) {
              margin-bottom: 0;
            }
            img {
              height: 90px;
            }
          }
        }

      }
    }
  }
}
</style>
