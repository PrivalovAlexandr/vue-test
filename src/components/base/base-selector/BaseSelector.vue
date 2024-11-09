<template>
    <label class="block">
        {{ label }}
        <select
            v-bind="$attrs"
            @change="event => $emit('change', event.target.value)"
            class="border-gray-400 w-full border-2 p-1 rounded-md block mt-1"
        >
            <option :value="null">—</option>
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
        <Transition name="fade" mode="out-in">
            <span class="text-red-400 text-16/128" v-if="error">
                {{ errorMessage }}
            </span>
        </Transition>
    </label>
</template>

<script>
import AtomField from "../../atom/atom-field/AtomField.vue";

export default {
    name: "BaseSelector",
    components: { AtomField },
    props: {
        value: {
            type: String
        },
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        error: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: ""
        }
    }
};
</script>
