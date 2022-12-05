<template>
    <div class="musicList">
      <div class="musicList1">
        <div class="biao">推荐歌单</div>
      </div>
      <div class="m1">
        <el-row :gutter="20" class="wdlb">
          <el-col :span="6" v-for="item in state.gedan" :key="item">
            <router-link style="text-decoration:none" :to="{path:'/item',query:{id:item.id}}">
            <img :src="item.picUrl" class="image1" />
            <span class="dingwei">
              <svg
                t="1668319613776"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2672"
                width="200"
                height="200"
              >
                <path
                  d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z"
                  fill="#3D3D3D"
                  p-id="2673"
                ></path>
              </svg>
              {{ qz(item.playCount) }}
            </span>
            <span class="name">{{ item.name }} </span>
          </router-link>
          </el-col>
         
        </el-row>
      </div>
    </div>
    <div style="height:10px;"></div>
  </template>
  <script>
  import { onMounted, reactive, computed } from "@vue/runtime-core";
  import { getMusicList } from "../../request/api/home";
  export default {
    setup() {
      const state = reactive({
        gedan: [],
      });
      onMounted(async () => {
        let res = await getMusicList();
        console.log(res);
        state.gedan = res.data.result;
      });
  
      const qz = computed(() => {
        return function (num) {
          if (num >= 100000000) {
            return (num / 100000000).toFixed(1) + "亿";
          } else if (num >= 10000) {
            return (num / 10000).toFixed(1) + "万";
          }
        };
      });
      return { state, qz };
    },
  };
  </script>
  <style lang="less">
  .musicList {
    width: 98%;
    height: 50%;
    padding: 3px;
    .musicList1 {
      width: 100%;
      height: 1%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 3px;
      .biao {
        font-size: 20px;
        font-weight: 900;
        margin-left: 1%;
      }
    }
    .m1 {
      width: 100%;
      height: 30%;
      display: flex;
      flex-wrap: wrap;
      margin-left: 1%;
      .wdlb {
        height: 100%;
        width: 100%;
        margin-top: 0%;
  
        .image1 {
          position: relative;
          z-index: 1;
          width: 100%;
          margin-top: 10%;
        }
        .dingwei {
          position: absolute;
          z-index: 2;
          margin-top: 2.5%;
          margin-left: -8%;
        }
        .name {
          margin-left: 1.5%;

        }
        .icon {
          width: 10%;
          height: 10%;
        }
      }
    }
  }
  span{
    color: black;
    text-decoration:none
  }
  
  </style>