import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        users: JSON.parse(localStorage.getItem("users")) || []
    }),
    actions: {
        add(user) {
            if (this.users.length) {
                const lastID = this.users.sort(
                    (left, right) => right.id - left.id
                )[0]["id"];
                user["id"] = lastID + 1;
            } else {
                user["id"] = 1;
            }

            this.users.push(user);
            localStorage.setItem("users", JSON.stringify(this.users));
        },
        getSorted() {
            const map = new Map();

            this.users.forEach(item => {
                if (item.director !== null) {
                    if (!map.has(item.director)) {
                        map.set(item.director, []);
                    }
                    map.get(item.director).push(item);
                }
            });

            const sortedItems = [];
            this.users.forEach(item => {
                if (item.director === null) {
                    sortedItems.push(...this.collectWithChildren(item, map));
                }
            });

            return sortedItems;
        },
        collectWithChildren(parent, map) {
            const result = [parent];
            const children = map.get(parent.id) || [];
            children.forEach(child => {
                result.push(...this.collectWithChildren(child, map));
            });
            return result;
        }
    }
});
