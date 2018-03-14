let musicList;  //歌曲列表
let musicIndex; //当前点击歌曲的下标

//初始化歌单信息
function initList(){
    $.get('/getListInfo', {_id: sessionStorage.listId}, (msg) => {
        refreshInfo(msg);
        musicList = msg.music;
    })
}


//刷新歌单信息
function refreshInfo(data){
    
    list_app.innerHTML = `
        <div>
            <img width='100em' src='${data.img}' />
            <h3>${data.name}</h3>
            <p>${data.autor}</p>
            <h5>${data.labs}</h5>
            <h3>歌曲列表</h3>
            
            <ol>
                ${
                    data.music.map((music) => {
                        return `<li id='${music._id}' onclick='clickMusic()'>
                                    <p>${music.name}</p>
                                    <p>${music.autor}</p>
                                </li>
                                `
                    }).join('')
                }
            </ol>
        </div>
    `
}


//点击歌曲信息
function clickMusic(){
    //当前点击音乐的ID
    let mId = event.target.parentNode.id;
    
    for(let i = 0; i < musicList.length; i++){
        if(musicList[i]._id == mId)
            musicIndex = i;
    }
    
    
    //当前歌曲ID
    sessionStorage.musicId = event.target.parentNode.id;
    //当前歌曲索引
    sessionStorage.musicIndex = musicIndex;
    //当前歌单所有歌曲
    sessionStorage.musicList = JSON.stringify(musicList);
    
    
    location.href = 'music.html'
}


initList();

