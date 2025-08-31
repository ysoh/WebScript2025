window.onload = function () {
    const targetImg = document.getElementById('targetImg');
    document.addEventListener('mousemove', (e) => {
        targetImg.style.left = `${e.clientX}px`;
        targetImg.style.top = `${e.clientY}px`;
    });
};
