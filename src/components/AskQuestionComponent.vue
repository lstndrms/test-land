<script setup>
import UIButton from './ui/UIButton.vue';
</script>

<template>
    <div class="flex flex-col items-center gap-6 min-h-[300px] transform scale-y-[-1] py-[70px]">
        <span class="text-center font-circe font-bold text-[25px] md:text-[35px]">Есть вопросы?</span>
        <span class="text-center font-circe font-normal text-[16px] md:text-[20px] md:max-w-[33%]">Задайте интересующие вас вопросы онлайн помощнику</span>
        <UIButton :bg_color="'bg-warm-red'">
            <div class="flex items-center gap-4">
                <img src="../assets/simple_helper.svg">
                <span class="text center text-white font-circe font-bold text-[16px] md:text-[20px]">Онлайн помощник</span>
            </div>
        </UIButton>
    </div>
</template>