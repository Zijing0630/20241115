const {createApp,ref}  = Vue;

var data1 = createApp({
    data() {
        return{
            video:[
                {yt:"https://www.youtube.com/watch?v=YOUR_VIDEO_ID",img:"img020.jpg",title:"影片製作1",text:"血藍風暴宣傳片"},
                {yt:"https://www.youtube.com/embed/XgYEqyGPY-0?si=gYDRgxibB3xOuCDQ",img:"img021.jpg",title:"影片製作2",text:"水的旅行-手翻書"},
                {yt:"https://www.youtube.com/embed/DUwa3HBOJVg?si=TBP-0qAyBzDNfBZV",img:"img022.jpg",title:"影片製作3",text:"自畫像拼豆"},

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

            ]
        }
    }
}).mount("#content-2");

var data3 = createApp({
    data() {
        return{
            video:[
                {yt:"https://www.youtube.com/watch?v=YOUR_VIDEO_ID",img:"img020.jpg",title:"影片製作1",text:"血藍風暴宣傳片"},
                {yt:"https://www.youtube.com/embed/XgYEqyGPY-0?si=gYDRgxibB3xOuCDQ",img:"img021.jpg",title:"影片製作2",text:"水的旅行-手翻書"},
                {yt:"https://www.youtube.com/embed/DUwa3HBOJVg?si=TBP-0qAyBzDNfBZV",img:"img022.jpg",title:"影片製作3",text:"自畫像拼豆"},

            ]
        }
    }
}).mount("#3D");