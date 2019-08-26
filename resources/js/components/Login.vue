<template>
  <v-container fluid>
    <v-form
      ref="adminLoginForm"
      v-model="valid"
      lazy-validation
      autocomplete="off"
      @submit.prevent="login"
      method="post"
    >
      <v-text-field v-model="email" :rules="emailRules" label="Enter your e-mail address" required></v-text-field>
      <v-text-field
        v-model="password"
        min="8"
        :append-icon="displayPasswordText ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (displayPasswordText = !displayPasswordText)"
        :type="displayPasswordText ? 'password' : 'text'"
        :rules="passRules"
        @click:append="displayPasswordText = !displayPasswordText"
        label="Enter your password"
        counter
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">Validate</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    displayPasswordText: true,
    passRules: [v => !!v || "Password is required"]
  }),

  methods: {
    validate() {
      if (this.$refs.adminLoginForm.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.adminLoginForm.reset();
    },
    login() {
      const redirect = this.$auth.redirect();
      const app = this;

      this.$auth.login({
        params: {
          email: app.email,
          password: app.password
        },
        success: function() {
          this.$router.push({
            name: "admin"
          });
        },
        error: function() {
          app.has_error = true;
        },
        rememberMe: true
      });
    }
  }
};
</script>
