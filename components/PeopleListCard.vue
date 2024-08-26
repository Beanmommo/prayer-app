<template>
    <div class="people__card">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.people__card {
    margin-bottom: $margin;
    padding: $padding ;
    border: 1px solid gray;
}
</style>