import { MongoClient } from "mongodb";

const url =
  "mongodb://swaad-menu-db:1jo5UVJl4sSItouJgixzuADoyfuWguFhxAR4w1xJTSEZAJuCdNDU2YSe90BNHwFjXFHAftZAzaTJACDbEUtEzA%3D%3D@swaad-menu-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@swaad-menu-db@";
const client = new MongoClient(url);

module.exports = async function (context, req) {
  await client.connect();
  const database = client.db("swaad");
  const collection = database.collection("menu");

  let menuItem = await collection.findOne({ _id: req.params.id });

  if (!menuItem) {
    return (context.res = {
      status: 400,
      body: "Couldnt find that Menu Item",
    });
  }

  return (context.res = {
    // status: 200, /* Defaults to 200 */
    body: menuItem,
  });
};
