import service from "..";
//获取歌单详情页数据
export function getMusicListdata(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
//获取歌单歌曲
export function getMusicListSongs(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data}`
    })
}
