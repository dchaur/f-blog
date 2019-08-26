<template>
  <v-container fluid>
    <v-data-iterator
      :items="articles"
      :items-per-page.sync="articlesPerPage"
      :footer-props="{ articlesPerPageOptions }"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.title" cols="12" sm="6" md="4" lg="3">
            <v-card max-width="344" class="mx-auto">
              <v-card-title>
                <v-list-item-title class="headline">{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.creation_date | date }}</v-list-item-subtitle>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>{{ item.content | truncate(200) | tailing('...') }}</v-card-text>
              <v-card-actions>
                <v-btn text outlined @click="showArticle(item.slug)">Continue reading...</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    articlesPerPageOptions: [4, 12, 20],
    articlesPerPage: 6,
    articles: []
  }),

  created() {
    this.loadArticles();
  },
  methods: {
    loadArticles() {
      const url = "/api/articles";
      var self = this;
      axios.get(url).then(res => {
        this.articles = res.data.data;
      });
    },
    showArticle(slug) {
      this.$router.push(`/article/${slug}`);
    }
  }
};
</script>
