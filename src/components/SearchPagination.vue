<template>
  <div class="pagination__container" v-show="pageNumbers > 1">
    <div class="pagination-list" @click="selectedPage($event)">
      <a class="pagination-list-item previous">Previous </a>
      <div
        class="pagination-list-numbers"
        v-for="(number, index) in pageNumbers"
        :key="index"
      >
        <span :class="{ select: currentPage == index + 1 }">
          {{ number }}
        </span>
      </div>
      <a class="pagination-list-item next"> Next </a>
    </div>
  </div>
</template>

<script>
import { SET_CURRENT_PAGE } from "@/store/mutations.type";
import { mapGetters } from "vuex";
export default {
  methods: {
    selectedPage(event) {
      if (event.target.textContent === "Previous") {
        this.$store.commit(SET_CURRENT_PAGE, this.currentPage - 1);
      } else if (event.target.textContent === "Next") {
        this.$store.commit(
          SET_CURRENT_PAGE,
          this.pageNumbers === this.currentPage
            ? this.currentPage
            : this.currentPage + 1
        );
      } else {
        this.$store.commit(SET_CURRENT_PAGE, Number(event.target.textContent));
      }
    },
  },
  computed: {
    ...mapGetters({
      searchResult: "getSearchResultData",
      currentPage: "getCurrentPage",
    }),
    pageNumbers() {
      return Math.ceil(this.searchResult.length / 6);
    },
  },
};
</script>
