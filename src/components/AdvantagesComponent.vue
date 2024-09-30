<script setup>
import SectionTitle from './ui/SectionTitle.vue';
import AdvantageBlock from './blocks/AdvantageBlock.vue';
let adv_list = [
  {
    filename: 'adv_1.svg',
    number: 482,
    text: 'Организаций поддержки по Российской Федерации'
  },
  {
    filename: 'adv_2.svg',
    number: 5240,
    text: 'Оказано услуг государственной поддержки'
  },
  {
    filename: 'adv_3.svg',
    number: 1360,
    text: 'Зарегестрировано участников проекта'
  }
]
</script>

<template>
  <div class="container flex flex-col mx-auto max-w-screen-xl px-2 items-center justify-center pt-[100px]">
    <SectionTitle>Преимущества</SectionTitle>
    <div class="flex flex-col md:flex-row pt-[100px] justify-around">
      <AdvantageBlock v-for="item in adv_list" :data=item>
        <img :src="`/advs/${item.filename}`" class="md:min-h-[200px]">
      </AdvantageBlock>
    </div>
  </div> 
</template>