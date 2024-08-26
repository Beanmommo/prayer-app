import fs from "fs";

export default defineEventHandler(async (event) => {
  const { queueData } = await readBody(event);
  fs.writeFile("./assets/data/activeQueue.json", queueData, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Successfully wrote file");
    }
  });
});
