import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
    state: () => ({
        modals: {
            addUser: false
        }
    }),
    actions: {
        open(name) {
            this.modals[name] = true;
            document.body.classList.add("overflow-hidden");
        },
        close(name) {
            this.modals[name] = false;
            document.body.classList.remove("overflow-hidden");
        }
    }
});
