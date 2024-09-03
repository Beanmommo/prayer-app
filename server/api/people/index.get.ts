import peopleData from "../../../assets/data/people.json";

export default defineEventHandler(async (event) => {
  try {
    return peopleData;
  } catch (e) {
    throw new Error("Error fetching people data");
  }
});
