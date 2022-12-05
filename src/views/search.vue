<template>
  <el-table :data="state.item" style="width: 90%" @row-click="adc">
    <el-table-column prop="name" label="标题" width="400" />
    <el-table-column prop="ar[0].name" label="歌手" width="400" />
    <el-table-column prop="al.name" label="专辑" width="400" />
    <el-table-column prop="dt" label="时间" width="100" />
    <!-- <audio ref="audio" autoplay :src="url"></audio> -->
  </el-table>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, reactive, watch, onMounted } from "vue";
import { getSearch,getMusic } from "../request/api/home";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRoute();
    const store = useStore()
    let bbb = "";
    const url = ref("");
    let aaa = router.query.router;
    const state = reactive({
      item: [],
    });
    async function acc() {
      let res = await getSearch(aaa);
      // console.log(res);
      state.item = res.data.result.songs;
      // console.log(state.item);
      store.state.playList=state.item
      state.item.filter((res) => {
        res.dt =
          Math.floor(res.dt / 1000 / 60) +
          ":" +
          ((res.dt / 1000 / 60 - Math.floor(res.dt / 1000 / 60)) * 60).toFixed(
            0
          );
      });
    }
    function adc(id) {
      abb(id.id);
    }
    async function abb(bbb) {
      store.state.id=bbb
      let raa = await getMusic(bbb);
      // console.log(raa);
      url.value = raa.data.data[0].url;
      // console.log(url.value);
      store.state.url=url.value
    }

    watch(
      () => router.query.router,
      (newVal) => {
        // console.log(newVal);
        aaa = newVal;
        acc();
      }
    );

    onMounted(() => {
      acc();
      abb();
    });

    return { state, aaa, acc, adc,abb, bbb, url };
  },
};
</script>

<style>
</style>