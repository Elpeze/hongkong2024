<template>
    <div class="g-calendar">
        <div class="calendar-header">
            <div class="date">
                <span>Sunday</span>
                <span>Aug 27</span>
            </div>
            <div class="date">
                <span>Monday</span>
                <span>Aug 28</span>
            </div>
            <div class="date">
                <span>Monday</span>
                <span>Aug 28</span>
            </div>
            <div class="date">
                <span>Monday</span>
                <span>Aug 28</span>
            </div>
            <div class="date">
                <span>Monday</span>
                <span>Aug 28</span>
            </div>
        </div>
        <div class="calendar-content">
            <div class="left">
                <div class="row">
                    <h4>GOPLUS Hacker House</h4>
                    <NuxtLink to="/">
                        <span>Register now</span>
                        <img src="~/assets/img/icon-arrow1.png" alt="icon" />
                        <img src="~/assets/img/icon-arrow2.png" alt="icon" />
                    </NuxtLink>
                </div>
                <div class="row">
                    <h4>Starknet Basecamp</h4>
                    <NuxtLink to="/">
                        <span>Apply now</span>
                        <img src="~/assets/img/icon-arrow1.png" alt="icon" />
                        <img src="~/assets/img/icon-arrow2.png" alt="icon" />
                    </NuxtLink>
                </div>
                <div class="row">
                    <h4>Starknet Mixer</h4>
                    <NuxtLink to="/">
                        <span>Register now</span>
                        <img src="~/assets/img/icon-arrow1.png" alt="icon" />
                        <img src="~/assets/img/icon-arrow2.png" alt="icon" />
                    </NuxtLink>
                </div>
                <div class="row">
                    <h4>Stanford Blockchain Conference</h4>
                    <NuxtLink to="/">
                        <span>Website</span>
                        <img src="~/assets/img/icon-arrow1.png" alt="icon" />
                        <img src="~/assets/img/icon-arrow2.png" alt="icon" />
                    </NuxtLink>
                </div>
            </div>
            <div class="right">
                <img
                    class="title"
                    src="~/assets/img/ticket-txt.png"
                    alt="icon"
                />
                <NuxtLink to="/#tickets" class="btn">
                    <span>Get Tickets</span>
                    <img src="~/assets/img/icon-arrow3.png" alt="icon" />
                    <img src="~/assets/img/icon-arrow4.png" alt="icon" />
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="g-m-calendar">
        <div class="item">
            <h3>Sunday Aug 27-30</h3>
            <div class="title">GOPLUS Hacker House</div>
            <NuxtLink to="/">
                <span>Register now</span>
                <img src="~/assets/img/icon-arrow1.png" alt="icon" />
                <img src="~/assets/img/icon-arrow2.png" alt="icon" />
            </NuxtLink>
        </div>
        <div class="item">
            <h3>Sunday Aug 27-30</h3>
            <div class="title">GOPLUS Hacker House</div>
            <NuxtLink to="/">
                <span>Register now</span>
                <img src="~/assets/img/icon-arrow1.png" alt="icon" />
                <img src="~/assets/img/icon-arrow2.png" alt="icon" />
            </NuxtLink>
        </div>
        <div class="item">
            <h3>Sunday Aug 27-30</h3>
            <div class="title">GOPLUS Hacker House</div>
            <NuxtLink to="/">
                <span>Register now</span>
                <img src="~/assets/img/icon-arrow1.png" alt="icon" />
                <img src="~/assets/img/icon-arrow2.png" alt="icon" />
            </NuxtLink>
        </div>
        <div class="item">
            <h3>Sunday Aug 27-30</h3>
            <div class="title">GOPLUS Hacker House</div>
            <NuxtLink to="/">
                <span>Register now</span>
                <img src="~/assets/img/icon-arrow1.png" alt="icon" />
                <img src="~/assets/img/icon-arrow2.png" alt="icon" />
            </NuxtLink>
        </div>
        <div class="ticket">
            <h3>GPLUS Summit ‘23</h3>
            <NuxtLink to="/#tickets" class="btn">
                <span>Get Tickets</span>
                <img src="~/assets/img/icon-arrow3.png" alt="icon" />
                <img src="~/assets/img/icon-arrow4.png" alt="icon" />
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.g-calendar {
    padding: 15px;
    background: #0c0f15;
    border-radius: 15px;
    .calendar-header {
        display: flex;
        justify-content: space-between;
        .date {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 234px;
            height: 73px;
            background: linear-gradient(90deg, #8dffa7 0%, #34ffb2 100%);
            border-radius: 15px;
            font-size: 17px;
            font-family: Aeonik-Bold, Aeonik;
            font-weight: bold;
            color: #0d0e0c;
            line-height: 21px;
        }
    }
    .calendar-content {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .left {
            width: 966px;
            .row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 73px;
                background: #171a21;
                border-radius: 15px;
                padding: 0 30px;
                margin-bottom: 10px;
                cursor: pointer;
                &:last-child {
                    margin-bottom: 0;
                }
                &:hover {
                    img:nth-child(2) {
                        display: none;
                    }
                    img:nth-child(3) {
                        display: block;
                    }
                }

                h4 {
                    font-size: 17px;
                    font-family: Aeonik-Bold, Aeonik;
                    font-weight: bold;
                    color: #ffffff;
                    line-height: 21px;
                }
                a {
                    display: flex;
                    align-items: center;
                    span {
                        font-size: 16px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #39e56f;
                        line-height: 23px;
                        margin-right: 10px;
                    }
                    img {
                        height: 24px;
                        &:nth-child(3) {
                            display: none;
                        }
                    }
                }
                &:nth-child(1) {
                    width: 100%;
                }
                &:nth-child(2) {
                    width: 478px;
                    margin-left: 488px;
                }
                &:nth-child(3) {
                    flex-direction: column;
                    justify-content: center;
                    width: 234px;
                    margin-left: 488px;
                    h4 {
                        margin-bottom: 7px;
                    }
                }
                &:nth-child(4) {
                    width: 722px;
                    margin-left: 244px;
                }
            }
        }
        .right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 40px 35px 25px 35px;
            width: 234px;
            height: 322px;
            border-radius: 15px;
            background-image: url(../assets/img/bg-ticket.png);
            background-size: cover;
            h3 {
                font-size: 26px;
                font-family: KhmerMN-Bold, KhmerMN;
                font-weight: bold;
                color: #0d0e0c;
                line-height: 28px;
            }
            .title {
                width: 136.5px;
                height: 44.5px;
            }
            .btn {
                display: flex;
                align-items: center;
                font-size: 18px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #000000;
                cursor: pointer;
                img {
                    height: 24px;
                    margin-left: 8px;
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
}
.g-m-calendar {
    display: none;
}
@media screen and (max-width: 750px) {
    .g-calendar {
        display: none;
    }

    .g-m-calendar {
        display: block;
        padding: 40px;
        background: #0c0f15;
        border-radius: 30px;
        .item {
            background: #171a21;
            border-radius: 30px;
            padding: 40px;
            margin-bottom: 20px;
            &:hover {
                img:nth-child(2) {
                    display: none;
                }
                img:nth-child(3) {
                    display: block;
                }
            }
            h3 {
                font-size: 30px;
                font-family: Aeonik-Bold, Aeonik;
                font-weight: bold;
                color: #39e56f;
                line-height: 36px;
                margin-bottom: 20px;
            }
            .title {
                margin: 0 0 40px 0;
                text-align: left;
                font-size: 34px;
                font-family: Aeonik-Bold, Aeonik;
                font-weight: bold;
                color: #ffffff;
                line-height: 41px;
            }
            a {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                font-size: 32px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #39e56f;
                img {
                    height: 48px;
                    margin-left: 20px;
                    &:nth-child(3) {
                        display: none;
                    }
                }
            }
        }
        .ticket {
            padding: 40px 40px 30px 40px;
            height: 260px;
            background-image: url(../assets/img/m-bg-ticket.png);
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h3 {
                font-size: 46px;
                font-family: KhmerMN-Bold, KhmerMN;
                font-weight: bold;
                color: #0d0e0c;
                line-height: 46px;
            }
            .btn {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: 36px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #000000;
                img {
                    height: 48px;
                    margin-left: 20px;
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
}
</style>