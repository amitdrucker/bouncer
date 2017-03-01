"use strict";
/**
 * Created by Eyal on 25/01/2017.
 */
var counter = 0;
var Task = (function () {
    function Task(desc, isDone) {
        if (isDone === void 0) { isDone = false; }
        this.id = counter++;
        this.description = desc;
        this.isDone = isDone;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.class.js.map