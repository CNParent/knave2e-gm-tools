<script>
    import TableEntry from "./TableEntry.svelte";
    import TextInput from "./TextInput.svelte";
    import labels from "./../js/Labels.js";
    import {buttons} from "./../lib/styles";

    export let table;
    export let allTables;
    export let deleteTable;

    const modes = {
        designer: 'designer',
        json: 'json',
        list: 'list'
    }

    let expand = false;
    let expandEntries = false;
    let editMode = modes.designer;
    let entriesJson = JSON.stringify(table.entries, null, 2);
    let list = table.entries.map(e => e.name).reduce((a,b) => `${a}${b}\n`, '');

    let addEntry = () => {
        let id = table.entries.length == 0 ? 1 : Math.max(...table.entries.map(x => x.id)) + 1;
        let min = table.entries.length == 0 ? 1 : Math.max(...table.entries.map(x => x.max)) + 1;
        table.entries = [{ id, name: '', min, max: min, tables: [] }, ...table.entries];
        table = table;
    }

    let deleteEntry = (entry) => {
        let index = table.entries.indexOf(entry);
        table.entries =  [...table.entries.slice(0, index), ...table.entries.slice(index + 1, table.entries.length)];
        table = table;
    }

    let saveEntriesJson = () => {
        try {
            let entries = JSON.parse(entriesJson)
            entries.forEach((e, i) => {
                e.min = e.min ? e.min : i + 1;
                e.max = e.max ? e.max : i + 1;
                e.name = e.name ? e.name : 'New entry';
                e.tables = e.tables ? e.tables : [];
            });

            table.entries = entries;
            updateDone();
        }
        catch(e){
            alert(e);
        }
    }

    let saveList = () => {
        if (!confirm(labels.entries.saveList)) return;

        table.entries = list.split('\n').filter(e => e).map((e,i) => ({
            min: i+1,
            max: i+1,
            name: e,
            tables: []
        }));

        updateDone();
    }

    let updateDone = () => {
        editMode = modes.designer;
        table = table;
        alert(labels.changesSavedSuccessfully);
    }

    let sortEntries = () => {
        table.entries.sort((a,b) => a.min - b.min);
        table.entries = table.entries;
        table = table;
    }
</script>

<div class="w-100 mb-1">
    <button on:click={() => expand = !expand} class="text-left btn btn-light border w-100">{table.name}</button>
    {#if expand}
    <div class="d-flex">
        <div class="pr-1" style="width: 1em">
            <button class="{buttons.verticalButton}" on:click={() => expand = false}><span class="collapse">Hide table definition</span></button>
        </div>
        <div class="flex-grow-1">
            <TextInput label="Display Name" bind:value={table.name} />
            <TextInput label="Category" bind:value={table.category} />
            <TextInput label="Roll" bind:value={table.roll} />
            <label class="form-group w-100">
                <input type="checkbox" bind:checked={table.topLevel}>
                <span>Top Level</span>
            </label>
            <hr />
            <button class="btn btn-light w-100 text-left border" on:click={() => expandEntries = !expandEntries}>{expandEntries ? "Hide entries" : "Show entries"}</button>
            {#if expandEntries}
                <button class="btn btn-light border" on:click={addEntry}>Add Entry</button>
                <button class="btn btn-light border" on:click={sortEntries}>1 &rarr; N</button>
                <div class="btn-group">
                    <button class="btn btn-light {editMode == modes.designer ? "active" : ""}" on:click={() => editMode = modes.designer}>Designer</button>
                    <button class="btn btn-light {editMode == modes.list ? "active" : "" }" on:click={() => editMode = modes.list}>List</button>
                    <button class="btn btn-light {editMode == modes.json ? "active" : ""}" on:click={() => editMode = modes.json}>JSON</button>
                </div>
                {#if editMode == modes.designer}
                <div class="d-flex">
                    <div class="pr-1" style="width: 1em">
                        <button class="{buttons.verticalButton}" on:click={() => expandEntries = false}><span class="collapse">Hide table definition</span></button>
                    </div>
                    <table class="table table-striped flex-grow-1">
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
                </div>
                {:else if editMode == modes.list}
                    <button class="btn btn-light ml-1" on:click={saveList}>Save</button>
                    <textarea 
                        tabindex="0" 
                        contenteditable="true" 
                        class="form-control w-100" 
                        style="font-family:monospace;font-size:small;height:30em;resize:none;" 
                        bind:value={list} />
                {:else if editMode == modes.json}
                    <button class="btn btn-light ml-1" on:click={saveEntriesJson}>Save</button>
                    <textarea 
                        tabindex="0" 
                        contenteditable="true" 
                        class="form-control w-100" 
                        style="font-family:monospace;font-size:small;height:30em;resize:none;" 
                        bind:value={entriesJson} />
                {/if}
                <hr />
            {/if}
            <button class="btn btn-danger border" on:click={() => deleteTable(table)}>Delete Table</button>
        </div>
    </div>
    {/if}
</div>
