import MyCard from '@/components/elements/MyCard.vue'

export default {
  title: 'Components/MyCard',
  component: MyCard,
  argTypes: {
    prix: {
      control: 'text'
    },
    title: {
      control: 'text'
    },
    imageAlt: {
      control: 'text'
    },
    imageSrc: {
      control: 'text'
    },
    buttonLabel: {
      control: 'text'
    },
    note: {
      control: 'text'
    }
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCard
      },
      setup() {
        return { args }
      },
      template: `<MyCard v-bind="args" />`
    }
  },
  args: {
    prix: 'prix du produit',
    title: 'Titre de la card',
    imageAlt: 'image de chat',
    imageSrc: 'http://placekitten.com/g/485/333',
    buttonLabel: 'button card',
    note: '4.1'
  }
}
