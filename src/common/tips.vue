<template>
  <div class="tips">
    {{ mesAge }}
  </div>
</template>
<script>
export default {
  props: ["mesAge"],
};
</script>

<style scoped>
.tips {
  position: fixed;
  height: 0.8rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.1rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  line-height: 0.8rem;
}
</style>