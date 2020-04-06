<template>
  <ul class="nav-list">
    <li :key="item.text" class="nav-list__item" v-for="item in items">
      <router-link :to="{ name: item.route }" class="nav-list__link">
        {{ item.text }}
      </router-link>
    </li>
  </ul>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { NavItem } from '@/types';

  @Component({})
  export default class VNavList extends Vue {
    @Prop({ type: Array, required: true }) public readonly items!: NavItem[];
  }
</script>

<style lang="scss">
  @import "@/style";

  .nav-list {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    &__item {
      & + & {
        border-left: 1px solid #f1f1f1
      }
    }

    &__link {
      color: inherit;
      text-decoration: none;
      position: relative;
      display: block;
      padding: 4px 8px;

      &:after {
        transition: transform 250ms ease-in-out;
        position: absolute;
        content: '';
        top: 100%;
        left: 0;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        background-color: $color-main;
      }

      &:hover,
      &:focus,
      &:active {
        &:after {
          transform: scaleX(1);
        }
      }
    }
  }
</style>
