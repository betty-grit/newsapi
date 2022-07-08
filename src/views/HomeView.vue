<template>
  <!-- <h1>hello</h1> -->
  <div>
    <input
      type="text"
      placeholder="Search for a news..."
      v-model="searchTerm"
    />
    <!-- <div class="home_content">
    <Card :allnews="filteredNews"> </Card>
  </div> -->
  </div>
  <HeadlineNav :heading="newsHeading" />
  <card :allnews="filteredNews" />
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineNav from "@/components/HeadlineNav.vue";
import Card from "@/components/Card.vue";
// import HeadlineView from "./HeadlineView.vue";
export default {
  name: "Homeview",
  components: { HeadlineNav, Card },
  data: () => ({
    // username: "",
    searchTerm: "",
  }),
  async created() {
    await this.getAllGlobalNews();
    await this.getAllHeadlineNews();
  },
  computed: {
    ...mapGetters({
      globalNews: "getGlobalNews",
      headlineNews: "getHeadlineNews",
    }),
    filteredNews() {
      if (this.searchTerm) {
        return this.globalNews.filter((news) =>
          news.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        return this.allNewsApi;
      }
    },
    newsHeading() {
      if (this.searchTerm) {
        const newss = this.globalNews.filter((news) =>
          news.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        return newss.slice(0, 1);
      } else {
        return this.globalNews.slice(0, 1);
      }
    },
    allNewsApi() {
      return this.globalNews.slice(1, 10);
    },
  },
  methods: {
    ...mapActions({
      getAllGlobalNews: "getAllGlobalNews",
      getAllHeadlineNews: "getAllHeadlineNews",
    }),
  },
};
</script>

<style scoped>
input {
  margin-right: 850px;
  margin-top: 20px;
  box-shadow: rgb(243, 232, 232) 10px 10px 10px 10px;
  border: white;
  height: 28px;
  padding: 5px;
  border-radius: 4px;
}
/* div {
  width: 180px;
  height: 30px;
  background-color: aliceblue;
} */
</style>
