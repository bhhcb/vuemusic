<template>
  <div class="item1">
    <div><img :src="playlist.coverImgUrl" alt="" style="width: 230px" /></div>
    <div>
      <div class="hezi1">
        <span class="ziti">{{ playlist.name }}</span>
      </div>
      <div style="margin-top: 40px">
        <span class="bq">标签:{{ playlist.tags }}</span>
      </div>
      <div>
        <img :src="playlist.creator.avatarUrl" class="imgy" alt="" />
        <span class="ccc"> {{ playlist.creator.nickname }}</span>
      </div>
      <el-button
        type="success"
        style="margin-left: 5px; margin-top: 42px"
        @click="drawer = true"
      >
        简介
      </el-button>

      <el-drawer v-model="drawer" :with-header="false">
        <span>{{ playlist.description }}</span>
      </el-drawer>
    </div>

    <div class="itemleft"></div>
  </div>
  <div class="right"></div>
  <el-table
    :data="itemlist"
    :row-class-name="tableRowClassName"
    @row-click="getEmpDetail"
    style="width: 100%"
  >
    <el-table-column prop="name" label="标题" width="400" />
    <el-table-column prop="ar[0].name" label="歌手" width="400" />
    <el-table-column prop="al.name" label="专辑" width="500" />
    <el-table-column prop="dt" label="时间" width="100" />
  </el-table>
</template>
<script>
import { ref } from "vue";
import { getMusic } from "../../request/api/home";
import store from "../../store";
export default {
  setup(props) {
    console.log(props);
    const drawer = ref(false);
    //防止数据丢失，渲染缓存数据
    if ((props.playlist.creator = "")) {
      props.playlist.creator = JSON.parse(
        sessionStorage.getItem().playlist
      ).creator;
      console.log(props.playlist.creator);
    }
    function tableRowClassName({ row, rowIndex }){
      row.index = rowIndex;
    }//这个方法不要修改
    async function getEmpDetail(row, event, column){
      store.state.playList=props.itemlist
      let index = row.index;
      let res=await getMusic(store.state.playList[index].id)
      store.state.url=res.data.data[0].url
      console.log(store.state.url);
      store.state.playListIndex=index
      store.state.id=store.state.playList[index].id
    }

    return { drawer,getEmpDetail,tableRowClassName};
  },
  props: ["playlist", "itemlist"],
};
</script>
<style lang="less" scoped>
.item1 {
  display: flex;
  flex-direction: row;
  .ziti {
    font-size: 30px;
    font-weight: 1000;

    .bq {
      margin-top: 100px;
    }
  }
}
.hezi1 {
  display: flex;
  flex-direction: column;
}
.imgy {
  border-radius: 50%;
  margin-top: 20px;
  width: 30px;
}
a {
  color: black;
}
</style>