<template>
  <div v-if="item" class="snackbar-container">
    <img class="snackbar-image" :src="item.image" />
    <div class="text">{{ item.title }}</div>
    <SecondaryButton
      class="undo-button"
      @click.native="
        item.status === 'removed' ? undoRemove(item.uid) : undoCart(item.uid)
      "
      >Undo {{ item.status === 'removed' ? '' : 'purchase' }}</SecondaryButton
    >
  </div>
</template>

<script>
import SecondaryButton from '~/components/ui/SecondaryButton.vue'

export default {
  components: { SecondaryButton },
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
    }, 6000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: {
    undoRemove() {
      this.$store.commit('UNDO_REMOVE', this.item.uid)
    },
    undoCart() {
      this.$store.commit('UNDO_CART', this.item.uid)
    },
  },
}
</script>

<style scoped>
.snackbar-container {
  display: flex;
  align-items: center;
  background-color: white;
  border: 0.5px solid rgba(217, 217, 217, 0.96);
  width: 350px;
  padding: 10px;
  border-radius: 8px;
  margin: 5px;
}

.snackbar-image {
  width: 40px;
}

.text {
  max-width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 20px;
  margin-right: 20px;
}

.undo-button {
  margin-left: 20px;
  padding: 10px 20px;
  margin-left: auto;
  white-space: nowrap;
}

@media screen and (max-width: 420px) {
  .snackbar-container {
    width: 85%;
    margin: auto;
    margin-top: 5px;
  }
}
</style>
