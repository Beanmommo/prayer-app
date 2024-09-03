<script setup lang="ts">
import { usePeopleStore } from '~/store/people';
import { usePrayerQueueStore } from '~/store/prayerQueue';

const prayerQueueStore = usePrayerQueueStore()
const peopleListForm = ref([] as string[])

const nameField = ref('');

function clickHandlerAdd() {
    peopleListForm.value.push(nameField.value);
    nameField.value = '';
}

function clickHandlerStart() {
    prayerQueueStore.startPrayerQueue(peopleListForm.value);

}

</script>

<template>
    <template v-for="people in peopleListForm">
        <PeopleListCard>
            {{ people }}
        </PeopleListCard>
    </template>
    <input type="text" placeholder="name" v-model="nameField" v-on:keyup.enter="clickHandlerAdd" />
    <button @click="clickHandlerAdd">add</button>
    <div>
        <button @click="clickHandlerStart">Start Praying</button>
    </div>

</template>