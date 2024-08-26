import type { People } from "~/types/data";

export const usePrayerQueueStore = defineStore("prayerQueue", () => {
  const prayerQueue = ref([] as People[]);

  function startPrayerQueue(peopleList: People[]) {
    prayerQueue.value = peopleList;
  }

  return {
    startPrayerQueue,
  };
});
