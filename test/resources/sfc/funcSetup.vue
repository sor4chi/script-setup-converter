<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      msg: "Hello World",
    };
  },
});
</script>
