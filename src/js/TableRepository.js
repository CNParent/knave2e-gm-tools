import RestClient from './RestClient.js'

export default class TableRepository {
    constructor() {
        this.tables = [];
        this.client = new RestClient();
    }

    async loadData() {
        if (this.tables.length > 0) return;

        let data = await this.client.get('seed.json');
        this.tables = JSON.parse(data);
    }
}
