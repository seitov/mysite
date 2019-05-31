import Vue from "vue";
import axios from "axios";
import Vuelidate from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

Vue.use(Vuelidate);

new Vue({
  el: "#auth-component",
  data() {
    return {
      user: {
        name: "",
        password: ""
      },
      captcha: {
        check: false,
        confirm: false
      }
    };
  },
  methods: {
    login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        axios
          .post("http://webdev-api.loftschool.com/login", this.user)
          .then(response => {
            if (response.status === 200) {
              const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("ttl", ttl);
              window.location.href = "/admin";
            }
          })
          .catch(e => console.error(e));
      }
    }
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(3)
      }
    }
  },
  template: "#auth-form"
});
