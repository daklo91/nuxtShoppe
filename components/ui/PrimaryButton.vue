<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scope>
.button {
  background-color: black;
  border: 0.5px solid rgba(217, 217, 217, 0.8);
  border-radius: 6px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  padding: 15px 58px;
  margin: auto;
  display: block;
  cursor: pointer;
  transition: 0.1s;
}
.button:hover {
  background-color: rgb(46, 46, 46);
}
.button:active {
  transform: scale(1.075);
}
</style>
