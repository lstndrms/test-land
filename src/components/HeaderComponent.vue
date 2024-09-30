<script setup>
import UIButton from './ui/UIButton.vue';
</script>
<template>
  <div class="container flex justify-between mx-auto max-w-screen-xl h-full py-[35px]  px-2">
    <div class="inline-flex items-center gap-x-4 md:gap-x-[35px]">
      <UIButton :bg_color="'bg-warm-red'">
        <span class="text-center text-white font-circe font-normal text-[16px]">
          Личный кабинет
        </span>
      </UIButton>
      <span class="text-center text-dark-black font-circe font-bold text-[16px] cursor-pointer">
        Каталог услуг
      </span>
    </div>
    <div class="inline-flex items-center gap-x-[12px]" >
      <img src="../assets/helper.svg" class="cursor-pointer">
      <span class="hidden md:block text-center text-warm-red font-circe font-bold text-[16px] cursor-pointer">Онлайн помощник</span>
    </div>
  </div>
</template>