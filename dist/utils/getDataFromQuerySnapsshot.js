"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDataFromQuerySnapsshot = (snapshot) => {
    const todos = [];
    snapshot.forEach((doc) => todos.push(Object.assign({ id: doc.id }, doc.data())));
    return todos;
};
exports.default = getDataFromQuerySnapsshot;
//# sourceMappingURL=getDataFromQuerySnapsshot.js.map