import MyButtonSlide from '../components/elements/MyButtonSlide.vue'

export default {
  title: 'Elements/MyButtonSlide',
  component: MyButtonSlide,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'orange']
    },
    svg: {
      control: 'select',
      options: ['default', 'white']
    }
  }
}

export const PrimaryButtonSlide = {
  render: (args) => {
    return {
      components: {
        MyButtonSlide
      },
      setup() {
        return { args }
      },
      template: `<MyButtonSlide v-bind="args"/>`
    }
  },
  args: {
    variant: 'default',
    svg: 'default'
  }
}

export const SecondaryButtonSlide = {
  render: (args) => {
    return {
      components: {
        MyButtonSlide
      },
      setup() {
        return { args }
      },
      template: `<MyButtonSlide v-bind="args"/>`
    }
  },
  args: {
    variant: 'orange',
    svg: 'white'
  }
}
