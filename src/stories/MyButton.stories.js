import MyButton from '../components/elements/MyButtonVue2.vue'

export default {
  title: 'Elements/MyButton',
  component: MyButton,
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

export const PrimaryButton = {
  render: (args) => {
    return {
      components: {
        MyButton
      },
      setup() {
        return { args }
      },
      template: `<MyButton v-bind="args">My link Button</MyButton>`
    }
  },
  args: {
    size: 'regular',
    variant: 'default'
  }
}

export const SecondaryButton = {
  ...PrimaryButton,
  args: {
    size: 'regular',
    variant: 'rounded'
  }
}

export const SmallPrimaryButton = {
  ...PrimaryButton,
  args: {
    size: 'small',
    variant: 'default'
  }
}

export const SmallSecondaryButton = {
  ...PrimaryButton,
  args: {
    size: 'small',
    variant: 'rounded'
  }
}
