/**
 * Uses a chain of handlers to format a log string.
 * The default handler outputs to console.
 * If enabled is set to false, no processing occurs.
 */
export class Channel {
    constructor() {
        this._enabled = true;
        this._prefix = () => { return ""; };
        this.handlers = [(string) => {
            console.log(string);
            return string;
        }];
    }

    get enabled() {
        return this._enabled;
    }

    set enabled(value) {
        this._enabled = value;
    }

    /**
     * Remove all handlers from this channel.
     * Calling this method will also remove the default handler.
     */
    clearHandlers() {
        this.handlers = [];
    }

    /**
     * Adds a handler to this channel.  This new handler will be called
     * after all previously added handlers.  
     * 
     * The handler signature is:
     *     handler(string) : string
     * 
     * The argument string is the currently formatted line that will be output.
     * The returned string will be passed to the next handler.
     */
    addHandler(handler) {
        this.handlers.push(handler);
    }

    /**
     * Adds a handler to this channel.  This new handler will be called
     * before all previously added handlers (see #addHandler).
     */    
    pushHandler(handler) {
        this.handlers.unshift(handler);
    }

    log(string) {
        if (!this.enabled) return;
        
        for (const handler of this.handlers) {
            string = handler(string);
        }
    }
}

export default Channel;

