<template>
  <div class="p-about">
    <div class="header">
      <div class="wrapper">
        <img class="title" src="~/assets/img/title-about.png" alt="img" />
      </div>

      <div class="g-light g-light1"></div>
      <div class="g-light g-light2"></div>
      <div class="g-light g-light3"></div>
    </div>

     //izzet
    <!-- <img
      class="beautify beautify5"
      src="~/assets/img/beautify5.png"
      alt="img"
    />
    <img
      class="beautify beautify6"
      src="~/assets/img/beautify6.png"
      alt="img"
    /> -->

    <div class="content wrapper">
      <div class="summit">
        <br><br>          <br><br><br>
        <div class="h2">
          

          <img src="~/assets/img/icon-logo.png" alt="logo" />
        
          <h2>User Security Summit</h2>
        </div>
        <h4>
          Unlock the future of Web3 User Security with us! We are diving into the core of the Web3 security stack to redefine 'Web3 user security' and foster collaboration between developers and users.

            ​Our goal? A safer, more trustworthy Web3 experience for all; not for the few...

​           This is your chance to be at the forefront of Web3 user security, alongside leading devs, Tier1 project teams, and lots of "degens" in 
            Hong Kong.  So we hope to see you there.
            <br>

            ​We look forward to hosting you!
        </h4>
      </div>

      <div class="summit">
        <div class="h2">
          <img src="~/assets/img/icon-logo.png" alt="logo" />
          <h2>GoPlus</h2>
        </div>
       


          <h4>
            GoPlus stands out as the Web3 user security data platform. It has developed a state-of-the-art, real-time, dynamic, and automated security detection environment. This comprehensive interface comprises of token detection, NFT detection, identification of malicious addresses, approval security APIs, and dApp contract security. GoPlus handles over 20 million data calls daily, establishing its robust presence in the field.
          </h4>
    
      </div>

      <!-- <div class="plan">
        <div class="item">
          <h3>Hacker House</h3>
          <h4>Palo Alto, Aug 27-30</h4>
          <p>
            The Goplus Hacker House is a four-day event with in-person guidance
            from core Starknet community members. It will take place in a hotel
            in Palo Alto. Application required.
          </p>
          <NuxtLink to="/">
            <span>Click here for more info</span>
            <img src="~/assets/img/icon-arrow1.png" alt="img" />
            <img src="~/assets/img/icon-arrow2.png" alt="img" />
          </NuxtLink>
        </div>
        <div class="item">
          <h3>Goplus Basecamp</h3>
          <h4>Palo Alto, Aug 27-30</h4>
          <p>
            We’re holding a first in-person session of Basecamp, Goplus’s
            flagship course taught by Starknet’s creators. Limited availability,
            in-person in Palo Alto. Application required.
          </p>
          <NuxtLink to="/">
            <span>Click here for more info</span>
            <img src="~/assets/img/icon-arrow1.png" alt="img" />
            <img src="~/assets/img/icon-arrow2.png" alt="img" />
          </NuxtLink>
        </div>
      </div> -->

      <!-- <div class="week">
        <h2>User Security Summit Week</h2>
        <Calendar></Calendar>
      </div> -->

      <div class="where">
        <h2>Where and when</h2>
        <div class="map">
          <div class="info">
            <h3>
              Hong Kong Convention and Exhibition Centre

            </h3>
            <h3>
              Monday, April 8 
            </h3>
            <a
              class="btn"
              href="https://shorturl.at/bvGO7"
              >Directions</a
            >
          </div>

          <img src="~/assets/img/map.png" alt="map" />
        </div>

        <div class="hotel">
          <img src="~/assets/img/place1.jpg" alt="img" />
          <img src="~/assets/img/place2.jpg" alt="img" />
          <h3>
          
            Date: April 8th, 2024
            <br>
            <br>

            Venue: Substage2, Hall3FG, Hong Kong Web3 Festival 2024
          </h3>
        </div>
      </div>
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

.p-about {
  position: relative;
  .beautify {
    position: absolute;
    z-index: 1;
    &.beautify5 {
      top: 0;
      left: 0;
      height: 442px;
      z-index: 0;
    }
    &.beautify6 {
      top: 162px;
      right: 0;
      height: 497px;
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
    margin-top: -140px;
    padding-bottom: 132px;

    .week {
      h2 {
        text-align: center;
        font-size: 80px;
        font-family: Letter;
        color: #ffffff;
        line-height: 90px;
        letter-spacing: 2px;
        margin: 150px 0 40px 0;
      }
    }

    .where {
      h2 {
        text-align: center;
        font-size: 80px;
        font-family: Letter;
        color: #ffffff;
        line-height: 90px;
        letter-spacing: 2px;
        margin: 150px 0 40px 0;
      }
      .map {
        display: flex;
        background: rgba($color: #0d0f17, $alpha: 0.88);
        border-radius: 30px;
        margin-bottom: 70px;
        .info {
          padding: 50px;
          h3 {
            font-size: 40px;
            font-family: Letter;
            font-weight: bold;
            color: #ffffff;
            line-height: 55px;
            margin-bottom: 16px;
          }
          p {
            font-size: 24px;
            font-family: Letter;
            font-weight: bold;
            color: #c8c8c8;
            line-height: 34px;
          }
          .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 60px;
            width: 232px;
            height: 60px;
            background: linear-gradient(270deg, #6fff90 0%, #8affd3 100%);
            border-radius: 30px;
            font-size: 19px;
            font-family: Aeonik-Bold, Aeonik;
            font-weight: bold;
            color: #0d0e0c;
          }
        }
        img {
          height: 497px;
          border-radius: 0px 30px 30px 0px;
        }
      }
      .hotel {
        display: flex;
        img {
          height: 223px;
          margin-right: 15px;
        }
        h3 {
          font-size: 40px;
          font-family: Letter;
          font-weight: bold;
          color: #ffffff;
          line-height: 55px;
          margin-left: 30px;
        }
      }
    }

    .plan {
      display: flex;
      .item {
        &:first-child {
          margin-right: 20px;
        }
        flex: 1;
        padding: 60px;
        background: rgba($color: #0d0f17, $alpha: 0.88);
        border-radius: 30px;
        h3 {
          font-size: 50px;
          font-family: Letter;
          font-weight: bold;
          color: #ffffff;
          line-height: 50px;
          margin-bottom: 20px;
        }
        h4 {
          font-size: 30px;
          font-family: Letter;
          font-weight: bold;
          color: #ffffff;
          line-height: 30px;
          margin-bottom: 25px;
        }
        p {
          font-size: 15px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #c8c8c8;
          line-height: 25px;
        }
        a {
          display: inline-flex;
          align-items: center;
          margin-top: 30px;
          span {
            font-size: 16px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #39e56f;
            line-height: 23px;
          }
          img {
            height: 24px;
            margin-left: 10px;
            &:nth-child(3) {
              display: none;
            }
          }
          &:hover {
            img:nth-child(2) {
              display: none;
            }
            img:nth-child(3) {
              display: block;
            }
          }
        }
      }
    }

    .summit {
      margin-bottom: 60px;
      .h2 {
        display: flex;
        align-items: center;
        margin-bottom: 23px;
        img {
          height: 36px;
          margin-right: 10px;
        }
        h2 {
          position: relative;
          top: 8px;
          font-size: 30px;
          font-family: Letter;
          font-weight: bold;
          color: #ffffff;
          line-height: 30px;
        }
      }
      p {
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #c8c8c8;
        line-height: 25px;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .p-about {
    .beautify {
      &.beautify5 {
        top: 0;
        left: 0;
        height: 242px;
      }
      &.beautify6 {
        top: 162px;
        right: 0;
        height: 297px;
      }
    }

    .header {
      .wrapper {
        height: 100%;
        .title {
          height: 100px;
        }
      }
    }

    .content {
      margin-top: -100px;
      padding: 0 40px 100px 40px;

      .week {
        h2 {
          font-size: 50px;
          line-height: 60px;
          letter-spacing: 1px;
          margin: 100px 0 30px 0;
        }
      }

      .where {
        h2 {
          font-size: 50px;
          line-height: 60px;
          letter-spacing: 1px;
          margin: 100px 0 30px 0;
        }
        .map {
          flex-direction: column;
          border-radius: 30px;
          margin-bottom: 70px;
          .info {
            padding: 60px;
            h3 {
              font-size: 30px;
              line-height: 1.5;
              margin-bottom: 16px;
            }
            p {
              font-size: 24px;
              line-height: 1.5;
            }
            .btn {
              margin-top: 30px;
              width: 292px;
              height: 80px;
              border-radius: 40px;
              font-size: 28px;
            }
          }
          img {
            height: 397px;
            border-radius: 30px;
          }
        }
        .hotel {
          flex-direction: column;
          img {
            object-fit: cover;
            height: 400px;
            margin-right: 0;
            margin-bottom: 30px;
          }
          h3 {
            font-size: 32px;
            line-height: 1.5;
            margin-left: 0;
          }
        }
      }

      .plan {
        flex-direction: column;
        .item {
          &:first-child {
            margin-right: 0;
            margin-bottom: 20px;
          }
          padding: 40px;
          border-radius: 30px;
          h3 {
            font-size: 44px;
            line-height: 1.5;
            margin-bottom: 10px;
          }
          h4 {
            font-size: 32px;
            line-height: 1.5;
            margin-bottom: 10px;
          }
          p {
            font-size: 28px;
            line-height: 1.5;
          }
          a {
            margin-top: 30px;
            span {
              font-size: 28px;
              line-height: 1;
            }
            img {
              height: 48px;
              margin-left: 20px;
            }
          }
        }
      }

      .summit {
        margin-bottom: 60px;
        .h2 {
          margin-bottom: 23px;
          img {
            height: 56px;
            margin-right: 20px;
          }
          h2 {
            top: 10px;
            font-size: 40px;
            line-height: 1;
          }
        }
        p {
          font-size: 24px;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
