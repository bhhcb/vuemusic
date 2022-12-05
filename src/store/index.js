import { createApp } from 'vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
export default createStore({
    state:{
        playList:[],
        id:'',
        url:'',
        playListIndex:0,
        currentTime:0,
        arr:[],
    }
})