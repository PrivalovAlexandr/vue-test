<template>
    <label class="block">
        {{ label }}
        <input
            :name="name"
            v-bind="$attrs"
            class="border-2 text-16/120 p-1 border-gray-400 w-full rounded-md block mt-1"
            @input="$emit('input', $event.target.value)"
        />
        <Transition name="fade" mode="out-in">
            <span class="text-red-400 text-16/128" v-if="error">
                {{ errorMessage }}
            </span>
        </Transition>
    </label>
</template>

<script>
export default {
    name: "AtomField",
    props: {
        value: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        error: {
            type: Boolean,
            default: false,
        },
        errorMessage: {
            type: String,
            default: "",
        },
    },
};
</script>
