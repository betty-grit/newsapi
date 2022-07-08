<template>
  <HeadlineNav :heading="healthHeadline" />
  <card :allnews="health" />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/Card.vue";
import HeadlineNav from "@/components/HeadlineNav.vue";
export default {
  name: "HealthView",
  components: { Card, HeadlineNav },
  //   HelloWorld
  // }
  async created() {
    await this.getAllHealthNews();
  },
  computed: {
    ...mapGetters({
      healthNews: "getHealthNews",
    }),
    healthHeadline() {
      return this.healthNews.slice(0, 1);
    },
    health() {
      return this.healthNews.slice(1, 10);
    },
  },
  methods: {
    ...mapActions({
      getAllHealthNews: "getAllHealthNews",
    }),
  },
};
</script>
<style>
img {
  width: 400px;
}
</style>
