let musicInformArray = [
    {
        name: 'Zaniyar Khosravi',
        path: './music/Xaniar Khosravi - Gelofen  (320).mp3',
        cover_image: "./images/Xaniar-Khosravi-Gelofen.jpg"
    },
    {
        name: 'Sirvan Khosravi',
        path: './music/Sirvan Khosravi - Taajob Nakon (320).mp3',
        cover_image: './images/Sirvan-Khosravi-Taajob-Nakon.jpg'
    }
];

let content = document.getElementById('content');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let audio = document.getElementById('audio');
let cover = document.getElementById('cover');
let index = 0;
content.innerHTML = musicInformArray[index].name;
audio.src = musicInformArray[index].path;
cover.src = musicInformArray[index].cover_image;
let nextMusic = function () {
    if (index < (musicInformArray.length - 1)) {
        index = index + 1;
    } else {
        index = 0;
    }
    content.innerHTML = musicInformArray[index].name;
    audio.src = musicInformArray[index].path;
    cover.src = musicInformArray[index].cover_image;
};
next.addEventListener('click', nextMusic);
let previousMusic = function () {
    if (index === 0) {
        index = (musicInformArray.length) - 1;
    } else {
        index = index - 1;
    }
    content.innerHTML = musicInformArray[index].name;
    audio.src = musicInformArray[index].path;
    cover.src = musicInformArray[index].cover_image;
};
prev.addEventListener('click', previousMusic);