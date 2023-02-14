const MICROSERVICES = require('./microservices.json');
const Mongo = require('../template/tools/mongo.tool');

const COLLECTION_NAME = 'microservices';

module.exports.start = async() => {

    console.log('microservice => start');
    const delete_all_response = await Mongo.deleteMany(COLLECTION_NAME, {});
    console.log('delete_all_response', delete_all_response);

    const insert_all_response = await Mongo.insertMany(COLLECTION_NAME, MICROSERVICES);
    console.log('insert_all_response', insert_all_response);

    const get_all_response = await Mongo.aggregate(COLLECTION_NAME, []);
    console.log('get_all_response', get_all_response);
}
