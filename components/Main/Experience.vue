<template>
  <section class="exp" id="experience">
    <div class="exp__wrapper">
      <h1>
        My <b>Experience</b>
      </h1>
      <div class="item" v-for="item in experience?.body">
        <div class="item__title">
          <h2>{{item?.name}}</h2>
          <span>{{item?.date}}</span>
        </div>
        <p>{{item?.text}}</p>
      </div>
    </div>
  </section>
</template>
y
<script lang="ts" setup>
import type { PropType } from 'vue';
import type { ExperienceResponse } from '~/contracts/experienceResponseType';

defineProps({
  experience: {
    type: Array as PropType<Array<ExperienceResponse>>
  }
})
</script>

<style lang="scss" scoped>
@use "/assets/scss/app/experience";
</style>