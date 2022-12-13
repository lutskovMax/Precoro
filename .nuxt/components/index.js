export { default as AvailableDocuments } from '../../components/AvailableDocuments.vue'
export { default as AvailableLocations } from '../../components/AvailableLocations.vue'
export { default as CounterSelected } from '../../components/CounterSelected.vue'
export { default as MainInfo } from '../../components/MainInfo.vue'
export { default as UserRoles } from '../../components/UserRoles.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
