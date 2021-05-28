const Responses = require('../common/API_Response');

exports.handler = async event => {
    console.log('event', event)

    if (!event.pathParameters || !event.pathParameters.ID) {
        // failed without an ID
        return Responses._400({ 'message': 'missing the ID from the path' });
    }

    let ID = event.pathParameters.ID;

    if (data[ID]) {
        // return the data
        return Responses._200(data[ID]);
    }

    // Data not in ID
    return Responses._400({ 'message': 'No ID in data' });
};

const data = {
    1011: { name: 'Rohit Patil', age: 26, city: 'Jalgaon' },
    6789: { name: 'Tejas Jain', age: 24, city: 'Nashik' },
    1234: { name: 'Prasad Babar', age: 22, city: 'Mumbai' },
};