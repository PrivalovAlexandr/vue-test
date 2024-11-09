<template>
    <main class="container py-10 space-y-10">
        <div>
            <h1 class="text-center text-32/136">Таблица пользователей</h1>
            <BaseButton class="mx-auto mt-5" @click="handleOpenModal">
                Добавить пользователя
            </BaseButton>
        </div>
        <div class="flex items-center justify-center">
            <BaseLevelTable :users="userStore.getSorted()" />
        </div>
    </main>
</template>

<script>
import AddUserModal from "../components/modals/AddUserModal.vue";
import BaseLevelTable from "../components/base/base-level-table/BaseLevelTable.vue";
import BaseButton from "../components/base/base-button/BaseButton.vue";
import { useModalStore } from "../stores/modal.store";
import { useUserStore } from "../stores/user.store";

export default {
    name: "Main",
    computed: {
        modalStore: () => useModalStore(),
        userStore: () => useUserStore()
    },
    methods: {
        handleOpenModal() {
            this.modalStore.open("addUser");
        }
    },
    components: { BaseButton, BaseLevelTable, AddUserModal }
};
</script>
