<template>
    <div class="flex flex-col md:flex-row items-center md:items-start justify-between w-full mb-[100px]">
        <slot v-if="first"></slot>
        <div class="flex flex-col items-start justify-start min-h-[300px] pt-[30px]  max-w-[50%]">
            <p class="text-dark-black font-circe font-bold text-[22px] md:text-[28px]">{{ data.title }}</p>
            <div class="flex w-full items-start gap-4 py-6">
                <img src="../../assets/decorator_story.svg">
                <span class="text-warm-red font-circe font-bold text-[16px] md:text-[20px] leading-[122.4%]">
                    {{ data.quote }}
                </span>
            </div>
            <p class="text-dark-black font-circe font-normal text-[16px] md:text-[20px] leading-[122.4%] py-6">{{ data.text }}</p>
            <UIButton :bg_color="'bg-royal-blue'">
                <span class="px-4 py-2 text-white">Читать историю</span>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.01 3.65891H0V5.81888H12.01V9.05884L16 4.73889L12.01 0.418945V3.65891Z" fill="white"/>
                </svg>
            </UIButton>
        </div>
        <slot v-if="!first"></slot>
    </div>
</template>

<script>
import UIButton from '../ui/UIButton.vue';
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    first: {
        type: Boolean,
        default: true
    }
  },
  components: {
    UIButton
  }
};
</script>