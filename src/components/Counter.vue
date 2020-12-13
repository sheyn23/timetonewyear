<template>
  <div class="counter">
   <div class="block" v-for="(time, key) in compTime">
     <div>
       <div class="number">
         {{ time }}         
       </div>
       <div class="text">
          {{ key }}
       </div>
     </div>
     <span class="colon" ref="colon">:</span>
   </div>
  </div>
</template>

<script>
import {ref, computed, onMounted} from 'vue';

export default {
  name: 'Counter',
  setup(props, {emit}) {
    const colon = ref();
    let localTime = ref(new Date());
    const newYearTime = ref(new Date(2020, 11, 31, 23, 59, 59));
    

    let compTime = computed(() => {
      return {
        'days': (newYearTime.value.getDate() - localTime.value.getDate()),
        'hours': (newYearTime.value.getHours() - localTime.value.getHours()),
        'minutes': (newYearTime.value.getMinutes() - localTime.value.getMinutes()),
        'seconds': (newYearTime.value.getSeconds() - localTime.value.getSeconds()),
      }
    });

    function setDate () {
      localTime.value = new Date();
      if (localTime.value >= newYearTime.value) {
        emit('update:check', true);
      }
    };
    
    onMounted(() => {
      colon.value.style.display = 'none';
    });

    return {
      colon,
      localTime,
      newYearTime,
      setDate,
      compTime,
    }
  },
  created() {
    setInterval(this.setDate, 1000);                             
  },
}
</script>

<style scoped lang="scss">
.counter, .block {
  display: flex;
  justify-content: space-around;
}

.number, .colon {
  font-size: 90px;
  font-weight: bold;
}

.colon {
  margin-left: 10px;
}

.text {
  font-size: 38px;
  margin: -22px 0 0 0;
}

@media (max-width: 600px) {
  .number, .colon {
    font-size: calc(1em + 7.6vw);
  }
  .text {
    font-size: calc(1em + 2.4vw);
    margin: -16px 0 0 0;
  }
}
</style>
