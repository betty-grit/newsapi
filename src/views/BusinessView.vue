<template>
  <HeadlineNav :heading="businessHeadline" />
  <card :allnews="business" />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/Card.vue";
import HeadlineNav from "@/components/HeadlineNav.vue";

export default {
  name: "BusinessView",
  components: { Card, HeadlineNav },
  //   HelloWorld
  // }
  async created() {
    await this.getAllBusinessNews();
  },
  computed: {
    ...mapGetters({
      businessNews: "getBusinessNews",
    }),
    businessHeadline() {
      return this.businessNews.slice(0, 1);
    },
    business() {
      return this.businessNews.slice(1, 10);
    },
  },
  methods: {
    ...mapActions({
      getAllBusinessNews: "getAllBusinessNews",
    }),
  },
};
</script>
<style>
img {
  width: 400px;
}
</style>
