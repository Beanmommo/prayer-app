<script setup lang="ts">
import type { People } from '~/types/data';

defineProps({
    people: {
        type: Object as PropType<People>,
        required: true
    }
})
</script>

<template>
    <div class="people__card">
        {{ people.name }}
    </div>
</template>

<style lang="scss" scoped>
.people__card {
    margin: $margin;
    border: 1px solid gray;
}
</style>