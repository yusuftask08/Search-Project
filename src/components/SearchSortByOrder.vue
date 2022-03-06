<template>
  <div class="orderby__container">
    <div class="orderby-content" @click="sortOrderBy = !sortOrderBy">
      <img src="../assets/sortOrderIcon.svg" />
      <p>Order By</p>
    </div>
    <ul @click="selectOrderByItem($event)" v-if="sortOrderBy === true">
      <li>Name ascending</li>
      <li>Name descending</li>
      <li>Year ascending</li>
      <li>Year descending</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      sortOrderBy: false,
    };
  },
  methods: {
    selectOrderByItem(e) {
      this.sortOrderBy = false;
      let orderBy = e.target.textContent;
      switch (orderBy) {
        case "Name ascending":
          this.searchResult
            .sort((a, b) => (a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0))
            .slice((this.pageNo - 1) * 6, this.pageNo * 6);
          return this.searchResult;
        case "Name descending":
          this.searchResult
            .sort((a, b) => (b[0] > a[0] ? 1 : a[0] > b[0] ? -1 : 0))
            .slice((this.pageNo - 1) * 6, this.pageNo * 6);
          return this.searchResult;
        case "Year ascending":
          this.searchResult
            .sort((a, b) => {
              return a[3].split("/")[2] - b[3].split("/")[2];
            })
            .slice((this.pageNo - 1) * 6, this.pageNo * 6);
          return this.searchResult;
        case "Year descending":
          this.searchResult
            .sort((a, b) => {
              return b[3].split("/")[2] - a[3].split("/")[2];
            })
            .slice((this.pageNo - 1) * 6, this.pageNo * 6);
          return this.searchResult;
      }
    },
  },
  computed: {
    ...mapGetters({
      searchResult: "getSearchResultData",
      pageNo: "getCurrentPage",
    }),
  },
};
</script>
