const Server = require('./template/server');
const LOG_LEVEL = require('./template/contants/log-levels.const');
const LOG_TRANSPORT = require('./template/contants/log-transports.const');
const Logger = require('./template/tools/log.tool');

const server = new Server();

const init = () => {
    const config = server.initializeConfigs('.env');
    server.initializeLogger([
        server.logFactory(LOG_LEVEL.silly, LOG_TRANSPORT.CONSOLE, config.logs.all),
        server.logFactory(LOG_LEVEL.silly, LOG_TRANSPORT.FILE, config.logs.all)
    ])
    server.initializeMongo(config.mongo.url, config.mongo.database, () => {
        Logger.info(`Mongo initialized...`);
    });
    setTimeout(() => {
        // require('./microservices/microservices').start()
        require('./email_templates/email_templates').start()
    }, 3000);
}

init();

module.exports = server;