"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("vscode-languageserver/node");
const connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
connection.onInitialize((params) => {
    return {
        capabilities: {
            textDocumentSync: 1
        }
    };
});
connection.listen();
