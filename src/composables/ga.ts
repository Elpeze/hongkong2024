import { useGtag } from "vue-gtag-next";


export const gaEvent = (params: any) => {
    const { event } = useGtag();
    const route = useRoute();
    let eventName = 'go';
    if (params.event) {
        eventName = `${eventName}_${params.event}`;
    }
    if (params.page) {
        eventName = `${eventName}_${route.name as string}`;
    }
    if (params.location) {
        eventName = `${eventName}_${params.location}`;
    }
    if (params.channel) {
        eventName = `${eventName}_${params.channel}`;
    }
    console.log(eventName);
    event(eventName);
}