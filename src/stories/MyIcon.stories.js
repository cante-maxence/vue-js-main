import MyIcon from '../components/elements/MyIcon.vue'

export default {
  title: 'Elements/MyIcon',
  component: MyIcon,
  argTypes: {
    href: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['regular', 'small']
    },
    variant: {
      control: 'select',
      options: ['default', 'rounded']
    }
  }
}

export const PrimaryIcon = {
  render: (args) => {
    return {
      components: {
        MyIcon
      },
      setup() {
        return { args }
      },
      template: <MyIcon v-bind="args" />
    }
  },
  args: {}
}
