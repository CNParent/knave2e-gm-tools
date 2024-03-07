<script>
    import TableDefinition from "./TableDefinition.svelte";
    import TextInput from "./TextInput.svelte";

    export let tr;

    let filter = '';
    $: filtered = tr.tables.filter(x => !filter || x.name.toLowerCase().includes(filter.toLowerCase()));

    let addTable = () => {
        let id = Math.max(...tr.tables.map(x => x.id)) + 1;
        tr.tables = [{ id, name: 'New Table', category: '', roll: '', entries: [] }, ...tr.tables];
    }

    let deleteTable = (table) => {
        if(!confirm(`Delete ${table.name}? This action is irreversible.`)) return;

        let index = tr.tables.indexOf(table);
        tr.tables = [...tr.tables.slice(0, index), ...tr.tables.slice(index + 1, tr.tables.length)];
    }

    let sortaz = () => {
        tr.tables.sort((a,b) => a.name.localeCompare(b.name));
        tr.tables = tr.tables;
    }

    let sortza = () => {
        tr.tables.sort((a,b) => b.name.localeCompare(a.name));
        tr.tables = tr.tables;
    }
</script>
<div class="m-2 p-2 border">
    <button class="btn btn-light" on:click={sortaz}>A &rarr; Z</button>
    <button class="btn btn-light" on:click={sortza}>Z &rarr; A</button>
    <button class="btn btn-light" on:click={addTable}>Add Table</button>
</div>
<div class="m-2 p-2 border">
    <TextInput label="Filter" bind:value={filter} />
</div>
<div class="p-2">
    {#each filtered as table (table.id)}
        <TableDefinition {table} allTables={tr.tables} {deleteTable} />
    {/each}
</div>
