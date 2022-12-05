<template>
    <div>
      <span class="demonstration"></span>
      <el-carousel :interval="4000" type="card" height="300px" class="img" style="width: 100%">
        <el-carousel-item v-for="image in state.images" :key="image">
          <img class="img-a" :src="image.imageUrl" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
    <script>
  import { reactive, onMounted } from "vue";
  import { getBanner } from "../../request/api/home";
  import axios from "axios";
  export default {
    setup() {
      const state = reactive({
        images: [
        ],
      });
  
      onMounted(async() => {
        // axios.get("http://wangyuzhu.cn:3000/banner?type=0").then((res) => {
        //   console.log(res);
        // });
        let res= await getBanner();
        console.log(res);
        state.images = res.data.banners;
        
      });
      return { state };
    },
  };
  </script>
    <style>
  .demonstration {
    color: var(--el-text-color-secondary);
  }
  
  .img {
    margin-top: 1%;
    width: 100%;
    max-height: 100%;
  }
  .img-a{
    height: 100%;
    width: 100%;
  }
  
  </style>