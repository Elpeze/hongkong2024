<template>
  <div class="p-index">
    <div class="header">
      <div class="wrapper">




        <video
          v-if="isDesktop"
          playsinline
          muted
          autoplay
          src="~/assets/img/home-banner-video.mp4"
        ></video>

        <div class="detail">
          
         
          
          <img class="gold-img" src="~/assets/img/title-home.png" alt="img" />

          <img src="~/assets/img/web3.png" alt="img" style="max-width: 50%; height: auto;">


        
        
       

          <h4>Hong Kong Convention and Exhibition Centre </h4>
          
          <h4>Monday, April 8</h4>
          <!-- <h4>August 31st, 2023</h4> -->
     
          <a href="/agenda"><div class="btn">View Agenda</div></a>
        </div>

        <img
          class="m-home-header"
          src="~/assets/img/m-home-header.png"
          alt="img"
        />

        <div class="safe">
          <img
            class="line"
            src="~/assets/img/home-banner-line.png"
            alt="line"
          />
        </div>
      </div>

      <div class="g-light g-light1"></div>
      <div class="g-light g-light2"></div>
      <div class="g-light g-light3"></div>
    </div>



    <div class="content">
      <!-- <section class="section week">
        <div class="wrapper">
          <h2>User Security Summit Week</h2>
          <Calendar></Calendar>
        </div>
      </section> -->

      <section class="section speakers">
        <div class="wrapper">
          <h2>Speakers</h2>
          <div class="list">
            <div class="item" v-for="item in speakers">
              <img :src="getAssetURL(item.img)" alt="avatar" />
              <h3>{{ item.name }}</h3>
              <p>{{ item.position }}</p>
            </div>
          </div>
          <NuxtLink to="/speakers" class="btn">See All Speakers</NuxtLink>
        </div>
      </section>

      <section class="section tickets" id="tickets">
        <div class="wrapper">
          <h2>Stay Safe With GoPlus</h2>
          <div class="list">
            <div class="item">
              <div class="base">
                <div class="price">
                 
                </div>
                <!-- <div class="student">
                  <div class="label">Student Early Bird</div>
                  <div class="total">$75</div>
                </div> -->
              </div>
              <div class="btn" @click="buyTicket">
                <!-- <span class="g-icon-loader"></span> -->
                <span>Apply To Event</span>
              </div>
              <div class="miniBtn" @click="buyTicket">
               
              </div>
            </div>

            <!-- <div class="item">
              <div class="base">
                <div class="price">
                  <div class="label">Standard</div>
                  <div class="total">$120</div>
                </div>
                <div class="student">
                  <div class="label">Student</div>
                  <div class="total">$75</div>
                </div>
              </div>
              <div class="btn" @click="buyTicket">Buy Ticket</div>
            </div> -->
          </div>
        </div>
      </section>
    </div>

    <div class="g-light g-light4"></div>
    <div class="g-light g-light5"></div>
    <div class="g-light g-light6"></div>
  </div>
</template>

<script setup lang="ts">
declare const window: any; // 类型“Window & typeof globalThis”上不存在属性
const { isDesktop } = useDevice();

const speakers = reactive([
{
    img: "marcus.jpg",
    name: "Marcus ",
    position: "APAC of Scroll",
  },
  

  {
    img: "anjo.jpg",
    name: "Anjo",
    position: "VP Partnership, GSR",
  },
  {
    img: "speaker3.jpg",
    name: "Eskil TSU",
    position: "Co-Founder of GoPlus",
  },
  {
    img: "albert.jpg",
    name: "Albert Lo ",
    position: "Co-Founder, HKVAC",
  },

  {
    img: "vivi.jpg",
    name: "Vivi",
    position: "Head of Research, TON",
  },
  {
    img: "jennifer.jpg",
    name: "Jennifer",
    position: "Head of Ecosystem, Manta",
  },
  {
    img: "eric.jpg",
    name: "Ir Eric Chan",
    position: "Chief Public Officer, CyberPort",
  },
  {
    img: "isabel.jpg",
    name: "Isabel",
    position: "CEO, BitTrace",
  },
]);

window.unlockProtocolConfig = {
  icon: "",
  locks: {
    "0xee92ff1a8e89c3611bd351168f8890ad21315382": {
      network: 56,
      skipRecipient: true,
    },
  },
  pessimistic: true,
  skipRecipient: true,
};
(function (d, s) {
  var js: any = d.createElement(s),
    sc: any = d.getElementsByTagName(s)[0];
  js.src = "https://paywall.unlock-protocol.com/static/unlock.latest.min.js";
  sc.parentNode.insertBefore(js, sc);
})(document, "script");

window.addEventListener("unlockProtocol.status", function (event: any) {
  // We hide all .unlock-content elements
});

window.addEventListener("unlockProtocol.authenticated", function (event: any) {
  // event.detail.addresss includes the address of the current user, when known
});

window.addEventListener(
  "unlockProtocol.transactionSent",
  function (event: any) {
    // event.detail.hash includes the hash of the transaction sent
  }
);

const buyTicket = () => {
  window.open("https://lu.ma/hkweb3festival2024_goplus");
};
</script>



<style lang="scss">
.p-index {
  .g-light {
    position: absolute;
    z-index: 0;
    animation: blink 3s infinite;
    &.g-light1 {
      left: 0;
      top: 0px;
      width: 99px;
      height: 99px;
      background: linear-gradient(
        180deg,
        #00ffff 1%,
        #09ff94 50%,
        #12ff6d 100%
      );
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
      background: linear-gradient(
        180deg,
        #00ffff 1%,
        #09ff94 50%,
        #12ff6d 100%
      );
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
      background: linear-gradient(
        180deg,
        #00ffff 1%,
        #09ff94 50%,
        #12ff6d 100%
      );
      filter: blur(50px);
      animation-delay: 3s;
    }
  }
}

.p-index {
  position: relative;
  overflow: hidden;

  .header {

  //izzet
  background-image: url('~/assets/img/backgroundimage.png');
  background-size: cover; // Cover the entire space
  background-position: center; // Center the background image
  background-repeat: no-repeat; // Do not repeat the image




    position: relative;
    width: 100%;
    height: 640px;
   // background: linear-gradient(90deg, #252c50 0%, #252c50 50%, #008045 100%);
    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      content: "";
      height: 324.5px;
      background: linear-gradient(rgba(17, 20, 32, 0) 0%, #111420 100%);
    }
    .wrapper {


      .summit{
        width: 496px;
        height: 158px;
        font-family: Letter;
        font-size: 60px;
        color: #FFFFFF;
        line-height: 79px;
        text-align: center;
        font-style: normal;
        text-transform: uppercase;
      }





      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding-top: 96px;
      video {
        position: absolute;
        left: -100px;
        width: 365px;
        height: 406px;
        mix-blend-mode: lighten;
      }

      .m-home-header {
        display: none;
      }



      .detail {
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 160px;
          margin-bottom: 30px;
        }
        h4 {
          font-size: 21px;
          font-family: Letter;
          font-weight: bold;
          color: #ffffff;
          line-height: 20px;
          margin-bottom: 11px;
          &:nth-child(3) {
            margin-bottom: 0;
          }
        }
        p {
          margin-top: 15.5px;
          text-align: center;
          width: 450px;
          font-size: 12px;
          font-family: Letter;
          font-weight: bold;
          color: #ffffff;
          line-height: 23px;
        }
        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 311px;
          height: 60px;
          background: linear-gradient(270deg, #6fff90 0%, #8affd3 100%);
          border-radius: 30px;
          cursor: pointer;
          font-size: 19px;
          font-family: Aeonik-Bold, Aeonik;
          font-weight: bold;
          color: #0d0e0c;
          margin-top: 36px;
        }
      }

      .safe {
        position: absolute;
        z-index: 0;
        right: -110px;
        top: 220px;
        .line {
          height: 373px;
        }
        @keyframes move {
          0% {
            top: -550px;
          }
          100% {
            top: -50px;
          }
        }
        .img {
          position: absolute;
          right: 80px;
          height: 273px;
          animation: move 1s forwards;
        }
      }
    }
  }

  .content {




    position: relative;
    z-index: 1;
    padding-bottom: 128px;

    .section {
      position: relative;
      margin-bottom: 20px;
      h2 {
        text-align: center;
        font-size: 60px;
        font-family: Letter;
        font-weight: bold;
        color: #ffffff;
        line-height: 60px;
        margin-top: 80px;
        margin-bottom: 30px;
      }
    }

    .week {
    }

    .speakers {
      &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        content: "";
        width: 117px;
        height: 215px;
        background-image: url(../assets/img/circle-left.png);
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;
      }
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        display: block;
        content: "";
        width: 315px;
        height: 452px;
        background-image: url(../assets/img/circle-right.png);
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        margin-right: -20px;
        .item {
          width: calc(25% - 20px);
          margin-right: 20px;
          img {
            width: 100%;
            border-radius: 20px;
          }
          h3 {
            font-size: 23px;
            font-family: Aeonik-Bold, Aeonik;
            font-weight: bold;
            color: #ffffff;
            line-height: 28px;
            margin-top: 20px;
            margin-bottom: 9px;
          }
          p {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #c8c8c8;
            line-height: 20px;
          }
        }
      }
      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 249px;
        height: 53px;
        border-radius: 27px;
        border: 1px solid #6bff8d;
        cursor: pointer;
        font-size: 16px;
        font-family: Aeonik-Bold, Aeonik;
        font-weight: bold;
        color: #4fffa7;
        margin: 50px auto 20px auto;
      }
    }

    .tickets {
      margin-top: 120px;
      .list {
        display: flex;
        .item {
          &:first-child {
            margin-right: 10px;
          }
          flex: 1;
          // border: 1px solid #343434;

          .base {
            padding: 20px 35px;
            .price {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 17px 0;
              // border-bottom: 1px solid #383838;
              .label {
                font-size: 27px;
                font-family: Aeonik-Bold, Aeonik;
                font-weight: bold;
                color: #ffffff;
                line-height: 33px;
              }
              .total {
                font-size: 32px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #00ff8c;
                line-height: 33px;
              }
            }
            .student {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 17px 0;
              .label {
                font-size: 16px;
                font-family: Aeonik-Regular, Aeonik;
                font-weight: 400;
                color: #ffffff;
                line-height: 24px;
              }
              .total {
                font-size: 23px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #777777;
                line-height: 24px;
              }
            }
          }

          .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 70px;
            background: #41ff9e;
            cursor: pointer;
            font-size: 18px;
            font-family: Aeonik-Bold, Aeonik;
            font-weight: bold;
            color: #000000;
            width: 30%;
            margin: auto;
            border-radius: 60px;
          }
          .miniBtn {
            margin-top: 25px;
            text-align: center;
            cursor: pointer;
            img {
              width: 10px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .p-index {
    .header {

      background-image: url('~/assets/img/backgroundimage.png');
      background-size: cover; // Cover the entire space
      background-position: center; // Center the background image
      background-repeat: no-repeat; // Do not repeat the image




      height: auto;
      //izzet
      // background: linear-gradient(
      //   360deg,
      //   #1f2748 0%,
      //   #1c223f 33%,
      //   #1c233f 62%,
      //   #008045 100%
      // );
      &:after {
        height: 330px;
      }
      .wrapper {
        flex-direction: column;
        padding-top: 256px;
        video {
          display: none;
        }

        .detail {
          padding: 0 40px;
          img {
            height: 164px;
            margin-bottom: 70px;
          }
          h4 {
            font-size: 28px;
            line-height: 28px;
            margin-bottom: 20px;
            &:nth-child(3) {
              margin-bottom: 0;
            }
          }
          p {
            margin-top: 29px;
            width: auto;
            font-size: 22px;
            line-height: 31px;
          }
          .btn {
            width: 440px;
            height: 84px;
            border-radius: 42px;
            font-size: 26px;
            margin-top: 54px;
          }
        }

        .m-home-header {
          position: relative;
          left: -40px;
          height: 484px;
          margin-top: 80px;
          margin-bottom: 100px;
          display: block;
        }

        .safe {
          display: none;
        }
      }
    }

    .content {
      padding: 0 40px 100px 40px;
      .section {
        margin-bottom: 0;
        h2 {
          font-size: 60px;
          line-height: 72px;
          margin-top: 100px;
          margin-bottom: 60px;
        }
      }

      .speakers {
        &::before {
          display: none;
        }
        &::after {
          right: -40px;
          top: 80%;
          width: 315px;
          height: 452px;
        }
        .list {
          margin-right: -24px;
          .item {
            width: calc(50% - 24px);
            margin-right: 24px;
            margin-bottom: 40px;
            img {
              border-radius: 24px;
            }
            h3 {
              font-size: 32px;
              line-height: 38px;
              margin-top: 30px;
              margin-bottom: 14px;
            }
            p {
              font-size: 24px;
              line-height: 33px;
            }
          }
        }
        .btn {
          width: 440px;
          height: 80px;
          border-radius: 53px;
          font-size: 28px;
          margin: 50px auto 0 auto;
        }
      }

      .tickets {
        margin-top: 0;
        .list {
          flex-direction: column;
          .item {
            &:first-child {
              margin-right: 0;
              margin-bottom: 40px;
            }
            .base {
              padding: 30px 60px;
              .price {
                padding: 30px 0;
                .label {
                  font-size: 36px;
                  line-height: 43px;
                }
                .total {
                  font-size: 48px;
                  line-height: 43px;
                }
              }
              .student {
                padding: 30px 0;
                .label {
                  font-size: 28px;
                  line-height: 48px;
                }
                .total {
                  font-size: 36px;
                  line-height: 48px;
                }
              }
            }

            .btn {
              height: 100px;
              font-size: 32px;
            }
          }
        }
      }
    }
  }
}
</style>


