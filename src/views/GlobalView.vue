<template>
  <HeadlineNav :heading="newsHeading" />
  <card :allnews="allNewsApi" />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from "vuex";
import HeadlineNav from "@/components/HeadlineNav.vue";
import Card from "@/components/Card.vue";
export default {
  name: "GlobalView",
  components: { HeadlineNav, Card },
  // components: {
  //   HelloWorld
  // }
  async mounted() {
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
<style>
img {
  width: 200px;
}
/* p {
  width: 100px;
} */
.glob {
  display: inline-block;
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;
  width: 300px;
  align-items: center;
}
</style>
