<script setup lang="ts">

import type {PropType} from "vue";
import type {MyProjectsResponseType} from "~/contracts/MyProjectsResponseType";

defineProps({
  projects: {
    type: Object as () => MyProjectsResponseType,
    // type: Array as PropType<Array<MyProjectsResponseType>>
  }
})

</script>

<template>
<article class="projects" id="projects">
  <h1 class="article-title">
    My <b>Projects</b>
  </h1>
  <div v-for="project in projects?.body" class="project__item">
    <div class="project__item__image">
      <img :src="`images/projects/${project.img}.jpg`" alt="project-image">
    </div>
    <div class="project__item__text">
      <h2>{{ project.index }}</h2>
      <h2>{{ project.title }}</h2>
      <p>{{project.text}}</p>
      <nuxt-link :to="`${project.link}`" ><img src="/images/linkWhite.svg">Visit project</nuxt-link>
    </div>
  </div>
</article>
</template>

<style scoped lang="scss">
@use "/assets/scss/app/projects";
</style>