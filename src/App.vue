<template>
    <div>
        <MyBtn :some-props=btnPro />
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
          btnPro: {
              data: {
                  info: 'btn info'
              }
          }
      }
  }
});
</script>