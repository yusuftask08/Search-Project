<template>
  <li
    :class="{
      'search-input-item': $route.path === '/search',
      'list-item': $route.path === '/',
    }"
  >
    <div class="list-item__container">
      <div class="list-item__left">
        <div class="list-item__top">
          <span>{{ user[4] }} - {{ user[5] }}</span>
        </div>
        <div class="list-item__bottom">
          <span>{{ user[0] }} - {{ year }}</span>
        </div>
      </div>
      <div class="list-item__right">
        <div class="list-item-email">
          <span>Email: {{ user[2] }}</span>
        </div>
      </div>
    </div>
    <hr />
  </li>
</template>
<script>
export default {
  props: ["user"],
  computed: {
    year() {
      return this.user[3].substr(this.user[3].length - 4, 4);
    },
  },
};
</script>
