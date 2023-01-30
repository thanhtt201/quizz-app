<template>
  <div>
    <input
      :type="type"
      v-model="dataInput"
      :class="classInput"
      @change="changeInput"
      @blur="blurInput"
    />
  </div>
</template>

<script>
export default {
  name: "CommonFormInputText",

  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    classInput: {
      type: String,
      default: "",
    },
  },

  computed: {
    dataInput: {
      get() {
        return this.value || "";
      },
      set(newVal) {
        this.$emit("input", newVal);
      },
    },
  },

  methods: {
    changeInput() {
      this.$emit("change");
    },
    blurInput() {
      this.$emit("blur", this.dataInput);
    },
  },
};
</script>
