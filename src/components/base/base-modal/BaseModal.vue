<template>
    <Transition name="fade">
        <div
            v-show="isOpen"
            @click="$emit('close')"
            class="fixed w-screen z-50 h-screen top-0 left-0 flex items-center justify-center"
        >
            <div class="absolute z-20 bg-black w-full h-full opacity-30"></div>
            <Transition name="slide-up">
                <div
                    v-show="isOpen"
                    @click.stop
                    class="relative z-30 bg-white px-20 py-10 rounded-lg"
                >
                    <slot />
                    <button
                        @click="$emit('close')"
                        type="button"
                        class="absolute top-4 right-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M6 18L18 6M6 6L18 18"
                                stroke="#1B1927"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "BaseModal",
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleESCPress(event) {
            if (event.code === "Escape" && this.isOpen) {
                this.$emit("close");
            }
        }
    },
    mounted() {
        window.addEventListener("keydown", this.handleESCPress);
    },
    beforeDestroy() {
        window.removeEventListener("keydown", this.handleESCPress);
    }
};
</script>
