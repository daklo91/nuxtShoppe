<template>
  <div>
    <h2><slot /></h2>
    <ul>
      <li v-for="item in filteredStoreItems" :key="item.id">
        <NuxtLink :to="'/' + item.id">
          <img :src="item.image" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdvertiseBytCategory',
  props: {
    category: {
      type: String,
      default: null,
    },
    storeItems: {
      type: Array,
      default: null,
    },
  },
  computed: {
    filteredStoreItems() {
      return this.storeItems.filter((item) => {
        return item.category === this.category
      })
    },
  },
}
</script>

<style scoped>
h2 {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  width: 124px;
  height: 124px;
  margin: 20px;
  cursor: pointer;
  transition: 0.3s;
  border: 0.5px solid rgba(217, 217, 217, 0.8);
  border-radius: 8px;
  padding: 10px;
  background-color: white;
}

li:hover {
  transform: scale(1.2);
}

img {
  display: block;
  margin: auto;
  height: 120px;
  width: 100%;
  object-fit: contain;
}
</style>
