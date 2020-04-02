<template>
  <VNavList :items="navList"/>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import VNavList from '@/components/VNavList.vue';

  import { NavItem } from '@/types';

  @Component({
    components: {
      VNavList,
    },
  })
  export default class VNav extends Vue {
    get navList(): NavItem[] {
      const items = [
        {
          text: 'Form',
          route: 'form',
        },
      ];

      if (!this.$route.meta.hideFormLink) {
        items.unshift({
          text: 'List',
          route: 'list',
        });
      }

      return items;
    }
  }
</script>
