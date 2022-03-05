<template>
  <div class="search-results__footer">
    <div class="input-results__container" v-if="searchResult.length > 0">
      <div class="filtered-input-results">
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
    </div>
  </div>
</template>

<script>
import SearchInputList from "./SearchInputList.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    SearchInputList,
  },
  methods: {
    showMoreSearchResult() {
      this.$router.push("/search");
    },
  },
  computed: {
    ...mapGetters({
      searchResult: "getSearchResultData",
    }),
    searchResultFilter() {
      return this.searchResult.slice(0, 3);
    },
  },
};
</script>
