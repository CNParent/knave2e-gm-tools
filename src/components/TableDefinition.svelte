<script>
    import TableEntry from "./TableEntry.svelte";
    import TextInput from "./TextInput.svelte";

    export let table;
    export let allTables;
    export let deleteTable;

    let expand = false;

    let addEntry = () => {
        let id = table.entries.length == 0 ? 1 : Math.max(...table.entries.map(x => x.id)) + 1;
        let min = table.entries.length == 0 ? 1 : Math.max(...table.entries.map(x => x.max)) + 1;
        table.entries = [{ id, name: '', min, max: min, tables: [] }, ...table.entries];
    }

    let deleteEntry = (entry) => {
        let index = table.entries.indexOf(entry);
        table.entries =  [...table.entries.slice(0, index), ...table.entries.slice(index + 1, table.entries.length)];
    };

    let sortEntries = () => {
        table.entries.sort((a,b) => a.min - b.min);
        table.entries = table.entries;
    }

    console.log(table);
</script>

<div class="w-100 mb-1">
    <button on:click={() => expand = !expand} class="text-left btn btn-light border w-100">{table.name}</button>
    {#if expand}
    <div class="p-2 border">
        <div class="d-flex">
            <button class="btn btn-light border" on:click={addEntry}>Add Entry</button>
            <button class="btn btn-light border" on:click={sortEntries}>Sort Entries</button>
            <button class="btn btn-danger border" on:click={() => deleteTable(table)}>Delete Table</button>
        </div>
        <hr />
        <TextInput label="Display Name" bind:value={table.name} />
        <TextInput label="Category" bind:value={table.category} />
        <TextInput label="Roll" bind:value={table.roll} />
        <hr />
        <h2>Entries</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                    <th>Text</th>
                    <th>Tables</th>
                    <th><span class="collapse">Actions</span></th>
                </tr>
            </thead>
            <tbody>
                {#each table.entries as entry (entry.id)}
                <TableEntry {entry} {deleteEntry} {allTables} />
                {/each}
            </tbody>
        </table>
    </div>
    {/if}
</div>
