import MyButtonSlide from '../components/elements/MyButtonSlide.vue'

export default {
  title: 'Elements/MyButtonSlide',
  component: MyButtonSlide,
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'orange']
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
    size: 'default'
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
    size: 'orange'
  }
}
