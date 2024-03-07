<script>
    import TextInput from "./TextInput.svelte";

    export let entry;
    export let deleteEntry;
    export let allTables;

    let addTable = () => {
        entry.tables = [...entry.tables, 0];
    }

    let removeLastTable = () => {
        entry.tables = [...entry.tables.slice(0, entry.tables.length - 1)];
    }
</script>

<tr>
    <td><TextInput label="Minimum" bind:value={entry.min} /></td>
    <td><TextInput label="Maximum" bind:value={entry.max} /></td>
    <td><TextInput label="Name" bind:value={entry.name} /></td>
    <td>
        <ul>
            {#each entry.tables as table}
            <div>
                <label class="form-group w-100 m-0">
                    <span class="collapse">Roll on table</span>
                    <select class="form-control" value={table}>
                        <option value="0"></option>
                        {#each allTables as option}
                        <option value={option.id}>{option.name}</option>
                        {/each}
                    </select>
                </label>
            </div>
            {/each}
            <div class="d-flex mt-1">
                <button class="btn btn-light" on:click={addTable}>Add Table</button>
                <button class="btn btn-danger ml-1" on:click={removeLastTable}>Remove last table</button>
            </div>
        </ul>
    </td>
    <td>
        <div class="d-flex">
            <button class="btn btn-danger" title="delete" on:click={() => deleteEntry(entry)}>&cross;</button>
        </div>
    </td>
</tr>
