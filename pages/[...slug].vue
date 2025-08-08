<script setup lang="ts">

import Projects from "~/components/Main/Projects.vue";

const {path} = useRoute()
const route = useRoute()
const getPath = computed(() => path.split('/').pop())
console.log(getPath.value)

const {data: projectContent} = useAsyncData('project-content', () => queryCollection('project').where('slug', '=', getPath.value).first())
console.log(projectContent)

onMounted(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
})

</script>

<template>
  <section class="project__wrapper">
    <h2>
      {{ projectContent?.title }}
    </h2>
    <template v-for="project in projectContent?.content">
      <ProjectsItem :project="project" :projectSlug="projectContent?.slug"/>
    </template>
  </section>
</template>

<style scoped lang="scss">
@use "assets/scss/slug/slug";
</style>