<template>
  <header class="g-header">
    <div class="nav">
      <h1>
        <NuxtLink to="/">
          <img src="~/assets/img/logo.png" alt="logo" />
        </NuxtLink>
      </h1>
      <ul>
        <li>
          <NuxtLink to="/speakers">Speakers</NuxtLink>
        </li>
        <li><NuxtLink to="/agenda">Agenda</NuxtLink></li>
        <!-- <li><NuxtLink to="/sponsors">Sponsors</NuxtLink></li> -->
        <li><NuxtLink to="/about">About</NuxtLink></li>
        
      </ul>
      <!-- <div class="btn">Watch Recordings</div> -->
    </div>

    <div class="media">
      <NuxtLink to="https://twitter.com/GoPlusSecurity">
        <img src="~/assets/img/icon-x.png" alt="logo" />
      </NuxtLink>
      <NuxtLink to="https://discord.com/invite/5cvSsaT8N5">
        <img src="~/assets/img/icon-discord.png" alt="logo" />
      </NuxtLink>
    </div>
  </header>

  <header class="m-g-header" :class="{ 'header-show': navVisible }">
    <div class="wrapper">
      <h1>
        <NuxtLink to="/">
          <img src="~/assets/img/logo.png" alt="logo" />
        </NuxtLink>
      </h1>

      <div class="menu">
        <img
          v-show="!navVisible"
          @click="toggle"
          src="~/assets/img/icon-menu.png"
          alt="icon"
        />
        <img
          v-show="navVisible"
          @click="toggle"
          src="~/assets/img/icon-menu-close.png"
          alt="icon"
        />
      </div>
    </div>
    <div class="nav">
      <ul @click="toggle">
        <li>
          <NuxtLink to="/speakers">Speakers</NuxtLink>
        </li>
        <!-- <li><NuxtLink to="/sponsors">Sponsors</NuxtLink></li> -->
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/agenda">Agenda</NuxtLink></li>
      </ul>
      <!-- <div class="btn">Watch Recordings</div> -->
    </div>
  </header>
</template>

<script lang="ts" setup>
const navVisible = ref(false);
const toggle = () => {
  navVisible.value = !navVisible.value;
};
</script>

<style lang="scss">
.g-header {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 18px 0;


  //izzet
  // background-image: url('~/assets/img/backgroundimage.png');
  // background-size: cover; // Cover the entire space
  // background-position: center; // Center the background image
  // background-repeat: no-repeat; // Do not repeat the image


  .nav {
    display: flex;
    align-items: center;
    padding: 0 12.5px 0 34px;
    height: 60px;
    border-radius: 36px;
    border: 1px solid rgba(57, 229, 111, 1);
    backdrop-filter: blur(5px);
    h1 {
      img {
        display: block;
        height: 28px;
      }
    }
    ul {
      display: flex;
      padding: 0 40px;
      li {
        a {
          display: inline-block;
          padding: 0 28px;
          font-size: 28px;
          font-family: Aeonik-Regular, Aeonik;
          font-weight: 400;
          color: #ffffff;
          line-height: 17px;
        }
      }
    }

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 184px;
      height: 40px;
      background: linear-gradient(270deg, #6fff90 0%, #8affd3 100%);
      border-radius: 20px;
      cursor: pointer;
      font-size: 14px;
      font-family: Aeonik-Medium, Aeonik;
      font-weight: 500;
      color: #0d0e0c;
    }
  }

  .media {
    position: absolute;
    right: 40px;
    a {
      img {
        height: 28px;
        margin-right: 15px;
      }
    }
  }
}
.m-g-header {
  display: none;
}

@media screen and (max-width: 750px) {
  .g-header {
    display: none;
  }
  .m-g-header {
    position: fixed;
    left: 30px;
    right: 30px;
    top: 30px;
    z-index: 1000;
    display: block;
    border-radius: 42px;
    border: 1px solid rgba(57, 229, 111, 1);
    height: 84px;
    backdrop-filter: blur(5px);
    overflow: hidden;
    transition: all 0.3s;
    &.header-show {
      background: #0e5042;
      height: 380px;
      backdrop-filter: blur(none);
    }
    .wrapper {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      height: 84px;
      padding: 0 12px 0 48px;
    }
    h1 {
      img {
        height: 30px;
        display: block;
      }
    }
    .menu {
      img {
        height: 60px;
      }
    }
    .nav {
      padding: 22px 40px 32px 40px;
      ul {
        li {
          a {
            display: flex;
            justify-content: center;
            padding: 15px 0;
            font-size: 28px;
            font-family: Aeonik-Regular, Aeonik;
            font-weight: 400;
            color: #ffffff;
            line-height: 34px;
          }
        }
      }
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        background: linear-gradient(270deg, #6fff90 0%, #8affd3 100%);
        border-radius: 40px;
        font-size: 28px;
        font-family: Aeonik-Medium, Aeonik;
        font-weight: 500;
        color: #0d0e0c;
        margin-top: 47px;
      }
    }
  }
}
</style>
