<template>
<item-music-list-vue :playlist="state.playlist" :itemlist="state.itemList"/>
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted,reactive } from 'vue';
import itemMusicListVue from '../components/item/itemMusicList.vue';
import {getMusicListSongs,getMusicListdata} from '../request/api/item.js'
export default{
  components:{itemMusicListVue},
    setup(){
        const state = reactive({
            playlist:{},//歌单详情页
            itemList:[]//歌单歌曲
        });
        onMounted(async()=>{
            let id=useRoute().query.id;
            console.log(id);
            let res=await getMusicListdata(id);
            console.log(res);
            state.playlist=res.data.playlist
            let result = await getMusicListSongs(id);
            console.log(result);
            state.itemList=result.data.songs;
            //缓存歌单数据
            
            state.itemList.filter(res=>{
            res.dt=Math.floor(res.dt/1000/60)+':'+ (((res.dt/1000/60)-Math.floor(res.dt/1000/60))*60).toFixed(0)
            })
            console.log(state.playlist);
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        });
        return {state};
    
    },

}

</script>

<style>

</style>