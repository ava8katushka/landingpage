
const Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  //Your API Key from Airtable
  apiKey: process.env.AIRTABLE_KEY,
})

// Your Table ID from Airtable
const db = Airtable.base(process.env.AIRTABLE_DB);
const databaseID = "tblg9oC5OXWpy23AW";

async function addNameAndEmailToDB(name, email, successCallback, errorCallback) {
    db(databaseID).create(
        [
          {
            fields: {
              Name: name,
              Email: email,
            },
          },
        ],
        (err) => {
          if (err) {
            errorCallback(err);
          } else {
            successCallback();
          }
        }
      );
}

export {addNameAndEmailToDB};
