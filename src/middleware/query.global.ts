export default defineNuxtRouteMiddleware((to, from) => {
    // console.log(to);
    // console.log(from);
    if (from.query.cid && !to.query.cid) {
        return navigateTo(`${to.path}?cid=${from.query.cid}`);
    }
})