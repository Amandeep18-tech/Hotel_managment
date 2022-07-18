const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

async function updateUserData(body) {
    try{
        let customerId = await generateCustomerId();
        
        var params = {
            TableName: 'b2b_userDetails',
            Item: {
                'customerId': { N: `${customerId}` },
                'securityQuestion': { S: `${body.securityQuestion}` },
                'securityAnswer':{S: `${body.securityAnswer}`},
                'username':{S: `${body.username}`},
                'emailId': { S: `${body.emailId}` },
                'cipher': {N:`${body.cipher}`},
                'date': { S: `${new Date()}`}
            }
        };
        
        await ddb.putItem(params, function (err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success", data);
            }
        }).promise();
    }catch(e){
        console.log(e);
    }
}

async function generateCustomerId(){
    let flag = true;
    let id;
    while(flag){
        id = Math.floor(100000 + Math.random() * 900000);
        flag = await checkCustomerId(id) > 0 ? true : false;
    }
    return id;
}

async function checkCustomerId(customerId) {
    let ExpressionAttributeValues = {};
    let FilterExpression = "";
    FilterExpression = "customerId = :customerId";
    ExpressionAttributeValues = {
        ':customerId': { N: `${customerId}` },
    };

    var params = {
        FilterExpression,
        ExpressionAttributeValues,
        Select: "COUNT",
        TableName: 'b2b_userDetails'
    };

    const count = await ddb.scan(params).promise();
    console.log("count == ",count.Count);
    return count.Count;
}

exports.handler = async (event) => {
    let body = JSON.parse(event.body);
    
    await updateUserData(body);
    
    const response = {
        statusCode: 200,
        body: {
            data:{},
            message:"User registered successfully"
        },
    };
    return response;
};
