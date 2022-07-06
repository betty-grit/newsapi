<template>
  <h1>hello</h1>
  <HeadlineNav :heading="newsHeading" />
  <card :allnews="allNewsApi" />
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineNav from "@/components/HeadlineNav.vue";
import Card from "@/components/Card.vue";
// import HeadlineView from "./HeadlineView.vue";
export default {
  name: "Homeview",
  components: { HeadlineNav, Card },
  async created() {
    await this.getAllGlobalNews();
    await this.getAllHeadlineNews();
  },
  computed: {
    ...mapGetters({
      globalNews: "getGlobalNews",
      headlineNews: "getHeadlineNews",
    }),
    newsHeading() {
      return this.headlineNews.slice(0, 1);
    },
    allNewsApi() {
      return this.globalNews.slice(0, 9);
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

<style scoped></style>
