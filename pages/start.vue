<template>
    <LayoutStartPage>
        <div>
            <h1 class="header">
                Welcome
            </h1>
            <p>
                PrayerFirst is a simple app that helps you to pick a person to pray for.
                How it works is simple:
            <ol>
                <li>
                    First you have to have a list of people you want to pray for. let it be from people at your local
                    church, family or friends.
                </li>
                <li>
                    Then you add them to the list.
                </li>
                <li>
                    We will then randomly pick a person from the list.
                </li>
                <li>
                    Then start Praying for them!, we also allow you to note down the prayer points.
                </li>
                <li>
                    After you're done, we will mark them as prayed and continue with the list.
                </li>
                <li>
                    If you're done with the list, we will show a summary of the people you prayed for. and their saved
                    prayer points.
                </li>
                <li>
                    May the Lord blesses you :)
                </li>
            </ol>
            </p>
        </div>

        <NuxtLink to="/people_list">
            <button>
                Lets Start!
            </button>
        </NuxtLink>
    </LayoutStartPage>
</template>

<style lang="scss" scoped>
.header {
    text-align: center;
}
</style>