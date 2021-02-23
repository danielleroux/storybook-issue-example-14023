// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CompLibComponent, CompLibModule } from 'dist/comp-lib';

export default {
  title: 'Example/Button',
  component: CompLibComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CompLibModule],
    }),
  ],
} as Meta;

const Template: Story<CompLibComponent> = (args: CompLibComponent) => ({
  // component: CompLibComponent,
  template: `<lib-comp-lib></lib-comp-lib>`,
  props: args,
});

export const Primary = Template.bind({});
