<template>
  <div class="p-agenda">
    <div class="header">
      <div class="wrapper">
        <img class="title" src="~/assets/img/title-agenda.png" alt="img" />

        <p style="font-size: 24px;">Date: April 8th, 2024</p>
        <p style="font-size: 24px;">Venue: Substage2, Hall3FG, Hong Kong Web3 Festival 2024</p>
        <br>

        <p>More talks and surprises coming soon</p>
      </div>

      <div class="g-light g-light1"></div>
      <div class="g-light g-light2"></div>
      <div class="g-light g-light3"></div>
    </div>

    <!-- <img
      class="beautify beautify3"
      src="~/assets/img/beautify3.png"
      alt="img"
    />
    <img
      class="beautify beautify4"
      src="~/assets/img/home-banner-img.png"
      alt="img"
    /> -->

    <div class="content wrapper">
      <div class="list" v-for="(item, index) in agendaList" :key="index">
        <h1 class="title" v-html="item.title"></h1>
        <div
          class="item"
          v-for="(rowItem, rowIndex) in item.topicsList"
          :key="rowIndex"
        >
          <div class="base">
            <h3 v-html="rowItem.topics"></h3>
            <div class="time">{{ rowItem.time }}</div>
          </div>
          <div class="speakers">
            <div
              class="speaker"
              v-for="(characterItem, characterIndex) in rowItem.speakerList"
              @click="toggleDialog(index, rowIndex, characterIndex)"
              :key="characterIndex"
            >
              <img
                :src="getAssetURL(characterItem.img)"
                alt="avatar"
                v-if="characterItem.img"
              />
              <div class="info">
                <h4>{{ characterItem.name }}</h4>
                <p>{{ characterItem.introduce }}</p>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>

    <div class="g-light g-light4"></div>
    <div class="g-light g-light5"></div>
    <div class="g-light g-light6"></div>
  </div>
</template>

<script setup>
let agendaList = reactive([
  {
    title: "",
    topicsList: [
      {
        
        topics: "Check-in / Registration",
        time: "13.00-17.30",
        speakerList: [
          {
            img: "",
            name: "",
            introduce: "",
          },
        ],
      },
    ],
  },
  {
    title: "Session 1: Regulation, Compliance and User Security",
    topicsList: [
      {
        topics: "Welcome Speech",
        time: "14:00 - 14:05",   
        speakerList: [
          {
            img: "speaker3.jpg",
            name: "Eskil",
            introduce: "Co-founder, GoPlus",
          },
        ],
      },
      {
        topics:"Planet Scale Phishing Protection Solution ",
        time: "14:05 - 14:20",
        speakerList: [
          {
            img: "kenzhang.jpg",
            name: "Ken Zhang , Google Cloud ",
            introduce: "Head of Security, Greater China",
          },
        ],
      },
 

      {
        topics:
          "Panel: Regulatory Compliance and User Risk Management in Exchanges",
        time: "14:20 - 14:50",
        speakerList: [
        {
            img: "stan.jpg",
            name: "Stan",
            introduce:
              "Moderator : APAC BD & Partnership, GoPlus",
          },
          {
            img: "samuel.jpg",
            name: "Samuel Lok",
            introduce:
              "Head of Compliance, HashKey",
          },
          {
            img: "albert.jpg",
            name: "Albert Lo",
            introduce: " Co-Founder, HKVAC",
          },
          {
            img: "mike.jpg",
            name: "Mike Mu",
            introduce: "Co-Founder, Undefined Labs",
          },
          {
            img: "anjo.jpg",
            name: "Anjo",
            introduce: "VP Partnership, GSR",
          },
        ],
      },

      

      

     

 
     
     


     

     

     

    
     

    ],
  
    },
    {
    title: "Session 2: Web3 Infrastructure and User Security",
    topicsList: [
      {
        topics: "Transcending Tradition: Elevating Web3 User Security via SecWarex and the Underlying GoPlus Security Networks",
        time: "14:50 - 15:05",   
        speakerList: [
          {
            img: "speaker3.jpg",
            name: "Eskil",
            introduce: "Co-founder, GoPlus",
          },
        ],
      },

 

      {
        topics:
          "Panel: Emerging Infrastructures, Evolving User Security Challenges",
        time: "15:05 - 15:35",
        speakerList: [
        {
            img: "jonathan.jpg",
            name: "Jonathan",
            introduce:
              "Moderator : Head of BD and Partnership, The Tie",
          },
          {
            img: "marcus.jpg",
            name: "Marcus",
            introduce:
              "APAC of Scroll",
          },
          {
            img: "jennifer.jpg", 
            name: "Jennifer",
            introduce: " Head of Ecosystem, Manta",
          },
          {
            img: "vivi.jpg",
            name: "Vivi",
            introduce: "Head of Research, TON",
          },
          {
            img: "eigen.jpg",
            name: "EigenLayer (TBD)",
            introduce: "TBD",
          },
        ],
      },

      {
        topics:"A New Path to On-Chain Security: EVM + Native Extensions",
        time: "15:35 - 15:50",
        speakerList: [
          {
            img: "artela.jpg",
            name: "CP  ",
            introduce: "- CTO, Artela",
          },
        ],
      },
      {
        topics: "BREAK",
        time: "15:50 - 16:00",
        speakerList: [
          {
            img: "",
            name: "",
            introduce: "",
          },
        ],
      },

      {
        topics:"Sustainable Development of Web3 in Hong Kong",
        time: "16:00 - 16:15",
        speakerList: [
          {
            img: "eric.jpg",
            name: "Ir Eric Chan  ",
            introduce: "Chief Public Officer, CyberPort",
          },
        ],
      },

      {
        topics:"TBA",
        time: "16:15 - 16:30",
        speakerList: [
          {
            img: "tba.png",
            name: "TBA  ",
            introduce: "TBA",
          },
        ],
      },

      {
        topics:"The Best Implementation of Telegram Security Under the Web3 Narrative",
        time: "16:30 - 16:45",
        speakerList: [
          {
            img: "vivi.jpg",
            name: "Vivi  ",
            introduce: "Head of Research, TON Foundation",
          },
        ],
      },


    ],
  
    },

    {
    title: "Session 3: Application, Service and User Security",
    topicsList: [
     
    
    {
        topics:
          "Panel: Enhancing User Security in AI-Driven Web3 Ecosystems",
        time: "16:45 - 17:15",
        speakerList: [
        {
            img: "cecilia.jpg",
            name: "Cecilia",
            introduce:
              "Moderator : CIO, Mask Eco Fund & Formless Capital ",
          },
          {
            img: "sam.jpg",
            name: "Sam",
            introduce:
              "AI Advisor, GoPlus",
          },
          {
            img: "ethan.jpg", 
            name: "Ethan ",
            introduce: " Co-founder, Myshell",
          },
          {
            img: "jackson.jpg",
            name: "Jackson",
            introduce: " Founder, 0xScope",
          },
        ],
      },

       
    {
        topics:
          "Panel: Exploring the Intersection of UI/UX Design and Web3 User Security",
        time: "17:15 - 17:45",
        speakerList: [
        {
            img: "danny.jpeg",
            name: "Danny",
            introduce:
              "Moderator: Danny - CEO, Kekkai ",
          },
          {
            img: "martin.jpg",
            name: "Martin",
            introduce:
              "CEO, ByteHunter",
          },
          {
            img: "wang.jpg", 
            name: "Wang Meng ",
            introduce: " CTO, SafeHeron",
          },
          {
            img: "jordan.jpg",
            name: "Jordan L",
            introduce: " Co-founder, UXUY",
          },
          {
            img: "isabel.jpg",
            name: "Isabel",
            introduce: " CEO, BitTrace",
          },
        ],
      },
    
    
    
  

 



     




    ],
  
    },

]);
</script>

<style lang="scss">
.clear {
  clear: both;
}
.g-dialog-agenda {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
  }
  .dialog-main {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 40px;
    background: #f6f6f6;
    border-radius: 20px;
    border: 1px solid #c0c0c0;
    .close {
      position: absolute;
      top: 30px;
      right: 30px;
      height: 25px;
      cursor: pointer;
    }

    .dialog-header {
      padding-bottom: 15px;
      border-bottom: 0.5px solid #cdcdcd;
      h3 {
        font-size: 30px;
        font-family: Letter;
        font-weight: bold;
        color: #f7eeee;
        line-height: 30px;
      }
    }

    .dialog-content {
      padding-top: 12px;
      .desc {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 23px;
        margin-bottom: 20px;
      }
      .speakers {
        .speaker {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          cursor: pointer;
          &:last-child {
            margin-bottom: 0;
          }
          img {
            width: 80px;
            height: 80px;
            border-radius: 5px;
            margin-right: 25px;
          }
          h4 {
            font-size: 23px;
            font-family: Aeonik-Bold, Aeonik;
            font-weight: bold;
            color: #ffffff;
            line-height: 28px;
            margin-bottom: 10px;
          }
          p {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
      }
    }
  }
}

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

.p-agenda {
  position: relative;
  .beautify {
    position: absolute;
    z-index: 1;
    &.beautify3 {
      top: 33px;
      left: 0;
      height: 439px;
      z-index: 0;
    }
    &.beautify4 {
      top: 75px;
      right: 0;
      height: 464.5px;
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
    .list {
      .title {
        font-size: 46px;
        font-family: KhmerMN;
        color: #ffffff;
        line-height: 55px;
        letter-spacing: 1px;
        margin-bottom: 20px;
        margin-top: 70px;
      }
      .item {
        // display: flex;
        padding: 40px;
        background: rgba($color: #0d0f17, $alpha: 0.88);
        border-radius: 30px;
        margin-bottom: 15px;
        .base {
          // display: flex;
          // flex-direction: column;
          // justify-content: space-between;
          // flex: 1;
          float: left;
          width: 830px;
          h3 {
            font-size: 30px;
            font-family: Letter;
            font-weight: bold;
            color: #ffffff;
            line-height: 36px;
            margin-bottom: 20px;
          }
          .time {
            font-size: 23px;
            font-family: Aeonik-Bold, Aeonik;
            font-weight: bold;
            color: #39e56f;
            line-height: 28px;
          }
        }
        .speakers {
          // padding-right: 100px;
          float: right;
          width: 28%;
          .speaker {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
            }
            img {
              width: 80px;
              height: 80px;
              border-radius: 5px;
              margin-right: 25px;
            }
            h4 {
              font-size: 23px;
              font-family: Aeonik-Bold, Aeonik;
              font-weight: bold;
              color: #ffffff;
              line-height: 28px;
              margin-bottom: 10px;
            }
            p {
              font-size: 16px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #b6a3a3;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}



@media screen and (max-width: 750px) {
  .g-dialog-agenda {
    .dialog-main {
      top: 50%;
      left: 40px;
      right: 40px;
      transform: translate(0, -50%);
      width: auto;
      padding: 40px;
      border-radius: 20px;
      .close {
        top: 30px;
        right: 30px;
        height: 30px;
      }

      .dialog-header {
        padding-bottom: 15px;
        padding-right: 40px;
        h3 {
          font-size: 40px;
          line-height: 50px;
        }
      }

      .dialog-content {
        padding-top: 24px;
        .desc {
          font-size: 26px;
          line-height: 1.5;
          margin-bottom: 30px;
        }
        .speakers {
          .speaker {
            margin-bottom: 20px;
            img {
              width: 120px;
              height: 120px;
              border-radius: 10px;
              margin-right: 25px;
            }
            h4 {
              font-size: 32px;
              line-height: 1.5;
              margin-bottom: 10px;
            }
            p {
              font-size: 20px;
              line-height: 1.5;
            }
          }
        }
      }
    }
  }

  .p-agenda {
    .beautify {
      &.beautify3 {
        top: 99px;
        height: 239px;
      }
      &.beautify4 {
        top: 75px;
        height: 264.5px;
      }
    }

    .header {
      .wrapper {
        height: 100%;
        .title {
          height: 100px;
        }
        p {
          margin-top: 30px;
          font-size: 24px;
        }
      }
    }

    .content {
      margin-top: -100px;
      padding: 0 40px 100px 40px;
      .list {
        .item {
          flex-direction: column;
          padding: 40px;
          margin-bottom: 20px;
          .base {
            width: 100%;
            float: none;
            h3 {
              font-size: 32px;
              line-height: 36px;
              margin-bottom: 20px;
            }
            .time {
              font-size: 28px;
              line-height: 28px;
            }
          }
          .speakers {
            padding-right: 0px;
            margin-top: 40px;
            float: none;
            width: 100%;
            .speaker {
              margin-bottom: 20px;
              img {
                width: 120px;
                height: 120px;
                border-radius: 10px;
                margin-right: 20px;
              }
              h4 {
                font-size: 32px;
                line-height: 1.5;
                margin-bottom: 10px;
              }
              p {
                font-size: 20px;
                line-height: 1.5;
              }
            }
          }
        }
      }
    }
  }
}
</style>
