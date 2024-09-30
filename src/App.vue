<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import SloganComponent from './components/SloganComponent.vue';
import QuestionComponent from './components/QuestionComponent.vue';
import AdvantagesComponent from './components/AdvantagesComponent.vue';
import StoriesComponent from './components/StoriesComponent.vue';
import AskQuestionComponent from './components/AskQuestionComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="relative bg-cover bg-center bg-[url('./assets/background.svg')] min-h-[884px]">
    <div class="3xl:min-h-[1600px] lg:min-h-[1200px] md:min-h-[900px] sm:min-h-[768px] min-h-[600px]">
      <HeaderComponent/>
    <SloganComponent/>
    </div>
    <QuestionComponent/>
  </div>
  <AdvantagesComponent/>
  <StoriesComponent/>
  <div class="relative bg-cover bg-bottom transform scale-y-[-1] bg-[url('./assets/rounded.svg')] min-h-[300px]">
    <AskQuestionComponent/>
  </div>
  <div class="bg-dark-black flex w-full">
    <FooterComponent/>
  </div>
</template>
