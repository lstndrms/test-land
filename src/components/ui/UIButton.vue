<template>
    <div class="inline-flex items-center rounded-full py-2 px-8 cursor-pointer justify-center" :class="bg_color" >
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    bg_color: {
      type: String,
      default: ''
    },
  },
};
</script>