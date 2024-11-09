<template>
    <BaseModal :is-open="modalStore.modals[MODAL_NAME]" @close="handleClose">
        <h3 class="text-center text-24/132 font-semibold">
            Добавить пользователя
        </h3>
        <form @submit.prevent="handleSubmit" class="space-y-5 mt-10">
            <AtomField
                @input="nameError = false"
                aria-required="true"
                reqired
                name="name"
                :error="nameError"
                :error-message="nameErrorMessage"
                label="Имя"
                v-model="name"
            />
            <AtomField
                @input="phoneError = false"
                aria-required="true"
                reqired
                inputmode="tel"
                name="phone"
                :error="phoneError"
                :error-message="phoneErrorMessage"
                label="Номер телефона"
                v-model="phone"
            />
            <BaseSelector
                @change="value => (director = value)"
                label="Начальник"
                name="director"
                v-model="director"
                :error="directorError"
                :error-messages="directorErrorMessage"
                :options="userOptions"
            />
            <BaseButton class="mx-auto" type="submit"> Добавить </BaseButton>
        </form>
    </BaseModal>
</template>

<script>
import BaseModal from "../base/base-modal/BaseModal.vue";
import AtomField from "../atom/atom-field/AtomField.vue";
import BaseSelector from "../base/base-selector/BaseSelector.vue";
import BaseButton from "../base/base-button/BaseButton.vue";
import { useModalStore } from "../../stores/modal.store";
import { useUserStore } from "../../stores/user.store";

export default {
    name: "AddUserModal",
    components: { BaseButton, BaseSelector, AtomField, BaseModal },
    data() {
        return {
            MODAL_NAME: "addUser",

            name: "",
            phone: "",
            director: null,

            nameError: false,
            phoneError: false,
            directorError: false,

            nameErrorMessage: "",
            phoneErrorMessage: "",
            directorErrorMessage: ""
        };
    },
    computed: {
        modalStore: () => useModalStore(),
        userStore: () => useUserStore(),
        userOptions() {
            const options = [];

            for (const user of this.userStore.users) {
                options.push({
                    value: user.id,
                    label: `${user.name} (${user.phone})`
                });
            }

            return options;
        }
    },
    methods: {
        handleSubmit() {
            if (this.handleError()) {
                return;
            }

            this.userStore.add({
                name: this.name,
                phone: this.phone,
                director: this.director ? Number(this.director) : null
            });

            this.handleClose();
            location.reload();
        },
        handleError() {
            let hasError = false;

            if (!this.name) {
                this.nameError = true;
                this.nameErrorMessage = "Поле обязательно к заполнению";
                hasError = true;
            }

            if (!this.phone) {
                this.phoneError = true;
                this.phoneErrorMessage = "Поле обязательно к заполнению";
                hasError = true;
            }

            return hasError;
        },
        handleClose() {
            this.modalStore.close(this.MODAL_NAME);
        }
    }
};
</script>
