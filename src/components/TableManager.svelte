<script>
    import TableDefinition from "./TableDefinition.svelte";
    import TextInput from "./TextInput.svelte";

    export let tables;
    export let reset;
    export let deleteAll;

    let category = '';
    let filter = '';
    let topLevelOnly = true;

    $: categories = [...new Set(tables.filter(x => x.category).map(x => x.category))].sort((a,b) => a.localeCompare(b));
    $: filtered = tables
        .filter(x => !topLevelOnly || x.topLevel)
        .filter(x => !category || x.category == category)
        .filter(x => !filter || x.name.toLowerCase().includes(filter.toLowerCase()));

    let addTable = () => {
        let id = Math.max(...tables.map(x => x.id)) + 1;
        tables = [{ id, name: 'New Table', category: '', roll: '', topLevel: false, entries: [] }, ...tables];
    }

    let deleteTable = (table) => {
        if(!confirm(`Delete ${table.name}? This action is irreversible.`)) return;

        let index = tables.indexOf(table);
        tables = [...tables.slice(0, index), ...tables.slice(index + 1, tables.length)];
    }

    let sortaz = () => {
        tables.sort((a,b) => a.name.localeCompare(b.name));
        tables = tables;
    }

    let sortza = () => {
        tables.sort((a,b) => b.name.localeCompare(a.name));
        tables = tables;
    }
</script>
<div class="m-2 p-2 border">
    <button class="btn btn-light" on:click={sortaz}>A &rarr; Z</button>
    <button class="btn btn-light" on:click={sortza}>Z &rarr; A</button>
    <button class="btn btn-light" on:click={addTable}>Add Table</button>
    <button class="btn btn-danger" on:click={reset}>Reset</button>
    <button class="btn btn-danger" on:click={deleteAll}>Delete All</button>
</div>
<div class="m-2 p-2 border">
    <TextInput label="Filter" bind:value={filter} />
    <label class="form-group w-100 m-0">
        <span class="collapse">Category filter</span>
        <select class="form-control" bind:value={category}>
            <option></option>
            {#each categories as c}
            <option value="{c}">{c}</option>
            {/each}
        </select>
    </label>
    <label class="form-group w-100">
        <input type="checkbox" bind:checked={topLevelOnly}>
        <span>Top Level Only</span>
    </label>
</div>
<div class="p-2">
    {#each filtered as table (table.id)}
        <TableDefinition {table} allTables={tables} {deleteTable} />
    {/each}
</div>
