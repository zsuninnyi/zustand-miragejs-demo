import { Server } from 'miragejs';

const createMockAPIServer = () => {
    let exportableInit = true;
    return new Server({
        routes() {
            this.namespace = 'api';

            this.get('/parameter/loadBulk', () => {
                return {
                    exportable: exportableInit,
                };
            });

            this.post('/parameter/saveBulk', (schema, request) => {
                const { exportable } = JSON.parse(request.requestBody);
                exportableInit = exportable
                return {
                    exportable,
                };
            });
        },
    });
};
export default createMockAPIServer;
