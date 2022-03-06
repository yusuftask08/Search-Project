<template>
  <div class="search-input-container">
    <input
      :style="notFoundData == true ? { border: '2px solid red' } : ''"
      class="search-input"
      v-model="searchQuery"
      @keydown.enter="sendSearchQuery"
    />
    <button
      :style="$route.path === '/search' ? { backgroundColor: '#4F75C2' } : ''"
      class="search-input__btn"
      @click="sendSearchQuery"
    >
      Search
    </button>
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
      }
    },
    init() {
      if (this.$route.path === "/search") {
        this.searchQuery = localStorage.getItem("search-query");
      } else {
        this.searchQuery = "";
      }
    },
  },
  computed: {
    ...mapGetters({
      notFoundData: "getNotFoundData",
    }),
  },
  created() {
    this.init();
  },
};
</script>
