<template>
  <div class="search-bar-container">
    <input
      :style="notFoundData == true ? { border: '2px solid red' } : ''"
      class="search-input"
      v-model="searchQuery"
      @keydown.enter="sendSearchQuery"
    />
    <button class="search-input__btn" @click="sendSearchQuery">Search</button>
  </div>
</template>
<script>
import { GET_SEARCH_RESULT } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    sendSearchQuery() {
      if (this.searchQuery.length > 0) {
        this.$store.dispatch(GET_SEARCH_RESULT, this.searchQuery);
        this.searchQuery = "";
      }
    },
  },
  computed: {
    ...mapGetters({
      notFoundData: "getNotFoundData",
    }),
  },
};
</script>

<style>
</style>