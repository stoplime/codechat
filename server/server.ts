import { createConnection, ProposedFeatures } from 'vscode-languageserver/node';

const connection = createConnection(ProposedFeatures.all);

connection.onInitialize((params) => {
    return {
        capabilities: {
            textDocumentSync: 1
        }
    };
});

connection.listen();
