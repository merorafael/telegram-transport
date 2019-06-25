const https = require('https')
const Transport = require('winston-transport')

modules.export = class TelegramTransport extends Transport {
    constructor(opts) {
        super(opts)
        opts = opts || {}

        if (!opts.token || !opts.chatId) {
            throw new Error('Winston telegram transport requires token and chatId property')
        }
    }

    log (info, callback) {
    }
}
