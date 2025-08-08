<script setup lang="ts">
import type {ProjectItemResponseType} from "~/contracts/ProjectItemResponseType";

const props = defineProps({
  project: {
    type: Object as PropType<ProjectItemResponseType>
  },
  projectSlug: {
    type: String,
  }
})
</script>

<template>
  <section class="project">
    <div class="text">
      <p>{{ project?.text }}</p>
    </div>
    <div class="media">
      <template v-if="project?.is_animation">
        <img :src="`/images/projects/${projectSlug}/${project?.image}`">
      </template>
      <template v-else-if="project?.is_video">
        <video loop="true" autoplay="true" muted="true"
               :src="`/images/projects/${projectSlug}/${project.video}`"></video>
      </template>
      <template v-else>
        <img :src="`/images/projects/${projectSlug}/${project?.image}`">
      </template>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "assets/scss/slug/project-item.scss";
</style>