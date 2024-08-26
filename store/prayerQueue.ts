export const usePrayerQueueStore = defineStore("prayerQueue", () => {
  const prayerQueue = ref([] as string[]);

  function startPrayerQueue(queueList: string[]) {
    // string can be Key for people or just name
    let queueDataJSON = JSON.stringify(queueList);
    $fetch("/api/prayer", {
      method: "POST",
      body: {
        queueData: queueDataJSON,
      },
    });
  }

  return {
    startPrayerQueue,
  };
});
