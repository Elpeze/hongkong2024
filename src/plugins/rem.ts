export default defineNuxtPlugin(() => {
    if (process.client) {
        // 屏幕适应
        (function () {
            function resize() {
                var ww = window.innerWidth;
                if (ww > window.screen.width) {
                    window.requestAnimationFrame(resize);
                    document.documentElement.style.fontSize = "16px";
                } else {
                    if (ww > 750) {
                        if (ww > 1440) { ww = 1440 }
                        document.documentElement.style.fontSize =
                            (ww * 16) / 1440 + "px";
                    } else {
                        document.documentElement.style.fontSize =
                            (ww * 16) / 750 + "px";
                    }
                }
            }
        
            resize();
        
            window.addEventListener("resize", resize);
            // if (!window.addEventListener) return
            // function setFont() {
            //     let screenWidth = window.innerWidth;
            //     if (screenWidth < 750) {
            //         const baseSize = 16;
            //         const pageWidth = 750;
            //         let fontSize = (pageWidth * baseSize) / 750 + "px";;
            //         document.querySelector('html')!.style.fontSize = `${fontSize}px`;
            //     }else{
            //         const baseSize = 16;
            //         const pageWidth = 1440;
            //         let fontSize = (baseSize * screenWidth) / (screenWidth > pageWidth ? screenWidth : pageWidth);
            //         document.querySelector('html')!.style.fontSize = `${fontSize}px`;
            //     }
            // }
            // setFont()
            // setTimeout(() => {
            //     setFont()
            // }, 300)
            // document.addEventListener('DOMContentLoaded', setFont, false)
            // window.addEventListener('resize', setFont, false)
            // window.addEventListener('load', setFont, false)
        })()
    }
  })