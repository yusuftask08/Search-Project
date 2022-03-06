<template>
  <div class="search-container">
    <div class="header">
      <img src="../assets/logo.png" alt="Tesodev Logo" width="200" />
    </div>
    <div class="main">
      <SearchInput class="search-page-input" />
      <SearchResult />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput.vue";
import SearchResult from "../components/SearchResult.vue";

export default {
  name: "Search",
  components: {
    SearchInput,
    SearchResult,
  },
};
</script>
