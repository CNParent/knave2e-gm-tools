import RestClient from './RestClient.js'

const localStorageKey = 'knave2e-gm-tools-tables';

export default class TableRepository {
    constructor() {
        this.tables = [];
        this.client = new RestClient();
        this.done = false;
    }

    async loadData() {
        if (this.tables.length > 0) return;

        let saved = localStorage.getItem(localStorageKey);
        if (saved) {
            try
            {
                this.tables = JSON.parse(saved);
                this.done = true;
                return;
            }
            catch
            {
                alert('Could not parse stored tables, loading default tables.');
            }
        }

        let data = await this.client.get('seed.json');
        this.tables = JSON.parse(data);
        this.done = true;
    }

    save() {
        localStorage.setItem(localStorageKey, JSON.stringify(this.tables));
        alert('Saved current tables');
    }
}
