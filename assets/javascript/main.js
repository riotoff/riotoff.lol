function setTitle(title, text) {
    let count = 0,
        len = text,
        flag = true;
    aniTitle = setInterval(function() {
        if (count == len.length) flag = false;
        if (count == 0) flag = true;
        count = flag == true ? ++count : --count;
        newtitle = count == 0 ? '' : len.slice(0, count);
        document.title = title + newtitle;
    }, 400);
}
function setTyped(loop, strings = []) {
    new Typed('#typed', {
        strings: strings,
        typeSpeed: 40,
        delaySpeed: 90,
        showCursor: false,
        loop: loop
    });
}