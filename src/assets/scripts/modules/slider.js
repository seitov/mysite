import Vue from "vue";

const descriptions = {
  template: "#slider-desc",
  props: {
    work: Object
  }
};

const demonstrations = {
  template: "#slider-demo",
  props: {
    work: Object
  }
};

const btns = {
  template: "#slider-btns",
  props: {
    works: Array,
    currentIndex: Number
  }
};

new Vue({
  el: "#slider__component",
  components: {
    descriptions,
    demonstrations,
    btns
  },
  data: {
    works: [],
    currentWorks: {}
  },
  created() {
    this.works = require("../../../data/works.json");
    this.currentWork = this.works[0];
  },
  template: "#slider"
});
