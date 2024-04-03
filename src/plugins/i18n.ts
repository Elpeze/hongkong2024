export default defineNuxtPlugin((nuxtApp) => {
    if (!process.client) {
        const i18n = nuxtApp.$i18n;
        // console.log(nuxtApp.$i18n)
        const modules  = {
            i18n: i18n
        };
        return {
            provide: {
                i18n: modules,
            },
        };
    }
});