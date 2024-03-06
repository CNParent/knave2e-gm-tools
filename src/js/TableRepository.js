import RestClient from './RestClient.js'

export default class TableRepository {
    constructor() {
        this.tables = [];
        this.client = new RestClient();
    }

    async loadData() {
        let data = await this.client.get('test.json');
        this.tables = JSON.parse(data);
    }
}