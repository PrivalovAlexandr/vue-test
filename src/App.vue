<template>
    <div id="app">
        <router-view />

        <AddUserModal />
    </div>
</template>

<script>
import AddUserModal from "./components/modals/AddUserModal.vue";

export default {
    name: "App",
    components: { AddUserModal }
};
</script>
