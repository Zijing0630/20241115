document.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // 獲取滾動距離
    const layers = document.querySelectorAll(".parallax-layer"); // 選擇所有視差層

    layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute("data-speed")); // 獲取速度
        const yOffset = scrollY * speed; // 計算位移
        layer.style.transform = `translate3d(0, ${yOffset}px, 0)`; // 更新位移
    });
});