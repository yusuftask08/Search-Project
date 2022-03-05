<template>
  <div class="home-container">
    <img src="../assets/logo.png" alt="Tesodev Logo" width="278" />
    <p class="logo-paragraph">Search web app</p>
    <div class="home-main__container">
      <SearchInput />
      <SearchResult />
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput";
import SearchResult from "@/components/SearchResult";
export default {
  name: "Home",
  components: {
    SearchInput,
    SearchResult,
  },
};
</script>
