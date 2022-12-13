<template>
  <span>{{ getCountSelected }} Selected</span>
</template>

<script>
export default {
  props: {
    selectedArray: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    getCountSelected() {
      if (this.selectedArray.find((element) => element === true)) {
        return (
          this.selectedArray.length -
          this.selectedArray.sort().findIndex((element) => element === true)
        );
      } else {
        return "Not";
      }
    },
  },
};
</script>
