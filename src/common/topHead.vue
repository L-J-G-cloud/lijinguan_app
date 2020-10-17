<template>
    <div class="header">
        {{title}}
    </div>
</template>

<script>
export default {
    props:["title"]
}
</script>

<style scoped>
.header {
    font-size: .4rem;
    height: .8rem;
    line-height: .8rem;
    color: #fff;
    text-align: center;
    background: #f90;
}
</style>