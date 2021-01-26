<template>
    <div>
        <MyBtn :some-props=somePros />
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import MyBtn from './MyBtn';
export default defineComponent({
  name: 'App',
  components: {
      MyBtn,
  },
  async setup() {
      return {
          somePros: {}
      }
  }
});
</script>