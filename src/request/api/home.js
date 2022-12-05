import service from "..";
//获取轮播图的数据
export function getBanner(){
    return service({
        method:"GET",
        url:"/banner?type=0"
    })
}
//获取歌单
export function getMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=8"
    })
}
//搜索
export function getSearch(data){
    return service({
        method:"GET",
        url:`/cloudsearch?keywords=${data}`
    })
}
//获得歌曲地址
export function getMusic(data){
    return service({
        method:"GET",
        url:`/song/url/v1?id=${data}&level=exhigh`
    })
}
//获取歌词
export function getMusicLyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}