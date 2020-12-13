<template>
  <div class="circle">
    <div class="back">
      <div class="front"></div>
    </div>
    <img class="snowflake" src="./../assets/Snowflake.png">
  </div>
</template>

<script>
export default {
  name: 'Circle',
}
</script>

<style scoped lang="scss">
.circle {
  display: flex;
  position: relative;
}

.snowflake {
  width: 50px;
  height: 50px;
  position: absolute;
  left: calc(50% - 25px);
  top: calc(50% - 23px);
}

.back {
  margin: auto;
  width: 100px;
  height: 100px;
  border: 3px solid #ffffff;
  border-radius: 80px;
}

.front {
  margin-top: -6px;
  margin-left: -6px;
  width: 94px;
  height: 94px;
  border: 9px solid #ffffff;
  border-radius: 80px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  animation: 1s linear 0s infinite rotateFlake;
}

@keyframes rotateFlake {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
