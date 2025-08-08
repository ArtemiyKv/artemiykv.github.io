<script lang="ts" setup>
let hamburgerState = ref<boolean>(false)

const hamburgerStateSwitch = computed(() => {
  hamburgerState.value = !hamburgerState.value
})


let handler = null;
onMounted(() => {
  hamburgerClosureHandler();
})
onBeforeMount(() => {
  handler = scrollHandler();
  handler();
})

function hamburgerClosureHandler(): void {
  const headerHook = document.querySelector('.header');
  const hamburgerHook = document.querySelector('.mobile-menu');
  document.addEventListener('click', (event) => {
    let eventTarget = event.target as Node | null
    if (!headerHook?.contains(eventTarget)) {
      hamburgerState.value = false;
    }
  })
}

function scrollHandler() {
  const navHook = document.querySelector('nav');
  const navHeight = navHook?.clientHeight;

  function underlineAddHandler(): void {
    if (navHeight) {
      if (window.scrollY > navHeight) {
        navHook?.classList.add('underline');
        document.removeEventListener('scroll', underlineAddHandler);
        document.addEventListener('scroll', underlineRemoveHandler)
      }
    } else return
  }

  function underlineRemoveHandler(): void {
    if (navHeight) {
      if (window.scrollY < navHeight) {
        navHook?.classList.remove('underline');
        document.removeEventListener('scroll', underlineRemoveHandler);
        document.addEventListener('scroll', underlineAddHandler)
      }
    } else return
  }

  document.addEventListener('scroll', underlineAddHandler)
  return underlineAddHandler;
}

</script>


<template>
  <nav>
    <section class="header">
        <a href="/" class="header__logo">
        <img src="/public/images/jo_logo.svg">
        <p>Avila Reese</p>
        </a>
      <div class="header__links">
        <a href="/#skills" >Skills</a>
        <a href="/#experience" >Experience</a>
        <a href="/#about" >About</a>
        <a href="/#projects" >Projects</a>
        <a href="/#contacts" >Contact Me</a>
      </div>
      <div class="header__hamburger" v-on:click="hamburgerStateSwitch">
        <div class="span__container" :class="{ active: hamburgerState }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
    <section class="mobile-menu" :class="{ active: hamburgerState }">
      <div class="mobile-menu__links">
        <a href="/#skills" target="_blank">Skills</a>
        <a href="/#experience" target="_blank">Experience</a>
        <a href="/#about" target="_blank">About</a>
        <a href="/#projects" target="_blank">Projects</a>
        <a href="/#contacts" target="_blank">Contact</a>
      </div>
    </section>
  </nav>
</template>


<style lang="scss" scoped>
@use "/assets/scss/app/header";
</style>