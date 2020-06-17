<template>
  <div>
    <the-sidebar/>
    <the-page />
  </div>
</template>

<script>
export default {
  components: {
    TheSidebar: () => import("./components/TheSidebar"),
    ThePage: () => import("./components/ThePage"),
  }
}
</script>

<style lang="scss">
</style>
