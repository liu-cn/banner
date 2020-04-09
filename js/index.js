
  // 图片地址
const imgPath=["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg","./img/1.jpg"]

let timer;
let index=0;
let pointlist=document.getElementById("pointlist");


// 设置banner的宽度
let banner =document.getElementById("banner");
banner.style.width=imgPath.length*540+"px";
let imglist =banner.getElementsByTagName("img");

// 加载图片
for(let i=0;i<imgPath.length;i++){
  imglist[i].src=imgPath[i];
};

// 创建小圆点函数
let CreacePoint=function(){

  for(let i=0;i<imglist.length-1;i++){
    let point=document.createElement("div");
    pointlist.appendChild(point)
    point.id="point"
    if(i==0){
      point.className="first"
    }
    point.style.backgroundColor="black"
  }

    // console.log(pointlist.style.width);
      // 设置小圆点居中
  pointlist.style.left=(520-imglist.length*16)/2+"px"


}

// 自动切换函数
let autochange =function(){
  setInterval(function(){
    index++
    clearInterval(timer)
    timer=setInterval(function(){

      let oldleft=banner.offsetLeft;
      let newleft=oldleft-20;
      if(newleft<=-540*index){
        clearInterval(timer)

        // 设置活跃小圆点
        for(let i=0;i<imglist.length-1;i++){
            activepoint[i].style.backgroundColor="black";  
        }
        if(index==imglist.length-1){
          index=0
        }
        console.log(index);
        activepoint[index].style.backgroundColor="#f40";
      }

      banner.style.left=newleft+"px"

      // 如果到最后一张照片迅速切换到第一张
      if(banner.offsetLeft<=-540*(imglist.length-1)){
        banner.style.left=0+"px"
        index=0
      }

    },20)
    
    pointlist.firstChild.className=""

    let activepoint=pointlist.getElementsByTagName("div");
    
  },3000)
}

// 执行自动切换函数

CreacePoint()

// 开始时第一个活跃的点
if(pointlist.firstChild.className=="first"){
  pointlist.firstChild.style.backgroundColor="#f40"
}
  
// 执行自动切换函数 
autochange()


