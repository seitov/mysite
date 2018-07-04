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
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    },
    getReqImage(direction) {
      const worksArray = [...this.works];
      switch (direction) {
        case "prev":
          const lastItem = worksArray[worksArray.length - 1];
          worksArray.unshift(lastItem);
          worksArray.pop();
          break;

        case "next":
          worksArray.push(worksArray[0]);
          worksArray.shift();
          break;
      }

      return worksArray[this.currentIndex];
    }
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
    currentWorks: {},
    currentIndex: 0
  },
  watch: {
    currentIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;
      this.currentWork = this.works[value];
    }
  },
  created() {
    this.works = require("../../../data/works.json");
    this.currentWork = this.works[0];
  },
  methods: {
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex = this.currentIndex + 1;
          break;

        case "prev":
          this.currentIndex = this.currentIndex - 1;
          break;
      }
    }
  },
  template: "#slider"
});
