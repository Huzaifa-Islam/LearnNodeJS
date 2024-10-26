const {MongoClient} = require("mongodb");

const url = "mongodb+srv://officialhuzaifacoder:R4YRBHpiVCV8Cgvy@learningnodejs.pxt95.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    const data = {
        firstName : "Tom",
        lastName : "Jerry",
        city : "Delhi",
        phoneNumber : "123"
    }

    const insertResult = await collection.insertMany([data]);
    console.log("Inserted documents =>", insertResult);

    const updateResult = await collection.updateOne({ firstName : "Tom",}, { $set: {asd : "Tom123", } });
    console.log('Updated documents =>', updateResult);

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    const countResult = await collection.countDocuments({});
    console.log(countResult);

    return 'done.';
  }


  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

