const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Mann Meri Jaan <br>
        <div class="subtitle">King</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Drunk n High <br>
        <div class="subtitle">Mellow D</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songName: `Jaguar <br>
        <div class="subtitle">Sukh-E</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: `Zara Sa <br>
        <div class="subtitle">KK</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: `Tum Mile <br>
        <div class="subtitle">Pritam</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `Gul <br>
        <div class="subtitle">Anuv Jain</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: `Amplifier <br>
        <div class="subtitle">Imran Khanr</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songName: `Aaya Na Tu <br>
        <div class="subtitle">Arjun Kanungo</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songName: `Aaja We Mahiya <br>
        <div class="subtitle">Imran Khan</div>`,
        poster: "img/9.jpg"
    },{
        id: 10,
        songName: `Kesariya <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songName: `Blue Eyes <br>
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songName: `OOPS <br>
        <div class="subtitle">King</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songName: `Badnam <br>
        <div class="subtitle">Mankirt Aulakh</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songName: `Bilionera <br>
        <div class="subtitle">Otilia</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songName: `Backbone <br>
        <div class="subtitle">Harrdy Sandhu</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songName: `Qismat <br>
        <div class="subtitle">Ammy Virk</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songName: `Excuses <br>
        <div class="subtitle">AP Dhilon</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songName: `Gypsy <br>
        <div class="subtitle">G.D.Kaur</div>`,
        poster: "img/18.jpg"
    },
    {
        id: 19,
        songName: `Kis Morh Te <br>
        <div class="subtitle">Ammy Virk</div>`,
        poster: "img/19.jpg"
    },
    {
        id: 20,
        songName: `Locha-E-Ulfat <br>
        <div class="subtitle">Benny Dayal</div>`,
        poster: "img/20.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let Play = document.getElementById('Play');  
let wave = document.getElementById('wave');  

Play.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        Play.classList.remove('bi-play-fill');
        Play.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        Play.classList.add('bi-play-fill');
        Play.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_play = document.getElementById('poster_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el) =>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        // poster_play.src = `img/${index}.jpg`;
        music.play();
        Play.classList.remove('bi-play-fill');
        Play.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName, poster} = elss;
            title.innerHTML = songName;
            poster_play.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
        // poster_play.src = `img/${index}.jpg`;
        music.play();
        Play.classList.remove('bi-play-fill');
        Play.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName, poster} = elss;
            title.innerHTML = songName;
            poster_play.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});
next.addEventListener('click', ()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
        // poster_play.src = `img/${index}.jpg`;
        music.play();
        Play.classList.remove('bi-play-fill');
        Play.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName, poster} = elss;
            title.innerHTML = songName;
            poster_play.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
});