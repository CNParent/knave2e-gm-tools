<script>
    import TextInput from "./TextInput.svelte";

    export let entry;
    export let deleteEntry;
    export let allTables;
</script>

<tr>
    <td><TextInput label="Minimum" bind:value={entry.min} /></td>
    <td><TextInput label="Maximum" bind:value={entry.max} /></td>
    <td><TextInput label="Name" bind:value={entry.name} /></td>
    <td>
        <ul>
            {#each entry.tables as table}
                <li>{allTables.find(x => x.id == table)?.name ?? 'error: mapped table not found'}</li>
            {/each}
        </ul>
    </td>
    <td>
        <div class="d-flex">
            <button class="btn btn-danger" title="delete" on:click={() => deleteEntry(entry)}>&cross;</button>
        </div>
    </td>
</tr>
