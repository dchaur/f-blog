<template>
  <v-container fluid>
    <v-card class="mx-auto" :flat="true" :outlined="false" :raised="false">
      <v-card-title>
        <v-list-item-title class="headline">{{ article.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ article.creation_date | date }}</v-list-item-subtitle>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>{{ article.content }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    article: {}
  }),
  created() {
    const url = `/api/articles/${this.$route.params.slug}`;
    this.axios.get(url).then(res => {
      this.article = res.data[0];
    });
  }
};
</script>
