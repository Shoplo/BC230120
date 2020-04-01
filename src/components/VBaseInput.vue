<template>
  <VInputGroup>
    <template v-slot:label>
      <VInputLabel :html-for="id">
        {{ label }}
      </VInputLabel>
    </template>
    <template v-slot:input>
      <slot />
    </template>
    <template v-slot:error v-if="error">
      <VInputError>
        {{ error }}
      </VInputError>
    </template>
  </VInputGroup>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  import VInputGroup from '@/components/VInputGroup.vue';
  import VInputLabel from '@/components/VInputLabel.vue';
  import VInputError from '@/components/VInputError.vue';

  @Component({
    components: {
      VInputGroup,
      VInputLabel,
      VInputError,
    },
  })
  export default class BaseInput extends Vue {
    @Prop({ required: true }) private readonly label!: string;
    @Prop({ default: null }) private readonly error!: string;
    @Prop({ required: true }) private readonly id!: string;
  }
</script>
