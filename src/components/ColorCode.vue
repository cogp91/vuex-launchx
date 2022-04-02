<template>
    <div>
      <input :style="{color: $store.state.color}" type="text" placeholder="Type a code color or a color" v-model="colorChange" >
    </div>
</template>

<script>
export default {
  name: 'ColorCode',
  computed: {
    colorChange: {
      get(){
        return this.$store.state.color;
      },
      set(color){
        this.$store.dispatch("colorChange",color);
      }
    }
  },
}
</script>

<style scoped>
input{
    font-size: 20px;
    margin-top: 20px;
    width: 300px;
    background: lightgrey;
}
</style>