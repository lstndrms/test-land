<template>
    <div class="flex flex-col items-center md:max-w-[33%] mb-[100px]">
        <slot></slot>
        <p class="text-center text-royal-blue font-circe font-bold text-[40px] md:text-[50px] leading-[122.4%]">{{ data.number }}</p>
        <p class="text-center text-dark-black font-circe font-bold text-[16px] md:text-[20px] leading-[122.4%]">{{ data.text }}</p>
    </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
  }
};
</script>