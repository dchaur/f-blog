
<template>
  <v-app :dark="switchTheme">
    <div>
      <v-toolbar>
        <v-toolbar-title>F-Blog</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
          <v-btn text v-if="!$auth.check()" value="articles" to="/">
            <span>Articles</span>
            <v-icon>question_answer</v-icon>
          </v-btn>
        </v-toolbar-items>

        <template>
          <v-btn v-if="$auth.check()" icon @click.prevent="logout">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
          <v-btn v-else icon to="/login">
            <v-icon>mdi-login</v-icon>
          </v-btn>
          <v-switch :hide-details="true" v-model="isDark" label="The dark side"></v-switch>
        </template>
      </v-toolbar>
    </div>
    <v-content>
      <transition appear name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>;
<script>
export default {
  data: () => ({
    drawer: null,
    isDark: true
  }),
  computed: {
    switchTheme() {
      if (this.isDark == true) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    }
  },
  methods: {
    logout() {
      this.$auth.logout({
        success: function() {
          this.$router
            .push({
              name: "articles"
            })
            .catch(err => {});
        }
      });
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}
.fade-enter-active {
  transition-delay: 0.25s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
