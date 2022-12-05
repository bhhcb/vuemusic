import axios from "axios";
let service=axios.create({
    baseURL:"http://wangyuzhu.cn:3009",
    timeout:8000

})
export default service
