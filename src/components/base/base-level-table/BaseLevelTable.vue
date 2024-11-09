<template>
    <Transition name="fade" mode="out-in">
        <table v-if="users.length" class="border-collapse w-full max-w-lg">
            <thead>
                <tr>
                    <th class="border-2 border-black p-1 w-1/2">Имя</th>
                    <th class="border-2 border-black p-1 w-1/2">Телефон</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in usersByLevel" :key="user.id">
                    <td
                        class="relative"
                        :class="[
                            user.level
                                ? 'py-1 pr-1 pl-0'
                                : 'border-2 border-black'
                        ]"
                    >
                        <div
                            :class="{
                                'border-2 border-black': user.level
                            }"
                            :style="{
                                width: `${100 - user.level * 10}%`
                            }"
                            class="p-3 z-10 text-center ml-auto"
                        >
                            {{ user.name }}
                        </div>
                    </td>
                    <td class="border-2 p-3 border-black text-center">
                        {{ user.phone }}
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else>Таблица пуста, добавьте пользователей</div>
    </Transition>
</template>

<script>
export default {
    name: "BaseLevelTable",
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    computed: {
        usersByLevel() {
            const result = [];

            for (const user of this.users) {
                result.push({
                    ...user,
                    level: this.getLevel(user)
                });
            }

            return result;
        }
    },
    methods: {
        getLevel(user, level = 0) {
            if (user.director) {
                const director = this.users.find(
                    director => director.id === user.director
                );

                return this.getLevel(director, level + 1);
            }

            return level;
        }
    }
};
</script>
