//初始化音乐信息
function initMusic(id = sessionStorage.musicId){
    $.get('/getMusic', {_id: id}, function(msg){
        refreshMusic(msg)
    })
}


function refreshMusic(msg){
    
    music_app.innerHTML = `
        <h2>${msg.name}</h2>
        <h4>${msg.autor}</h4>

        <img id="headImg" src='http://127.0.0.1:7777/${msg.img}' style="width:300px;height:300px"/>

        <audio controls id='music_audio' autoplay src='http://127.0.0.1:7777/${msg.href}' ></audio>
        <button onclick='clickUp()'>上一首</button>
        <button onclick='clickNext()'>下一首</button>
    `
    $('#headImg').stopRotate();
    $('#headImg').rotate();

}

////当前歌曲ID
//    sessionStorage.musicId = event.target.parentNode.id;
//    //当前歌曲索引
//    sessionStorage.musicIndex = musicIndex;
//    //当前歌单所有歌曲
//    sessionStorage.musicList = musicList;

//点击上一首
function clickUp(){
    
}

//点击下一首
function clickNext(){
    let list = JSON.parse(sessionStorage.musicList);
    let musicIndex = parseInt(sessionStorage.musicIndex);
    let newMusic;
    
    
    //取下一个索引的歌曲
    if(musicIndex + 1 < list.length){
        newMusic = list[musicIndex + 1];
        initMusic(newMusic._id)
        sessionStorage.musicIndex = musicIndex + 1;
    }else{
        newMusic = list[0];
        initMusic(newMusic._id)
        sessionStorage.musicIndex = 0;
    }
        
    
    
}


////点击播放
//function clickPlay(){
//    let btn = event.target
//    
//    //停止状态
//    if(music_audio.paused){
//        music_audio.play();
//        btn.innerHTML = '||'
//    }
//        
//    else{
//        music_audio.pause();
//        btn.innerHTML = '》》'
//    } 
//    
//}


initMusic();