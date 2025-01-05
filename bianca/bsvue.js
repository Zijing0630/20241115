var data1 = Vue.createApp({
    data() {
        return {
            video: [], // 初始化 video 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/video", // API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.video = results; // 將回傳的資料綁定到 Vue 的 video
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});
// 掛載 Vue 應用程式到指定的 DOM 元素
data1.mount("#video");




var data2 = Vue.createApp({
    data() {
        return {
            IMG: [], // 初始化 IMG 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/img", // API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.IMG = results; // 將回傳的資料綁定到 Vue 的 IMG
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});
// 掛載 Vue 應用程式到指定的 DOM 元素
data2.mount("#content-2");




var data3 = Vue.createApp({
    data() {
        return {
            mod: [], // 初始化 IMG 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/mod", // API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.mod = results; // 將回傳的資料綁定到 Vue 的 mod
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});
// 掛載 Vue 應用程式到指定的 DOM 元素
data3.mount("#content-3");