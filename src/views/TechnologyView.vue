<template>
  <HeadlineNav :heading="technologyHeadline" />
  <card :allnews="technology" />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/Card.vue";
import HeadlineNav from "@/components/HeadlineNav.vue";
export default {
  name: "TechnologyView",
  components: { Card, HeadlineNav },

  async created() {
    await this.getAllTechnologyNews();
  },

  computed: {
    ...mapGetters({
      technologyNews: "getTechnologyNews",
    }),
    technologyHeadline() {
      return this.technologyNews.slice(0, 1);
    },
    technology() {
      return this.technologyNews.slice(1, 10);
    },
  },
  methods: {
    ...mapActions({
      getAllTechnologyNews: "getAllTechnologyNews",
    }),
  },
};
</script>
<style>
img {
  width: 400px;
}
</style>
