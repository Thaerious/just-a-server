import Channel from "./Channel.js";
import getPos from "./getPos.js";

/**
 * Use logger.getChannel('name').log('message') instead of console.log('message')
 * Turn off a channel with logger.getChannel('name').enabled = false
 * Turn on a channel with logger.getChannel('name').enabled = true
 */
class Logger {
    constructor() {
        this.channels = {
            "log": new Channel()
        }
    }

    static get instance() {
        return Logger.logger = Logger.logger ?? new Logger();
    }

    /**
     * Retrieve a logging channel by name.
     * Creates the channel if it hasnt' been accessed before.
     **/
    channel(name) {
        name = name ?? "log";
        if (!this.channels[name]) this.channels[name] = new Channel();
        return this.channels[name];
    }

    /**
     * Return an object with a function field for each channel.
     * Will create any channel not already used.
     * Calling the function will call the log function of the channel.
     */
    all(...channels) {
        const all = {};
        for (const name of channels) {
            if (!this.channels[name]) this.channels[name] = new Channel();
        }

        for (const name in this.channels) {
            all[name] = string => this.channels[name].log(string);
        }

        return all;
    }
}

export { Logger as default, getPos }