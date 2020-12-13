<template>
  <div class="app">
    <div class="content">
      <span v-show="check" class="congrat">Congratulations!!!</span>
      <Circle v-show="!check"></Circle>
      <h1 class="header">New Year – 2021!</h1>
      <h2 v-show="!check" class="description">Time to New Year:</h2>
      <Counter v-show="!check" v-model:check="check"></Counter>
      <img class="tree" src="./assets/Christmas_Tree.png">
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Circle from './components/Circle.vue'

import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    Counter,
    Circle 
  },
  setup() {
    let check = ref(false);

    return {
      check,
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

body{
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Itim', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

.app {
  background: rgba(0, 0, 0, .5) url(./assets/NY.png) no-repeat center;
  background-blend-mode: darken;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
}

.content {
  margin: auto;
}

h1.header {
  font-size: 70px;
  margin: 40px 0 30px 0;
}

h2.description {
  font-size: 46px;
  margin: 0;
}

.tree {
  width: 50px;
  height: 50px;
  margin-top: 40px;
}

.congrat {
  font-size: 60px;
}

@media (max-width: 600px) {
  h1.header {
    font-size: calc(1em + 7.5vw);
  }
  h2.description {
    font-size: calc(1em + 5.5vw);
  }
  .congrat {
    font-size: calc(1em + 7vw);
  }
}
</style>
