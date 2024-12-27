const {createApp,ref}  = Vue;

var data1 = createApp({
    data() {
        return{
            video:[
                {yt:"https://www.youtube.com/watch?v=YOUR_VIDEO_ID",img:"img020.jpg",title:"影片製作1",text:"血藍風暴宣傳片"},
                {yt:"https://www.youtube.com/embed/XgYEqyGPY-0?si=gYDRgxibB3xOuCDQ",img:"img021.jpg",title:"影片製作2",text:"水的旅行-手翻書"},
                {yt:"https://www.youtube.com/embed/DUwa3HBOJVg?si=FIBSTi4a0kKN-upg",img:"img022.jpg",title:"影片製作3",text:"自畫像拼豆"},

            ]
        }
    }
}).mount("#video");

var data2 = createApp({
    data() {
        return{
            IMG:[
                {pic:"img001.JPG",title:"繪圖作品1",text:"排球帥帥圖"},
                {pic:"img002.JPG",title:"繪圖作品2",text:"蕉蕉子的生日賀圖"},
                {pic:"img003.JPG",title:"繪圖作品3",text:"舒華大美女"},
                {pic:"img004.jpg",title:"繪圖作品4",text:"大一的角色設計"},
                {pic:"img005.jpg",title:"繪圖作品5",text:"大一繪話課的動作拆解"},
                {pic:"img006.jpg",title:"繪圖作品6",text:"貓貓"},
                {pic:"img007.gif",title:"繪圖作品7",text:"大二的遊戲專題-攻擊"},
                {pic:"img008.gif",title:"繪圖作品8",text:"大二的遊戲專題-護盾"},
                {pic:"img009.jpg",title:"繪圖作品9",text:"大二動畫製作的小煤炭"},
                {pic:"img010.jpg",title:"繪圖作品10",text:"小煤炭離家出走"},
                {pic:"img011.png",title:"繪圖作品11",text:"高中創作的角色"},
                {pic:"img012.jpg",title:"繪圖作品12",text:"大一基礎設計的色彩調和"},


            ]
        }
    }
}).mount("#content-2");

var data3 = createApp({
    data() {
        return{
            mod:[
                {view:"img014.jpg",title:"一點點3D-1",text:"檯燈渲染-1"},
                {view:"img015.jpg",title:"一點點3D-2",text:"檯燈渲染-2"},
                {view:"img016.jpg",title:"一點點3D-3",text:"海格的家-白膜"},
                {view:"img017.jpg",title:"一點點3D-4",text:"海格的家-渲染"},
                {view:"img018.jpg",title:"一點點3D-5",text:"水壺渲染"},
                {view:"img019.jpg",title:"一點點3D-6",text:"武器渲染"},

            ]
        }
    }
}).mount("#content-3");