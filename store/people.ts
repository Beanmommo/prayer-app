import { defineStore } from "pinia";
import type { People } from "~/types/data";
import peopleData from "../assets/data/people.json";

export const usePeopleStore = defineStore("people", () => {
  const peopleList = ref([] as People[]);

  const savePeople = (people: People) => {
    peopleList.value.push(people);
  };

  async function fetchPeople() {
    peopleList.value = useCloneDeep(peopleData as People[]);
  }

  return {
    peopleList,
    addPeople: savePeople,
  };
});
