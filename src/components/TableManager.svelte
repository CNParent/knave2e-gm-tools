<script>
    import TableDefinition from "./TableDefinition.svelte";
    import TextInput from "./TextInput.svelte";

    export let tables;
    export let reset;
    export let deleteAll;

    let filter = '';
    $: filtered = tables.filter(x => !filter || x.name.toLowerCase().includes(filter.toLowerCase()));

    let addTable = () => {
        let id = Math.max(...tables.map(x => x.id)) + 1;
        tables = [{ id, name: 'New Table', category: '', roll: '', entries: [] }, ...tables];
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
</div>
<div class="p-2">
    {#each filtered as table (table.id)}
        <TableDefinition {table} allTables={tables} {deleteTable} />
    {/each}
</div>
