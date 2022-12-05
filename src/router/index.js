import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        component:()=> import('../views/home.vue')
    },
    {
        path:"/aboutUs",
        component:()=> import('../views/aboutUs.vue')
    },
    {
        path: "/item",
        component:()=> import('../views/item.vue')
    },
    {
        path: "/search",
        component:()=> import('../views/search.vue')
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
router.afterEach((to,from,next)=>{
    window,scrollTo(0,0)
  })
export default router