<script>
    import TableEntry from "./TableEntry.svelte";
    import TextInput from "./TextInput.svelte";

    export let table;
    export let allTables;
    export let deleteTable;

    let expand = false;
    let expandEntries = false;
    let showJson = false;
    let entriesJson = JSON.stringify(table.entries, null, 2);

    let addEntry = () => {
        let id = table.entries.length == 0 ? 1 : Math.max(...table.entries.map(x => x.id)) + 1;
        let min = table.entries.length == 0 ? 1 : Math.max(...table.entries.map(x => x.max)) + 1;
        table.entries = [{ id, name: '', min, max: min, tables: [] }, ...table.entries];
    }

    let deleteEntry = (entry) => {
        let index = table.entries.indexOf(entry);
        table.entries =  [...table.entries.slice(0, index), ...table.entries.slice(index + 1, table.entries.length)];
    }

    let saveEntriesJson = () => {
        try {
            let entries = JSON.parse(entriesJson)
            table.entries = entries;
            alert('Changes saved successfully');
        }
        catch(e){
            alert(e);
        }
    }

    let sortEntries = () => {
        table.entries.sort((a,b) => a.min - b.min);
        table.entries = table.entries;
    }
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
        <button class="btn btn-light w-100 text-left border" on:click={() => expandEntries = !expandEntries}>{expandEntries ? "Hide entries" : "Show entries"}</button>
        {#if expandEntries}
            <div class="btn-group">
                <button class="btn btn-light {showJson ? "" : "active"}" on:click={() => showJson = false}>Designer</button>
                <button class="btn btn-light {showJson ? "active" : ""}" on:click={() => showJson = true}>JSON</button>
            </div>
            {#if !showJson}
            <table class="table table-striped">
                <thead class="collapse">
                    <tr>
                        <th>Item</th>
                    </tr>
                </thead>
                <tbody>
                    {#each table.entries as entry (entry.id)}
                    <tr>
                        <TableEntry {entry} {deleteEntry} {allTables} />
                    </tr>
                    {/each}
                </tbody>
            </table>
            {:else}
                <button class="btn btn-light ml-1" on:click={saveEntriesJson}>Save</button>
                <textarea 
                    tabindex="0" 
                    contenteditable="true" 
                    class="form-control w-100" 
                    style="font-family:monospace;font-size:small;height:30em;resize:none;" 
                    bind:value={entriesJson} />
            {/if}
        {/if}
    </div>
    {/if}
</div>
