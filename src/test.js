const string = `.skin* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .skin*::before,
  .skin*::after {
    box-sizing: border-box;
  }
  .skin {
    background-color: #ffe600;
    position: relative;
    height: 100vh;
  }
  .nose {
    border: 10px solid red;
    border-color: black transparent transparent transparent;
    /* border-bottom: none; */
    /* border-right: none;  */
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 11;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
  }
  .circular {
    /* border: 1px solid rebeccapurple; */
    width: 20px;
    height: 6px;
    border-radius: 10px 10px 0px 0px;
    /* border-radius: 50%;
      top: -13px;
    */
    position: relative;
    top: -16px;
    left: -10px;
    background-color: black;
  }
  .eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
  }
  /* 眼睛里的白色圈圈，用伪元素*/
  .eye::before {
    content: "";
    display: block; /*伪元素默认是内联元素*/
    border: 3px solid #000;
    width: 28px;
    height: 28px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 6px;
    top: 2px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    /* border: 1px solid red; */
    height: 200px;
    width: 200px;
    position: absolute;
    left: 50%;
    top: 160px;
    margin-left: -100px;
  }
  .mouth.up {
    border: 1px solid green;
    /* position: relative; */
    /* left: 50%; */
  }
  .mouth .up .lip {
    border: 3px solid #000;
    width: 80px;
    height: 30px;
    background-color: #ffe600;
    z-index: 10;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 80%;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    left: 50%;
    margin-left: -79px;
    transform: rotate(-20deg);
  }
  .mouth .up .lip.right {
    border-radius: 0 0 80% 0;
    border-top-color: transparent;
    border-left-color: transparent;
    position: relative;
    transform: rotate(20deg);
    left: 50%;
    margin-left: -1px;
    top: -30px;
  }
  
  .mouth .down {
    /* border: 1px solid red; */
    height: 180px;
    position: absolute;
    top: 12px;
    width: 100%;
    overflow: hidden; /*遮住舌头*/
  }
  .mouth .down .bigCircular {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background-color: #9b000a;
    overflow: hidden;
  }
  .mouth .down .bigCircular .smallCircular {
    /* border: 1px solid green; */
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background-color: #f88190;
    border-radius: 50%;
  }
  .face {
    position: absolute;
    left: 50%;
    width: 88px;
    height: 88px;
    border: 3px solid black;
    top: 200px;
    margin-left: -44px;
    z-index: 1;
    background-color: #ff0000;
    border-radius: 50%;
  }
  .face > img {
    /* border: 1px solid red; */
    position: absolute;
    top: 50%;
    left: 50%;
    /* display: none; */
  }
  .face.left {
    transform: translateX(-180px);
  }
  .face.left > img {
    transform: rotateY(-180deg);
    transform-origin: 0 0;
  }
  .face.right {
    transform: translateX(180px);
  }`

let n = 1
const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
console.log(n)
demo.innerText = string.substr(from = 0, n)
demo2.innerHTML = string.substr(from = 0, n)
console.log("n" + n);

let time = 50
const timeCode = () => {
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  // console.log(string.length);
  // console.log(demo.innerHTML = string.substr(from = 0, n));
  demo.innerText = string.substr(from = 0, n)
  demo2.innerHTML = string.substr(from = 0, n)
  demo.scrollTop = demo.scrollHeight//自动拉滚动条
  // console.log(n);
}

let id = setInterval(handler = () => {
  timeCode()
}, time)

btnPause.onclick = () => {
  window.clearInterval(id)
}

btnPlay.onclick = () => {
  id = setInterval(handler = () => {
    timeCode()
  }, time)
}
btnSlow.onclick = () => {
  window.clearInterval(id)
  time = 70
  id = setInterval(handler = () => {
    timeCode()
  }, time)
}

btnNormal.onclick = () => {
  window.clearInterval(id)
  time = 50
  id = setInterval(handler = () => {
    timeCode()
  }, time)
}

btnFast.onclick = () => {
  window.clearInterval(id)
  time = 0
  id = setInterval(handler = () => {
    timeCode()
  }, time)
}