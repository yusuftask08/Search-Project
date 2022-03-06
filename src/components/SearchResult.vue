<template>
  <div class="search-results__footer">
    <div class="input-results__container" v-if="searchResult.length > 0">
      <div class="filtered-input-results">
        <SearchSortByOrder v-if="$route.path === '/search'" />
        <ul>
          <search-input-list
            v-for="(user, index) in searchResultFilter"
            :key="index"
            :user="user"
          />
        </ul>
      </div>
      <div
        class="input-view__button"
        @click="showMoreSearchResult()"
        v-if="$route.path === '/' && searchResult.length >= 3"
      >
        Show more...
      </div>
      <div class="footer">
        <SearchPagination v-if="$route.path === '/search'" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchInputList from "./SearchInputList.vue";
import SearchPagination from "./SearchPagination.vue";
import SearchSortByOrder from "./SearchSortByOrder.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    SearchInputList,
    SearchPagination,
    SearchSortByOrder,
  },
  methods: {
    showMoreSearchResult() {
      this.$router.push("/search");
    },
  },
  computed: {
    ...mapGetters({
      searchResult: "getSearchResultData",
      currentPage: "getCurrentPage",
      searchQuery: "getSearchQuery",
    }),
    searchResultFilter() {
      if (this.$route.path === "/") {
        return this.searchResult.slice(0, 3);
      } else {
        return this.searchResult.slice(
          (this.currentPage - 1) * 6,
          this.currentPage * 6
        );
      }
    },
  },
};
</script>
