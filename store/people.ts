import { defineStore } from "pinia";
import type { People } from "~/types/data";

export const usePeopleStore = defineStore("people", () => {
  const peopleList = ref([] as People[]);

  const savePeople = (people: People) => {
    peopleList.value.push(people);
  };

  async function fetchPeople() {
    const data = await $fetch("/api/people", { method: "GET" });
    peopleList.value = data;
  }

  return {
    peopleList,
    savePeople,
    fetchPeople,
  };
});
