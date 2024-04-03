import type { DefineComponent } from 'vue';
import type { ComponentPropsAndEmits } from '@morev/vue-transitions';

declare module 'vue' {
	export interface GlobalComponents {
		TransitionExpand: DefineComponent<ComponentPropsAndEmits['TransitionExpand']>;
		TransitionSlide: DefineComponent<ComponentPropsAndEmits['TransitionSlide']>;
		TransitionScale: DefineComponent<ComponentPropsAndEmits['TransitionScale']>;
		TransitionFade: DefineComponent<ComponentPropsAndEmits['TransitionFade']>;
	}
}
