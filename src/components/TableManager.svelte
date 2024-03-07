<script>
    import TableDefinition from "./TableDefinition.svelte";

    export let tr;
</script>

<div class="p-2">
    {#each tr.tables as table (table.id)}
        <TableDefinition {table} allTables={tr.tables} />
    {/each}
</div>
