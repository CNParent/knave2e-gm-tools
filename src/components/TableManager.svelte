<script>
    import TableDefinition from "./TableDefinition.svelte";

    export let tr;
    console.log(tr);
</script>

<div class="p-2">
    {#each tr.tables as table (table.id)}
        <TableDefinition {table} />
    {/each}
</div>
