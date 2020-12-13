const color = document.querySelector("#color");

const getRandomColorHex = () => {
    return Number(Math.floor((Math.random() * 256))).toString(16).padStart(2, '0');
}

document.querySelector("#flip").addEventListener("click", e => {
    let red = getRandomColorHex();
    let blue = getRandomColorHex();
    let green = getRandomColorHex();

    // 还有一种方式可以将 0~F全部写存起来，然后直接用random index的方式选6个来拼接字符串
    let bgc = `#${red}${blue}${green}`;
    color.innerHTML = bgc;
    document.body.style.backgroundColor = bgc;
});

