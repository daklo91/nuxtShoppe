<template>
  <div v-if="item">
    {{ item.title }}
    <button @click="undo(item.uid)">Undo</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      timeout: null,
    }
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.$store.commit('REMOVE_FROM_STORAGE', this.item.uid)
      console.log(this.item.uid)
    }, 6000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: {
    undo(uid) {
      console.log(uid)
      this.$store.commit('UNDO_REMOVE', this.item.uid)
    },
  },
}
</script>

<style scoped></style>
