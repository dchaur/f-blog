<template>
  <v-data-table :headers="headers" :items="articles" sort-by="title" class="elevation-1">
    <template v-slot:top>
      <v-toolbar>
        <v-toolbar-title>Articles</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <div class="flex-grow-1"></div>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Article</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
                <v-textarea filled label="Content" auto-grow v-model="editedItem.content"></v-textarea>
                <v-text-field v-model="editedItem.slug" label="Slug (friendly URL)"></v-text-field>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
      <v-icon small @click="deleteItem(item)">delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Title",
        align: "left",
        sortable: true,
        value: "title"
      },
      { text: "Content", value: "content", sortable: false },
      { text: "Slug", value: "slug", sortable: true },
      { text: "Actions", value: "action", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      title: "",
      content: "",
      slug: ""
    },
    defaultItem: {
      title: "",
      content: "",
      slug: ""
    },
    articles: []
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New article" : "Edit article";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      const url = "/api/articles";
      this.axios.get(url).then(res => {
        this.articles = res.data.data;
      });
    },

    editItem(item) {
      this.editedIndex = this.articles.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.articles.indexOf(item);
      const deleteConfirmed = confirm(
        "Are you sure you want to delete this article?"
      );

      if (deleteConfirmed) {
        const url = `/api/articles/${item._id}`;
        this.axios.delete(url, this.editedItem).then(res => {
          this.articles.splice(index, 1);
        });
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      const baseUrl = "/api/articles";

      if (this.editedIndex > -1) {
        const url = `${baseUrl}/${this.editedItem._id}`;
        this.axios.put(url, this.editedItem).then(res => {
          Object.assign(this.articles[this.editedIndex], this.editedItem);
        });
      } else {
        this.axios.post(baseUrl, this.editedItem).then(res => {
          this.articles.push(res.data.article);
        });
      }

      this.close();
    }
  }
};
</script>
