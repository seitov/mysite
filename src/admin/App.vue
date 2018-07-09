<template lang="pug">
  .container
    app-header
    app-tabs
</template>

<script>
export default {
  components: {
    appHeader: require("./components/header").default,
    appTabs: require("./components/tabs").default
  }
};
</script>

<style>
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}

.wrapper {
  width: 100%;
}
.admin__header {
  height: 80px;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  background: #00bfa5;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.admin__title {
  width: 50%;
}

.admin__link {
  text-align: end;
  width: 50%;
  color: #fff;
  opacity: 0.5;
  transition: 0.4s;
}
.admin__link:hover {
  opacity: 1;
}

.tabs__wrap {
  height: 60px;
  background-color: #f0efe9;
  font-family: Arial;
  color: #455a64;
  text-transform: uppercase;
  display: block;
  align-items: center;
}

.tabs {
  height: 100%;
  display: flex;
}

.tabs__labels {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 70px;
  height: 100%;
  background-color: #f0efe9;
  border-right: 2px solid #fff;
}

.tabs__input {
  display: none;
}

.tabs__input:checked + label {
  background-color: #fff;
  color: #00bfa5;
}

.content {
  position: relative;
  height: 600px;
}

.content__page {
  width: 100%;
  padding: 70px 50px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  display: none;
  min-height: 200px;
  border-top: 5px solid #e74c3c;
  border-radius: 0 10px 10px 10px;
}
</style>
