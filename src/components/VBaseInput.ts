import { Component, Model, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class VBaseInput extends Vue {
  @Prop({ required: true }) private readonly label!: string;
  @Prop({ default: null }) private readonly error!: string;
  @Prop({ required: true }) private readonly id!: string;
  @Prop({ required: true }) private readonly name!: string;
  @Prop({ default: '' }) private readonly placeholder!: string;
  @Model('change') private readonly value!: string;
}
