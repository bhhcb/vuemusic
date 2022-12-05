<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    :router="true"
  >
    <img src="./assets/logoko.png" alt="" style="width: 6%" />

    <svg
      t="1670036497756"
      @click="$router.go(-1)"
      class="icon1"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8017"
      width="200"
      height="200"
    >
      <path
        d="M511.1 511.1l1.8 1.8-1.8-1.8zM513.1 510.9l-2.2 2.2c0.8-0.7 1.5-1.4 2.2-2.2z"
        fill="#FFFFFF"
        p-id="8018"
      ></path>
      <path
        d="M385.8 512.1c0 8.3 3.1 15.8 8.3 21.5l2.2 2.2 21.5 21.5L583.5 723c12.4 12.4 32.8 12.4 45.3 0 12.4-12.4 12.4-32.8 0-45.3L463 512l165.7-165.8c12.4-12.4 12.4-32.8 0-45.3-12.4-12.4-32.8-12.4-45.2 0.1L417.8 466.7 396 488.5l-1.8 1.8c-5.3 5.7-8.5 13.4-8.4 21.8z"
        fill=""
        p-id="8019"
      ></path>
      <path
        d="M512 960.5c-60.5 0-119.3-11.9-174.6-35.3-53.4-22.6-101.4-54.9-142.5-96.1-41.2-41.1-73.5-89.1-96.1-142.5C75.4 631.3 63.5 572.5 63.5 512s11.9-119.3 35.3-174.6c22.6-53.4 54.9-101.4 96.1-142.6 41.2-41.2 89.1-73.5 142.6-96.1 55.2-23.3 114-35.2 174.5-35.2s119.3 11.9 174.6 35.3c53.4 22.6 101.4 54.9 142.6 96.1 41.2 41.2 73.5 89.1 96.1 142.6 23.4 55.3 35.3 114.1 35.3 174.6s-11.9 119.3-35.3 174.6c-22.7 53.3-55 101.3-96.2 142.4-41.2 41.2-89.1 73.5-142.6 96.1-55.2 23.4-114 35.3-174.5 35.3z m0-832c-211.5 0-383.5 172-383.5 383.5s172 383.5 383.5 383.5 383.5-172 383.5-383.5-172-383.5-383.5-383.5z"
        fill=""
        p-id="8020"
      ></path>
    </svg>
    <svg
      t="1670036533574"
      @click="$router.go(+1)"
      class="icon2"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8927"
      width="200"
      height="200"
    >
      <path
        d="M511.1 511.1l1.8 1.8-1.8-1.8zM513.1 510.9l-2.2 2.2c0.8-0.7 1.5-1.4 2.2-2.2z"
        fill="#FFFFFF"
        p-id="8928"
      ></path>
      <path
        d="M629.7 490.3l-1.8-1.8-21.8-21.8L440.4 301c-12.4-12.5-32.8-12.5-45.2-0.1-12.4 12.5-12.4 32.9 0 45.3L560.9 512 395.1 677.7c-12.4 12.5-12.4 32.9 0 45.3 12.5 12.4 32.9 12.4 45.3 0l165.7-165.7 21.5-21.5 2.2-2.2c5.2-5.7 8.3-13.2 8.3-21.5 0.1-8.4-3.1-16.1-8.4-21.8z"
        fill=""
        p-id="8929"
      ></path>
      <path
        d="M512 960.5c-60.5 0-119.3-11.9-174.6-35.3-53.4-22.6-101.4-54.9-142.5-96.1-41.2-41.1-73.5-89.1-96.1-142.5C75.4 631.3 63.5 572.5 63.5 512s11.9-119.3 35.3-174.6c22.6-53.4 54.9-101.4 96.1-142.6 41.2-41.2 89.1-73.5 142.6-96.1 55.2-23.3 114-35.2 174.5-35.2s119.3 11.9 174.6 35.3c53.4 22.6 101.4 54.9 142.6 96.1 41.2 41.2 73.5 89.1 96.1 142.6 23.4 55.3 35.3 114.1 35.3 174.6s-11.9 119.3-35.3 174.6c-22.7 53.3-55 101.3-96.2 142.4-41.2 41.2-89.1 73.5-142.6 96.1-55.2 23.4-114 35.3-174.5 35.3z m0-832c-211.5 0-383.5 172-383.5 383.5s172 383.5 383.5 383.5 383.5-172 383.5-383.5-172-383.5-383.5-383.5z"
        fill=""
        p-id="8930"
      ></path>
    </svg>

    <div class="flex-grow" />
    <el-menu-item index="/" class="divBar">发现音乐</el-menu-item>
    <el-menu-item index="aboutUs" @click="myHomepage" class="divBar1"
      >关于我们</el-menu-item
    >
    <el-input
      class="b"
      v-model="aaa"
      color="pink"
      size="large"
      placeholder="搜索"
      style="width: 10%; height: 2.2em"
      @keyup.enter="sss"
    />
    <el-button type="primary" @click="sss" class="c">搜索</el-button>
  </el-menu>
  <el-row class="tac">
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-row>
  <div class="musicplay">
    <div class="bottom_left">
      <img
        :src="ccc"
        class="img_tp"
        :class="!revolve ? 'img_tp_active' : 'img_tp_paused'"
        @click="drawer = true"
      />
      <div class="span_z">
        <div class="span1">
          <span style="font-weight: 900">{{ ddd.name }}</span>
        </div>
        <div class="span2">
          <span>{{ eee.name }}</span>
        </div>
      </div>
    </div>
    <div class="bottom_center">
      <!-- 上一首 -->
      <div class="icc">
        <svg
          t="1668416836310"
          class="icona"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4563"
          width="200"
          height="200"
          @click="acc(-1)"
        >
          <path
            d="M364.302083 465.602819L687.954365 218.588294c38.416414-29.327534 93.791393-1.929039 93.791392 46.396277v494.029051c0 48.325316-55.374979 75.725617-93.791392 46.398084L364.302083 558.397181c-30.600916-23.357989-30.600916-69.436372 0-92.794362zM238.945254 780.798397V451.684117v-164.562559c0-19.628152-5.904521-60.475733 17.057907-75.841215 25.523642-17.068744 59.747828 1.210165 59.747828 31.919454v493.676839c0 19.628152 5.915358 60.473927-17.047069 75.841215-25.53448 17.068744-59.758666-1.211971-59.758666-31.919454z"
            fill="#231815"
            p-id="4564"
          ></path>
        </svg>
        <!-- 播放图标 -->
        <svg
          t="1668416869064"
          class="icona"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6256"
          width="200"
          height="200"
          @click.space="play()"
          v-if="stop"
        >
          <path
            d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z"
            p-id="6257"
          ></path>
        </svg>
        <!-- 暂停图标 -->
        <svg
          t="1668425735348"
          class="icona"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2680"
          width="200"
          height="200"
          @click.space="play()"
          v-if="ppaly"
        >
          <path
            d="M191.397656 128.194684l191.080943 0 0 768.472256-191.080943 0 0-768.472256Z"
            p-id="2681"
          ></path>
          <path
            d="M575.874261 128.194684l192.901405 0 0 768.472256-192.901405 0 0-768.472256Z"
            p-id="2682"
          ></path>
        </svg>
        <!-- 下一首 -->
        <svg
          t="1668416805394"
          class="icona"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4000"
          width="200"
          height="200"
          @click="acc(1)"
        >
          <path
            d="M655.706179 465.602819L332.053897 218.588294c-38.414608-29.327534-93.791393-1.929039-93.791392 46.396277v494.029051c0 48.325316 55.376785 75.725617 93.791392 46.398084l323.652282-247.014525c30.602722-23.357989 30.602722-69.436372 0-92.794362zM781.064814 780.798397V451.684117v-164.562559c0-19.628152 5.904521-60.475733-17.057907-75.841215-25.523642-17.068744-59.747828 1.210165-59.747828 31.919454v493.676839c0 19.628152-5.915358 60.473927 17.047069 75.841215 25.532673 17.068744 59.758666-1.211971 59.758666-31.919454z"
            fill="#231815"
            p-id="4001"
          ></path>
        </svg>
      </div>
      <div class="progress">
        <el-slider
          class="input_pro"
          :max="updateduration"
          v-model="updateCurrentTime"
          @change="changeProgress"
        />
      </div>
    </div>

    <div class="bottom_right">
      <el-drawer
        class="drawer"
        v-model="drawer"
        direction="btt"
        size="100%"
        :with-header="false"
      >
        <div style="display: flex">
          <svg
            t="1668510262676"
            class="iconab"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3587"
            width="200"
            height="200"
            @click="drawer = false"
          >
            <path
              d="M902.488017 292.831348 510.795057 686.71316l-391.68068-393.880789c-10.214642-10.270924-25.719778-11.294231-34.666544-2.334161-8.925277 9.002025-7.902994 24.607444 2.322905 34.877345l403.651316 405.930219c5.824659 5.847172 13.381775 8.601912 20.463054 8.270361 7.03523 0.267083 14.525831-2.468215 20.306488-8.314363l403.662573-405.886217c10.180873-10.269901 11.248182-25.919323 2.312672-34.877345C928.228261 281.537118 912.712893 282.560424 902.488017 292.831348z"
              p-id="3588"
            ></path>
          </svg>
          <div class="zhz">
            <div class="cipan">
              <img
                src="./assets/cz.png"
                class="img_cz"
                :class="{ img_cz_active: !revolve }"
                alt=""
              />
              <div class="zq">
                <div class="cp">
                  <img src="./assets/cp.png" class="img_cp" alt="" />
                </div>
                <div class="dt">
                  <img
                    :src="ccc"
                    class="img_dt"
                    :class="!revolve ? 'img_dt_active' : 'img_dt_paused'"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="lyric">
              <div
                style="display: flex; flex-direction: column; margin-top: -11%"
              >
                <span
                  style="font-weight: 900; margin-left: -30%; font-size: 200%"
                  >{{ ddd.name }}</span
                >
                <span
                  style="margin-left: -30%; font-size: 120%; font-weight: 900"
                  >{{ eee.name }}</span
                >
              </div>
              <el-scrollbar height="350px" ref="musicLyric" class="aaaaaa">
                <p
                  v-for="item in updatearr"
                  :key="item"
                  :class="{
                    active:
                      updateCurrentTime * 1000 >= item.time &&
                      updateCurrentTime * 1000 < item.pre,
                  }"
                >
                  {{ item.lrc }}
                </p>
              </el-scrollbar>
            </div>
          </div>
          <div class="iccn">
            <svg
              t="1668416836310"
              class="icon6"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4563"
              width="200"
              height="200"
              @click="acc(-1)"
            >
              <path
                d="M364.302083 465.602819L687.954365 218.588294c38.416414-29.327534 93.791393-1.929039 93.791392 46.396277v494.029051c0 48.325316-55.374979 75.725617-93.791392 46.398084L364.302083 558.397181c-30.600916-23.357989-30.600916-69.436372 0-92.794362zM238.945254 780.798397V451.684117v-164.562559c0-19.628152-5.904521-60.475733 17.057907-75.841215 25.523642-17.068744 59.747828 1.210165 59.747828 31.919454v493.676839c0 19.628152 5.915358 60.473927-17.047069 75.841215-25.53448 17.068744-59.758666-1.211971-59.758666-31.919454z"
                fill="#231815"
                p-id="4564"
              ></path>
            </svg>
            <!-- 播放图标 -->
            <svg
              t="1668416869064"
              class="icon6"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6256"
              width="200"
              height="200"
              @click.space="play()"
              v-if="stop"
            >
              <path
                d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z"
                p-id="6257"
              ></path>
            </svg>
            <!-- 暂停图标 -->
            <svg
              t="1668425735348"
              class="icon6"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2680"
              width="200"
              height="200"
              @click.space="play()"
              v-if="ppaly"
            >
              <path
                d="M191.397656 128.194684l191.080943 0 0 768.472256-191.080943 0 0-768.472256Z"
                p-id="2681"
              ></path>
              <path
                d="M575.874261 128.194684l192.901405 0 0 768.472256-192.901405 0 0-768.472256Z"
                p-id="2682"
              ></path>
            </svg>
            <!-- 下一首 -->
            <svg
              t="1668416805394"
              class="icon6"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4000"
              width="200"
              height="200"
              @click="acc(1)"
            >
              <path
                d="M655.706179 465.602819L332.053897 218.588294c-38.414608-29.327534-93.791393-1.929039-93.791392 46.396277v494.029051c0 48.325316 55.376785 75.725617 93.791392 46.398084l323.652282-247.014525c30.602722-23.357989 30.602722-69.436372 0-92.794362zM781.064814 780.798397V451.684117v-164.562559c0-19.628152 5.904521-60.475733-17.057907-75.841215-25.523642-17.068744-59.747828 1.210165-59.747828 31.919454v493.676839c0 19.628152-5.915358 60.473927 17.047069 75.841215 25.532673 17.068744 59.758666-1.211971 59.758666-31.919454z"
                fill="#231815"
                p-id="4001"
              ></path>
            </svg>
          </div>
          <div class="progress1">
            <el-slider
              class="input_pro1"
              :max="updateduration"
              v-model="updateCurrentTime"
              @change="changeProgress"
            />
          </div>
        </div>
      </el-drawer>
    </div>
  </div>

  <audio ref="audio" autoplay :src="url"></audio>
  <div
    style="
      width: 100%;
      margin-top: 2% auto;
      padding: 20px 0;
      text-align: center;
    "
  >
    <img src="./assets/备案图标.png" alt="" />
    <a
      target="_blank"
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21148102000113"
      style="
        display: inline-block;
        text-decoration: none;
        height: 20px;
        line-height: 20px;
      "
      ><img src="" style="float: left" />
      <p
        style="
          float: left;
          height: 20px;
          line-height: 20px;
          margin: 0px 0px 0px 5px;
          color: #939393;
        "
      >
        辽公网安备 21148102000113号
      </p></a
    >

    <a
      href="https://beian.miit.gov.cn/"
      style="text-decoration: none"
      target="_blank"
      ><p style="margin-left: 2%; color: #939393">辽ICP备2022009985号</p></a
    >
  </div>
</template>
  
<script>
import { useRouter } from "vue-router";
import { ref, onMounted, watch, onUpdated, reactive } from "vue";
import { getMusic, getSearch, getMusicLyric } from "./request/api/home";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const musicLyric = ref("");
    const aaa = ref("");
    const audio = ref("");
    const store = useStore();
    let stop = ref(true);
    let ppaly = ref(false);
    let bbb = ref([]);
    let url = ref("");
    let revolve = ref(true);
    let ccc = ref(
      "https://ts1.cn.mm.bing.net/th/id/R-C.d2f9f4128e684ba537fe9efaf92f1bfd?rik=makKOA%2fy5qn6fA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2021%2f04-21%2f99518%2fwater_99518_698_698_.png&ehk=c%2bb01RyizJwmfF4speWlE1bpkSRCtyxWZlU%2f6TPecHk%3d&risl=&pid=ImgRaw&r=0"
    );
    let ddd = ref("");
    let eee = ref("");
    const drawer = ref(false);
    let updateduration = ref("");
    let interVal = ref("");
    let updateCurrentTime = ref("");
    let updatelyric = ref("");
    let updatearr = ref([]);
    url.value = store.state.url;
    store.state.currentTime = audio.value.currentTime;
    updateduration.value = 100;
    function sss() {
      router.push({
        path: "/search",
        query: {
          router: aaa.value,
        },
      });
    }
    function play() {
      if (audio.value.paused) {
        audio.value.play();
        // console.log(audio.value);
        //点击转换播放图标
        stop.value = !stop.value;
        ppaly.value = !ppaly.value;
        revolve.value = !revolve.value;
        updateTime();
      } else {
        // console.log(store.state.playListIndex);
        audio.value.pause();
        //点击转换暂停图标
        stop.value = !stop.value;
        ppaly.value = !ppaly.value;
        revolve.value = !revolve.value;
        //清除定时器
        clearInterval(interVal.value);
      }
    }
    async function acc(num) {
      let index = store.state.playListIndex + num;
      store.state.playListIndex = store.state.playListIndex + num;
      // console.log(index);
      if (index < 0) {
        index = store.state.playList.length - 1;
      } else if (index == store.state.playList.length) {
        index = 0;
      }
      let res = await getMusic(store.state.playList[index].id);
      // console.log(res);
      store.state.url = res.data.data[0].url;
      url.value = store.state.url;
      ccc.value = store.state.playList[index].al.picUrl;
      ddd.value = store.state.playList[index];
      eee.value = store.state.playList[index].ar[0];
      if (stop.value == true) {
        stop.value = !stop.value;
        ppaly.value = !ppaly.value;
        revolve.value = !revolve.value;
      }
    }
    function duration() {
      updateduration.value = parseInt(audio.value.duration);
    }
    function updateTime() {
      interVal.value = setInterval(() => {
        updateCurrentTime.value = parseInt(audio.value.currentTime);
      }, 500);
    }
    async function autoplay() {
      let ggg = store.state.playListIndex + 1;
      store.state.playListIndex = ggg;
      console.log(ggg);
      if (ggg == store.state.playList.length) {
        ggg = 0;
      }
      let rgg = await getMusic(store.state.playList[ggg].id);
      store.state.url = rgg.data.data[0].url;
      // console.log(rgg);
      // console.log(rgg.data);
      url.value = store.state.url;
      ccc.value = store.state.playList[ggg].al.picUrl;
      ddd.value = store.state.playList[ggg];
      eee.value = store.state.playList[ggg].ar[0];
      updateCurrentTime.value = 0;
      // console.log(url.value);
    }
    function changeProgress(num) {
      // console.log(e);
      // 修改当前播放时间
      updateCurrentTime.value = num;
      // 改变audio的实际当前播放时间
      audio.value.currentTime = updateCurrentTime.value;
    }
    async function lyric() {
      let rrrra = await getMusicLyric(
        store.state.playList[store.state.playListIndex].id
      );
      updatelyric.value = rrrra.data.lrc.lyric;
      if (updatelyric.value) {
        updatearr.value = updatelyric.value
          .split(/[(\r\n)\r\n]+/)
          .map((item, i) => {
            let min = item.slice(1, 3);
            let sec = item.slice(4, 6);
            let msec = item.slice(7, 10);
            let lrc = item.slice(11, item.length);
            let time =
              parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(msec);
            if (isNaN(Number(msec))) {
              msec = item.slice(7, 9);
              lrc = item.slice(10, item.length);
              time =
                parseInt(min) * 60 * 1000 +
                parseInt(sec) * 1000 +
                parseInt(msec);
            }
            return { min, sec, msec, lrc, time };
          });
        updatearr.value.forEach((item, i) => {
          if (i == updatearr.value.length - 1) {
            item.pre = 0;
          } else {
            item.pre = updatearr.value[i + 1].time;
          }
        });
        // console.log(updatearr.value);
        return updatearr.value;
      }
    }
    function currentTime() {
      let p = document.querySelector("p.active");

      if (p) {
        // console.log(p.offsetTop);
        if (p.offsetTop > 170) {
          musicLyric.value.setScrollTop(p.offsetTop - 170);
        }
      }
    }
    function myHomepage() {
      ElMessageBox.alert("This is a message");
    }
    onMounted(async () => {
      let res = await getSearch();
      // console.log(res);
      updateTime();
    });
    onUpdated(() => {
      duration();
      lyric();
    });
    watch(() => {
      currentTime();
      if (url.value != store.state.url) {
        url.value = store.state.url;
        // console.log(Date());
        //判断是否播放歌曲 播放歌曲转换为播放图标
        if (stop.value == true) {
          stop.value = !stop.value;
          ppaly.value = !ppaly.value;
          revolve.value = !revolve.value;
        }
        store.state.playListIndex = store.state.playList.findIndex(
          (res) => res.id == store.state.id
        );
        ccc.value = store.state.playList[store.state.playListIndex].al.picUrl;
        ddd.value = store.state.playList[store.state.playListIndex];
        eee.value = store.state.playList[store.state.playListIndex].ar[0];
      }
      if (updateCurrentTime.value === updateduration.value) {
        autoplay();
      }
    });
    return {
      audio,
      aaa,
      bbb,
      sss,
      url,
      play,
      stop,
      ppaly,
      ccc,
      revolve,
      ddd,
      eee,
      drawer,
      acc,
      updateduration,
      duration,
      updateTime,
      interVal,
      updateCurrentTime,
      changeProgress,
      autoplay,
      updatelyric,
      updatearr,
      lyric,
      musicLyric,
      currentTime,
      myHomepage,
    };
  },
};
</script>
<style lang="less" scoped>
* {
  margin: 0%;
  padding: 0%;
}
.el-menu-demo {
  width: 100%;
  height: 5%;
  background-color: #ec4141;
  display: flex;
}
.b {
  margin-top: 1%;
  margin-left: 15%;
}
.c {
  margin-top: 1%;
}
.d {
  height: 72em;
}
a {
  color: black;
}

.icon1 {
  width: 2%;
  height: 2%;
  margin-left: 10%;
  margin-top: 1%;
}
.icon2 {
  width: 2%;
  height: 2%;
  margin-left: 0.1%;
  margin-top: 1%;
}
.bottom_center {
  display: flex;
  flex-direction: column;
}
.icc {
  margin-left: 15%;
  display: flex;
  justify-content: space-around;
}
.iconb {
  width: 50%;
  height: 50%;
  margin-top: 1%;
  margin-left: 10%;
}
.musicplay {
  display: flex;
  position: fixed;
  bottom: 0px;
  z-index: 10;
  background-color: white;
  width: 100%;
  height: 7.5%;
}
.progress {
  width: 100%;
  margin-top: -16%;
  margin-left: 20%;
}
.input_pro {
  width: 80%;
}

.img_tp {
  height: 100%;
  border-radius: 50%;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  animation: rotate_tp 30s linear infinite;
}
.img_tp_active {
  animation-play-state: running;
}
.img_tp_paused {
  animation-play-state: paused;
}
@keyframes rotate_tp {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.icona {
  width: 30%;
  height: 30%;
  margin-top: 1%;
  margin-left: 10%;
}
.iconc {
  width: 50%;
  height: 50%;
  margin-top: 1%;
  margin-left: 10%;
}
.bottom_left {
  display: flex;
  width: 27%;

  .spanz {
    width: 100%;
    .span1 {
      margin-top: 3%;
    }
  }
  .span2 {
    margin-top: 5%;
  }
}
.iconab {
  width: 2%;
  margin-top: 0%;
}
.cipan {
  height: 50%;
  width: 50%;
  .img_cz {
    width: 15%;
    height: 40%;
    margin-left: 47%;
    margin-top: 15%;
    transform-origin: 0 0;
    transform: rotate(-30deg);
    transition: all 2s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    z-index: 2;
  }
  .img_cz_active {
    width: 15%;
    height: 40%;
    margin-left: 47%;
    margin-top: 15%;
    transform-origin: 0 0;
    transform: rotate(0deg);
    transition: all 2s;
  }
  .img_cp {
    width: 100%;
    z-index: 1;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
}
.img_dt {
  width: 100%;
  border-radius: 50%;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  animation: rotate_dt 30s linear infinite;
}
.img_dt_active {
  animation-play-state: running;
}
.img_dt_paused {
  animation-play-state: paused;
}

@keyframes rotate_dt {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.center_1 {
  width: 50%;
}
.divBar {
  margin-left: 10%;
  font-size: 30px;
}
.divBar1 {
  margin-left: 20%;
  font-size: 30px;
}
.cp {
  margin-left: 22%;
  width: 50%;
  margin-top: 42%;
}
.dt {
  width: 33%;
  margin-left: 31%;
  margin-top: -42%;
}
.zq {
  margin-top: -55%;
}
.iccn {
  width: 50%;
  margin-top: 33%;
  margin-left: -60%;
}
.icon6 {
  width: 10%;
  margin-left: 18%;
}
.progress1 {
  width: 80%;
  margin-top: 46%;
  margin-left: -50%;
}
.input_pro1 {
  width: 70%;
}
.lyric {
  margin-left: -10%;
  margin-top: 5%;
  text-align: center;
  height: 35%;
  width: 60%;
}
p {
  margin-bottom: 5%;
  margin-left: -30%;
  height: 5%;
}
.active {
  color: rgb(234, 14, 14);
  font-size: 200%;
}
.zhz {
  height: 100%;
  display: flex;
  width: 100%;
}
.aaaaaa {
  scroll-behavior: smooth;
}
</style>