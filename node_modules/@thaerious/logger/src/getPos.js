/**
 * Use the Error stack trace to determine the filename and line positions.
 * Returns object {file:string, line:int, index:int}
 * 
 */
function getPos() {
    const stack = new Error().stack.split("\n");

    let line = stack.shift();
    while (stack.length > 0) {
        if (line.indexOf("/Logger.js:") !== -1) {
            if (stack.length > 0) return { file: "", line: 0, index: 0 };
            line = stack.shift();
            const parsed = /\/([^/:]+):(\d+):(\d+)/.exec(line);
            return { file: parsed[1], line: parsed[2], index: parsed[3] };
        } else {
            line = stack.shift();
        }
    }
}

export default getPos;