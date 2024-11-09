<template>
    <button
        v-bind="$attrs"
        @click="$emit('click')"
        class="block py-2 px-5 font-semibold border-gray-400 border-2 rounded-lg transition-colors duration-300 hover:bg-gray-400 hover:text-white"
        :type="type"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        type: { type: "button" | "submit" | "reset", default: "button" }
    }
};
</script>
