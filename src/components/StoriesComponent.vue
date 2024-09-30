<script setup>
import SectionTitle from './ui/SectionTitle.vue';
import StoryBlock from './blocks/StoryBlock.vue';
let adv_list = [
  {
    filename: 'photo_1.svg',
    title: 'Пекарня “Русские традиции”',
    quote: 'Как говорит сам Владимир: «мне хотелось, чтобы все узнали, что такое русская кухня», «обьяснить, что она жива».',
    text: 'Чтобы мини-пекарня стала рентабельным бизнесом, необходимы строгие расчеты, учет рисков и перспектив, анализ рынка, налаживание сбыта.'
  },
  {
    filename: 'photo_2.svg',
    title: 'Автомастерская',
    quote: 'Первые дни независимости. Когда не нужно рано вставать, когда не нужно отпрашиваться, что бы успеть съездить в магазин, когда удобно.',
    text: 'Встреча в городе Н с моими будущими партнерами была плодотворной. Я не смог заснуть до пяти утра – не потому что не спалось, но потому что мысли о будущих перспективах просто взрывали мой мозг.'
  },
  {
    filename: 'photo_3.svg',
    title: 'Салон красоты “Эмират”',
    quote: 'Когда же появилась возможность открыть свой бизнес, я рассматривала различные варианты, изучала всевозможные направления.',
    text: ''
  }
]
</script>
<template>
<div class="container flex flex-col mx-auto max-w-screen-xl px-2 items-center justify-center py-[100px]">
  <SectionTitle>Истории успеха</SectionTitle>
  <div class="flex flex-col pt-[100px] justify-between w-full">
    <StoryBlock v-for="(item, index) in adv_list" :key="index" :data=item :first="(index % 2 === 0)">
      <img :src="`/photos/${item.filename}`" class="md:min-h-[300px] md:min-w-[40%]">
    </StoryBlock>
    </div>
  </div> 
</template>