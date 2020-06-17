<template>
    <div class="page">
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style style="scss" scoped>
    .page {
        display: grid;
        grid-template-columns: 20vm auto;
    }

    .main {
        grid-column-start: 2;
    }
</style>