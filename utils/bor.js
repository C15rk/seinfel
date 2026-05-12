let time='2.5s'
export function add() {

     // 获取所有容器
     const containers = document.querySelectorAll('.container');
     //设置动画事件 秒
     containers.forEach(container => {
         // 根据线条的宽度或高度动态调整位置
         let top=container.querySelector('.top')
         let bottom=container.querySelector('.bottom')
         let left=container.querySelector('.left')
         let right=container.querySelector('.right')
         if(top){
             top.style.background='rgba(0,0,0,0)'
             let topXian=container.querySelector('.top .xian')
             top.style.bottom = `100%`
             topXian.style.animation=`addHeight ${time} forwards ease`;
            //  topXian.style.maskImage=' linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  topXian.style.webkitMaskImage=' linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
             topXian.style.bottom='0'

         }
         if(bottom){
             bottom.style.background='rgba(0,0,0,0)'
             bottom.style.top = `100%`
             let bottomXian =container.querySelector('.bottom .xian')
             bottomXian.style.animation=`addHeight ${time} forwards ease`;
            //  bottomXian.style.maskImage=' linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  bottomXian.style.webkitMaskImage='linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
             bottomXian.style.top='0'
         }
         if(left){
             left.style.background='rgba(0,0,0,0)'
             left.style.right = `100%`
             let leftXian=container.querySelector('.left ').querySelector('.xian')
             leftXian.style.animation=`addWidth ${time} forwards ease`;
            //  leftXian.style.maskImage=' linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  leftXian.style.webkitMaskImage='linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
             leftXian.style.right='0'

         }
         if(right){
             right.style.background='rgba(0,0,0,0)'
             right.style.left = `100%`
             let rightXian=container.querySelector('.right .xian')
             rightXian.style.animation=`addWidth ${time} forwards ease`;
            //  rightXian.style.maskImage=' linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  rightXian.style.webkitMaskImage='linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
             rightXian.style.left='0'
         }
     });
    // setTimeout(removBor,1300)
}

export function add2() {

    // 获取所有容器
    const containers = document.querySelectorAll('.containerCopy');
    //设置动画事件 秒

    containers.forEach(container => {
        // 根据线条的宽度或高度动态调整位置
        let top=container.querySelector('.top')
        let bottom=container.querySelector('.bottom')
        let left=container.querySelector('.left')
        let right=container.querySelector('.right')
        if(top){
            top.style.background='rgba(0,0,0,0)'
            let topXian=container.querySelector('.top .xian')
            top.style.bottom = `100%`
            topXian.style.animation=`addHeight ${time} forwards ease`;
            //  topXian.style.maskImage=' linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  topXian.style.webkitMaskImage=' linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            topXian.style.bottom='0'

        }
        if(bottom){
            bottom.style.background='rgba(0,0,0,0)'
            bottom.style.top = `100%`
            let bottomXian =container.querySelector('.bottom .xian')
            bottomXian.style.animation=`addHeight ${time} forwards ease`;
            //  bottomXian.style.maskImage=' linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  bottomXian.style.webkitMaskImage='linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            bottomXian.style.top='0'
        }
        if(left){
            left.style.background='rgba(0,0,0,0)'
            left.style.right = `100%`
            let leftXian=container.querySelector('.left ').querySelector('.xian')
            leftXian.style.animation=`addWidth ${time} forwards ease`;
            //  leftXian.style.maskImage=' linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  leftXian.style.webkitMaskImage='linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            leftXian.style.right='0'

        }
        if(right){
            right.style.background='rgba(0,0,0,0)'
            right.style.left = `100%`
            let rightXian=container.querySelector('.right .xian')
            rightXian.style.animation=`addWidth ${time} forwards ease`;
            //  rightXian.style.maskImage=' linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  rightXian.style.webkitMaskImage='linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            rightXian.style.left='0'
        }
    });
    // setTimeout(removBor,1300)
}

export function add3() {

    // 获取所有容器
    const containers = document.querySelectorAll('.container2');
    containers.forEach(container => {
        // 根据线条的宽度或高度动态调整位置
        let left=container.querySelector('.left')
        let top=container.querySelector('.top')
        let bottom=container.querySelector('.bottom')
        let right=container.querySelector('.right')
        if(top){
            top.style.background='rgba(0,0,0,0)'
            let topXian =container.querySelector('.top .xian')
            topXian.style.animation=`addWidth ${time} forwards ease`;
            topXian.style.right='0'
        }
        if(left){
            left.style.background='rgba(0,0,0,0)'
            let leftXian=container.querySelector('.left .xian')
            leftXian.style.animation=`addHeight ${time} forwards ease`;
            //  rightXian.style.maskImage=' linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  rightXian.style.webkitMaskImage='linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            leftXian.style.bottom='0'
        }
        if(bottom){
            bottom.style.background='rgba(0,0,0,0)'
            let bottomXian =container.querySelector('.bottom .xian')
            bottomXian.style.animation=`addWidth ${time} forwards ease`;

            //  bottomXian.style.maskImage=' linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  bottomXian.style.webkitMaskImage='linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            bottomXian.style.right='0'
        }
        // if(right){
        //     right.style.background='rgba(0,0,0,0)'
        //     let rightXian=container.querySelector('.right .xian')
        //     rightXian.style.animation=`addHeight ${time} forwards ease`;
        //     //  rightXian.style.maskImage=' linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
        //     //  rightXian.style.webkitMaskImage='linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
        //     rightXian.style.bottom='0'
        // }
    });
    // setTimeout(()=>{
    //     removBor2()
    // },1500)
}

export function add4() {

    // 获取所有容器
    const containers = document.querySelectorAll('.container3');
    containers.forEach(container => {
        // 根据线条的宽度或高度动态调整位置
        let left=container.querySelector('.left')
        let top=container.querySelector('.top')
        let bottom=container.querySelector('.bottom')
        let right=container.querySelector('.right')
        if(top){
            top.style.background='rgba(0,0,0,0)'
            let topXian =container.querySelector('.top .xian')
            topXian.style.animation=`addWidth ${time} forwards ease`;
            //  bottomXian.style.maskImage=' linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  bottomXian.style.webkitMaskImage='linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            topXian.style.right='0'
        }
        if(left){
            left.style.background='rgba(0,0,0,0)'
            let leftXian=container.querySelector('.left .xian')
            leftXian.style.animation=`addHeight ${time} forwards ease`;
            //  rightXian.style.maskImage=' linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  rightXian.style.webkitMaskImage='linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            leftXian.style.bottom='0'
        }
        if(bottom){
            bottom.style.background='rgba(0,0,0,0)'
            let bottomXian =container.querySelector('.bottom .xian')
            bottomXian.style.animation=`addWidth ${time} forwards ease`;
            //  bottomXian.style.maskImage=' linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  bottomXian.style.webkitMaskImage='linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            bottomXian.style.right='0'
        }
        if(right){
            right.style.background='rgba(0,0,0,0)'
            let rightXian=container.querySelector('.right .xian')
            rightXian.style.animation=`addHeight ${time} forwards ease`;
            //  rightXian.style.maskImage=' linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            //  rightXian.style.webkitMaskImage='linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%)'
            rightXian.style.bottom='0'
        }
    });
}

function removBor2(){

    const containers = document.querySelectorAll('.container2');
    //设置动画事件 秒
    let time='3s'
    containers.forEach(container => {
        // 根据线条的宽度或高度动态调整位置
        let bottom=container.querySelector('.bottom')
        let right=container.querySelector('.right')

        if(bottom){
            let bottomXian =container.querySelector('.bottom .xian')
            bottomXian.style.animation=""
            bottomXian.style.width="100%"
        }
        if(right){
            let rightXian=container.querySelector('.right .xian')
            rightXian.style.animation=""
            rightXian.style.height="100%"
        }
    });

}
function removBor(){

    const containers = document.querySelectorAll('.container');
    //设置动画事件 秒
    let time='3s'
    containers.forEach(container => {
        // 根据线条的宽度或高度动态调整位置
        let top=container.querySelector('.top')
        let bottom=container.querySelector('.bottom')
        let left=container.querySelector('.left')
        let right=container.querySelector('.right')
        if(top){
            let topXian=container.querySelector('.top .xian')
            topXian.style.maskImage=''
            topXian.style.webkitMaskImage=' '
            topXian.style.height="100%"
        }
        if(bottom){
            let bottomXian =container.querySelector('.bottom .xian')
            bottomXian.style.maskImage=''
            bottomXian.style.webkitMaskImage=''
            bottomXian.style.height="100%"
        }
        if(left){
            let leftXian=container.querySelector('.left .xian')
            leftXian.style.maskImage=''
            leftXian.style.webkitMaskImage=''
            leftXian.style.width="100%"
        }
        if(right){
            let rightXian=container.querySelector('.right .xian')
            rightXian.style.width="100%"
            rightXian.style.maskImage=' '
            rightXian.style.webkitMaskImage=''
        }
    });

}