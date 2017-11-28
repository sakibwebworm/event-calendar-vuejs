<template>

    <div id="app">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        AllEvent:[],
      }
    },
    created(){
      //// AllEvent(which is storing the entries)
      //this.$localStorage is a variable holding this value 'Event'
      this.AllEvent = JSON.parse(localStorage.getItem(this.$localStorage) || '[]');
    },
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
