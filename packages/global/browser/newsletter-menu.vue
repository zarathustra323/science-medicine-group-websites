<template>
  <aside :class="classNames">
    <div :class="element('container')">
      <signup
        :block-name="blockName"
        :name="name"
        :description="description"
        :disabled="disabled"
        :image-src="imageSrc"
        :image-srcset="imageSrcset"
      />
    </div>
  </aside>
</template>

<script>
import Signup from './site-newsletter-menu/signup.vue';

export default {
  components: {
    Signup,
  },
  inject: ['EventBus'],

  props: {
    siteName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    imageSrc: {
      type: String,
      default: null,
    },
    imageSrcset: {
      type: String,
      default: null,
    },
    initiallyExpanded: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    blockName: 'site-newsletter-menu',
    didLoad: false,
    email: null,
    expanded: undefined,
    step: 1,
  }),

  computed: {
    currentlyExpanded() {
      if (this.expanded != null) return this.expanded;
      return this.initiallyExpanded;
    },

    classNames() {
      const { blockName } = this;
      const classes = [blockName];
      if (this.currentlyExpanded) classes.push(`${blockName}--open`);
      return classes;
    },
  },

  mounted() {
    if (this.initiallyExpanded) this.didLoad = true;
    this.EventBus.$on('newsletter-menu-expanded', (expanded) => {
      this.expanded = expanded;
      if (expanded) this.didLoad = true;
    });
  },

  methods: {
    element(elementName) {
      return `${this.blockName}__${elementName}`;
    },
  },
};
</script>
