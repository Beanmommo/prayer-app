<script setup lang="ts">
import { usePrayerQueueStore } from '~/store/prayerQueue';
import type { People } from '~/types/data';

const prayerQueueStore = usePrayerQueueStore()

const peopleListForm = ref([] as People[])

const people = ref({} as People);

function clickHandlerAdd() {
    peopleListForm.value.push(people.value);
}

function clickHandlerStart() {
    prayerQueueStore.startPrayerQueue(peopleListForm.value);
}

</script>

<template>
    <template v-for="people in peopleListForm">
        <PeopleListCard :people="people" />
    </template>
    <input type="text" placeholder="name" v-model="people.name" />
    <button @click="clickHandlerAdd">add</button>
    <div>
        <button @click="clickHandlerStart">Start Praying</button>
    </div>

</template>