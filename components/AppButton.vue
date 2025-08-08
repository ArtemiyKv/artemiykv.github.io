<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String
  },
  pic: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'white'
  }
})

const isButtonBlack = computed(()=>{
  return props.color == 'black' ? true : false
})
</script>

<template>
  <button :class="{'button--black': isButtonBlack}">
    <p >{{ label }}</p>
    <Icon v-if="pic" name="material-symbols:download-rounded" />
    <!-- <img v-if="pic" :src=""> -->
  </button>
</template>

<style lang="scss" scoped>
@use "/assets/scss/app/button";


</style>