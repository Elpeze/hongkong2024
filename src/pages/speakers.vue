<template>
  <div class="p-speakers">
    <div class="header">
      <div class="wrapper">
        <img class="title" src="~/assets/img/title-speakers.png" alt="img" />
      </div>

      <div class="g-light g-light1"></div>
      <div class="g-light g-light2"></div>
      <div class="g-light g-light3"></div>
    </div>

    <img
      class="beautify beautify1"
      src="~/assets/img/beautify1.png"
      alt="img"
    />
    <img
      class="beautify beautify2"
      src="~/assets/img/beautify2.png"
      alt="img"
    />

    <div class="content wrapper">
      <div class="search">
        <img src="~/assets/img/icon-search.png" alt="icon" />
        <input type="text" placeholder="Search Speakers" v-model="keyword" />
      </div>

      <TransitionSlide group class="list">
        <div class="item" v-for="item in list">
          <img :src="getAssetURL(item.img)" alt="avatar" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.position }}</p>
        </div>
      </TransitionSlide>
    </div>

    <div class="g-light g-light4"></div>
    <div class="g-light g-light5"></div>
  </div>
</template>

<script setup lang="ts">
const speakers = reactive([
{
    img: "isabel.jpg",
    name: "Isabel",
    position: "CEO, BitTrace",
  },
  {
    img: "kenzhang.jpg",
    name: "Ken Zhang",
    position: "Head of Security, Greater China",
  },
  {
    img: "stan.jpg",
    name: "Stan",
    position: "APAC BD & Partnership, GoPlus ",
  },
  {
    img: "samuel.jpg",
    name: "Samuel Lok",
    position: "Head of Compliance, HashKey",
  },
  {
    img: "speaker3.jpg",
    name: "Eskil",
    position: "Co-founder, GoPlus",
  },
  {
    img: "albert.jpg",
    name: "Albert Lo",
    position:
      "Co-Founder, HKVAC",
  },
  {
    img: "mike.jpg",
    name: "Mike Mu",
    position: "Co-Founder, Undefined Labs",
  },
  {
    img: "danny.jpeg",
    name: "Danny",
    position: "Founder of KEKKAI",
  },

  {
    img: "jonathan.jpg",
    name: "Jonathan",
    position: "Head of BD and Partnership, The Tie",
  },
  {
    img: "anjo.jpg",
    name: "Anjo",
    position: "VP Partnership, GSR",
  },
  {
    img: "marcus.jpg",
    name: "Marcus",
    position: "APAC of Scroll",
  },

  {
    img: "michael.jpg",
    name: "Michael Heinrich ",
    position: "Founder & CEO, 0G",
  },

  {
    img: "jennifer.jpg",
    name: "Jennifer",
    position: "Head of Ecosystem, Manta",
  },
  {
    img: "vivi.jpg",
    name: "Vivi",
    position: "Head of Research, TON",
  },
  {
    img: "artela.jpg",
    name: "CP ",
    position: "CTO, Artela",
  },

  {
    img: "martin.jpg",
    name: "Martin ",
    position: "CEO, ByteHunter",
  },
  {
    img: "eric.jpg",
    name: "Ir Eric Chan",
    position: "Chief Public Officer, CyberPort",
  },
  {
    img: "cecilia.jpg",
    name: "Cecilia",
    position: "SCIO, Mask Eco Fund & Formless Capital",
  },
  {
    img: "sam.jpg",
    name: "Sam",
    position: "AI Advisor, GoPlus",
  },
  {
    img: "ethan.jpg",
    name: "Ethan",
    position: "Co-founder, Myshell",
   },
  {
    img: "jackson.jpg",
    name: "Jackson",
    position: "Founder, 0xScope",
  },
  

  {
    img: "wang.jpg",
    name: "Wang Meng",
    position: "CTO, SafeHeron",
  },
  {
    img: "jordan.jpg",
    name: "Jordan L",
    position: "Co-founder, UXUY",
  },

]);
const keyword = ref("");
const list = computed(() => {
  return speakers.filter((item) => {
    return (
      item.name.toLocaleLowerCase().indexOf(keyword.value.toLocaleLowerCase()) >
      -1
    );
  });
});
</script>

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
}

.p-speakers {
  position: relative;
  .beautify {
    position: absolute;
    z-index: 1;
    &.beautify1 {
      top: 346px;
      left: 0;
      height: 452px;
      z-index: 0;
    }
    &.beautify2 {
      top: 120px;
      right: 0;
      height: 452px;
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
  //  background: linear-gradient(360deg, #111420 0%, #1f2748 42%, #008045 100%);

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
    .search {
      display: flex;
      align-items: center;
      padding: 0 30px;
      height: 64px;
      background: rgba($color: #0d0f17, $alpha: 0.88);
      border-radius: 37px;
      margin-bottom: 40px;
      img {
        height: 21px;
        margin-right: 12px;
      }
      input {
        flex: 1;
        height: 64px;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        font-family: Aeonik-Regular, Aeonik;
        font-weight: 400;
        color: #ffffff;
        &::placeholder {
          font-size: 16px;
          font-family: Aeonik-Regular, Aeonik;
          font-weight: 400;
          color: #ffffff;
        }
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      margin-right: -20px;
      .item {
        width: calc(25% - 20px);
        margin-right: 20px;
        margin-bottom: 40px;
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
  }
}

@media screen and (max-width: 750px) {
  .p-speakers {
    .beautify {
      &.beautify1 {
        top: 246px;
        left: 0;
        height: 202px;
      }
      &.beautify2 {
        top: 120px;
        right: 0;
        height: 234px;
      }
    }

    .header {
      .wrapper {
        .title {
          height: 100px;
        }
      }
    }

    .content {
      margin-top: -100px;
      padding: 0 40px 100px 40px;
      .search {
        padding: 0 40px;
        height: 94px;
        border-radius: 66px;
        margin-bottom: 40px;
        img {
          height: 34px;
          margin-right: 20px;
        }
        input {
          height: 100%;
          font-size: 26px;
          &::placeholder {
            font-size: 26px;
          }
        }
      }
      .list {
        margin-right: -20px;
        .item {
          width: calc(50% - 20px);
          margin-right: 20px;
          margin-bottom: 40px;
          img {
            width: 100%;
            border-radius: 20px;
          }
          h3 {
            font-size: 32px;
            line-height: 1.5;
            margin-top: 20px;
            margin-bottom: 14px;
          }
          p {
            font-size: 24px;
            line-height: 1.5;
          }
        }
      }
    }
  }
}
</style>
