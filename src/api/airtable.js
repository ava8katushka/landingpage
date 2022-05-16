
const Airtable = require("airtable");

async function addNameAndEmailToDB(name, email, successCallback, errorCallback) {
    // Your Table ID from Airtable
    const db = new Airtable({
      apiKey : process.env.AIRTABLE_KEY,
       endpointUrl : "https://api.airtable.com" 
    }).base(process.env.AIRTABLE_DB);

    const databaseID = "tblg9oC5OXWpy23AW";
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
