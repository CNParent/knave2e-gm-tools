<script>
    import TableDefinition from "./TableDefinition.svelte";

    export let tr;

    let deleteTable = (table) => {
        if(!confirm(`Delete ${table.name}? This action is irreversible.`)) return;

        let index = tr.tables.indexOf(table);
        tr.tables = [...tr.tables.slice(0, index), ...tr.tables.slice(index + 1, tr.tables.length)];
    }
</script>

<div class="p-2">
    {#each tr.tables as table (table.id)}
        <TableDefinition {table} allTables={tr.tables} {deleteTable} />
    {/each}
</div>
