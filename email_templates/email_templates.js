const Mongo = require('../template/tools/mongo.tool');
const DB_COLLECTION = require('../template/contants/db-collections');

const COLLECTION_NAME = DB_COLLECTION.EMAIL_TEMPLATES;

module.exports.start = async() => {

    console.log('email_templates => start');
    const delete_all_response = await Mongo.deleteMany(COLLECTION_NAME, {});
    console.log('delete_all_response', delete_all_response);

    const email_templates = [];
    email_templates.push({
        name: 'sign_up',
        subject: require('./templates/sign_up_template').subject,
        html: require('./templates/sign_up_template').html,
        text: require('./templates/sign_up_template').text
    })
    const insert_all_response = await Mongo.insertMany(COLLECTION_NAME, email_templates);
    console.log('insert_all_response', insert_all_response);

    const get_all_response = await Mongo.aggregate(COLLECTION_NAME, []);
    console.log('get_all_response', get_all_response);
}
