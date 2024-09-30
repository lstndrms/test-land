<script setup>
import UIButton from './ui/UIButton.vue';
</script>
<template>
    <div class="container flex mx-auto items-center max-w-screen-xl sm:min-h-[276px] lg:min-h-[378px] px-2">
        <div class="flex place-content-around w-full md:pt-4">
            <div class="flex flex-col">
                <p class="text-center text-dark-black font-circe font-bold text-[20px] md:text-[30px] leading-[117.4%] mb-[35px]">
                    Для начала работы ответьте на вопрос, <br/> есть ли у Вас уже существующий бизнес?
                </p>
                <div class="flex flex-col md:flex-row justify-around gap-[30px]">
                    <UIButton :bg_color="'bg-warm-red'">
                        <span class="text-center text-white font-circe font-normal text-[16px]">Да, у меня уже есть бизнес</span>
                    </UIButton>
                    <UIButton :bg_color="'bg-royal-blue'">
                        <span class="text-center text-white font-circe font-normal text-[16px]">Нет, но планирую открыть</span>
                    </UIButton>
                </div>
            </div>
        </div>
    </div>
</template>

