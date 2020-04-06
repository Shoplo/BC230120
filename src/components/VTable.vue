<template>
  <div class="table">
    <table class="table__element">
      <thead>
        <tr class="table__row">
          <th class="table__cell table__cell--header" v-for="header in headers" :key="header">{{ header }}</th>
          <th class="table__cell table__cell--header">action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table__row" v-for="element in elements" :key="element.toString()">
          <td class="table__cell" v-for="header in headers" :key="header">
            {{ element[header] }}
          </td>
          <td class="table__cell table__cell--actions">
            <VButton @click.native="action(element)">{{ actionName }}</VButton>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import VButton from '@/components/VButton.vue';

  @Component({
    components: {
      VButton,
    },
  })
  export default class VTable extends Vue {
    @Prop({ required: true }) private readonly headers!: string[];
    @Prop({ required: true }) private readonly elements!: object[];
    @Prop({ required: true }) private readonly action!: (element: object) => void;
    @Prop({ required: true }) private readonly actionName!: string;
  }
</script>

<style lang="scss">
  @import "@/style";

  .table {
    display: block;
    width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid $color-border;

    &__element {
      width: 100%;
      max-width: 100%;
    }

    &__row {
      &:nth-child(even) {
        background-color: rgba($color-black, 0.02);
      }
    }

    &__cell {
      padding: size(1);
      border-top: 1px solid $color-border;

      & + & {
        border-left: 1px solid $color-gray-light;
      }

      &--header {
        font-weight: 700;
        border-bottom: 2px solid $color-border;
        padding: size(2) size(1);
        text-transform: capitalize;
      }

      &--actions {
        text-align: center;
      }
    }
  }
</style>
