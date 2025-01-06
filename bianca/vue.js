const {createApp,ref}  = Vue;

var data1 = createApp({
    data() {
        return{
            video:[
                {yt:"https://www.youtube.com/embed/HRIaX4__Wy0?si=Kem-gSgFGZiTmxL9",img:"img020.jpg",title:"影片製作",text:"血藍風暴宣傳片"},
                {yt:"https://www.youtube.com/embed/XgYEqyGPY-0?si=gYDRgxibB3xOuCDQ",img:"img021.jpg",title:"影片製作",text:"水的旅行-手翻書"},
                {yt:"https://www.youtube.com/embed/DUwa3HBOJVg?si=-uH0RuyfQJ8gIIxu",img:"img022.jpg",title:"影片製作",text:"自畫像拼豆"},

            ]
        }
    }
}).mount("#video");

var data2 = createApp({
    data() {
        return{
            IMG:[
                {pic:"img001.JPG",title:"繪圖作品",text:"排球帥帥圖"},
                {pic:"img002.JPG",title:"繪圖作品",text:"蕉蕉子的生日賀圖"},
                {pic:"img003.JPG",title:"繪圖作品",text:"舒華大美女"},
                {pic:"img004.jpg",title:"繪圖作品",text:"大一的角色設計"},
                {pic:"img005.jpg",title:"繪圖作品",text:"大一繪話課的動作拆解"},
                {pic:"img006.jpg",title:"繪圖作品",text:"貓貓"},
                {pic:"img007.gif",title:"繪圖作品",text:"大二的遊戲專題-攻擊"},
                {pic:"img008.gif",title:"繪圖作品",text:"大二的遊戲專題-護盾"},
                {pic:"img009.jpg",title:"繪圖作品",text:"大二動畫製作的小煤炭"},
                {pic:"img010.jpg",title:"繪圖作品",text:"小煤炭離家出走"},
                {pic:"img011.png",title:"繪圖作品",text:"高中創作的角色"},
                {pic:"img012.jpg",title:"繪圖作品",text:"大一基礎設計的色彩調和"},


            ]
        }
    }
}).mount("#content-2");

var data3 = createApp({
    data() {
        return{
            mod:[
                {view:"img014.jpg",title:"一點點3D",text:"檯燈渲染-1"},
                {view:"img015.jpg",title:"一點點3D",text:"檯燈渲染-2"},
                {view:"img016.jpg",title:"一點點3D",text:"海格的家-白膜"},
                {view:"img017.jpg",title:"一點點3D",text:"海格的家-渲染"},
                {view:"img018.jpg",title:"一點點3D",text:"水壺渲染"},
                {view:"img019.jpg",title:"一點點3D",text:"武器渲染"},

            ]
        }
    }
}).mount("#content-3");