var AWS = require("aws-sdk");

// Create the DynamoDB service object
var db = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

AWS.config.update({ region: "REGION" });

const getSymptom = async () => {
    var params = {
        TableName: "Symptom",
        Key: {
          Name: { S: "TestSymptom" },
        },
      };

      try {
        var result = await db.getItem(params).promise();
      }
      catch(error) {
        console.log('error');
        console.log(error);
      }

      return result.Item.Name.S;
}

module.exports = getSymptom



