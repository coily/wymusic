//初始化列表信息
function initList(){
    $.get('/getList',(data) => {

        app.innerHTML = `
            <table>
                <tr>
                    ${
                        data.map((listData) => {
                            return `<td>
                                        <a id='${listData._id}' onclick='clickList()'>
                                            <img width='100em' src='${listData.img}' />
                                        </a>
                                        <p>${listData.name}</p>
                                    </td>`
                        }).join('')
                    }
                </tr>
            </table>
        `
        
    })
}


//点击歌单
function clickList(){
    let id = event.target.parentNode.id
//    console.log(id)
    sessionStorage.listId = id;
    location.href = 'list.html'
}


initList();