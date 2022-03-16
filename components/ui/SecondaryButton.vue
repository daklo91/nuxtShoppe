<template>
  <button class="secondary-button">
    <slot />
  </button>
</template>

<style scope>
.secondary-button {
  font-weight: bold;
  background-color: rgb(238, 238, 238);
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  margin-left: -4px;
}
.secondary-button:hover {
  background-color: rgb(218, 218, 218);
}
</style>
