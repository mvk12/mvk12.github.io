<template>
  <div class="sidebar">
    <p>Sidebar</p>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    width: 20vw;

    #nav {
    padding: 10px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
        color: #42b983;
        }
    }
}
}
</style>