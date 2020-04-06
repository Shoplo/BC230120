<template>
  <div class="page">
    <header class="page__header">
      <nav class="page__navigation">
        <VNav />
      </nav>
    </header>
    <main class="page__content">
      <VContainer>
        <slot></slot>
      </VContainer>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VNav from '@/components/VNav.vue';
import VContainer from '@/components/VContainer.vue';
@Component({
  components: {
    VNav,
    VContainer,
  },
})
export default class MainLayout extends Vue {}
</script>

<style lang="scss">
  @import "@/style";

  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__header {
      flex: 0 0 auto;
      padding: size(2);
      box-shadow: 0 size(2) size(2) size(-2) rgba(0, 0, 0, .1);
      margin-bottom: size(2);
    }

    &__content {
      flex: 1 1 100%;
      padding-bottom: size(2);
    }
  }
</style>
