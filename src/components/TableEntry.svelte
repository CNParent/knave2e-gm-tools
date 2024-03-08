<script>
    import TextInput from "./TextInput.svelte";

    export let entry;
    export let deleteEntry;
    export let allTables;

    let expand = false;

    let addTable = () => {
        entry.tables = [...entry.tables, 0];
    }

    let removeLastTable = () => {
        entry.tables = [...entry.tables.slice(0, entry.tables.length - 1)];
    }
</script>

<div class="m-1 p-2 border">
    <TextInput label="Minimum" bind:value={entry.min} />
    <TextInput label="Maximum" bind:value={entry.max} />
    <TextInput label="Name" bind:value={entry.name} />
    <div>
        <button on:click={() => expand = !expand} class="text-left btn btn-light w-100">{expand ? 'Hide tables' : 'Show tables'}</button>
        {#if expand}
            <div class="ml-2 p-2 border">
                {#each entry.tables as table}
                    <label class="form-group w-100 m-0">
                        <span class="collapse">Roll on table</span>
                        <select class="form-control" bind:value={table}>
                            <option value="0"></option>
                            {#each allTables as option}
                            <option value={option.id}>{option.name}</option>
                            {/each}
                        </select>
                    </label>
                {/each}
                <div class="d-flex mt-1">
                    <button class="btn btn-light" on:click={addTable}>Add Table</button>
                    <button class="btn btn-danger ml-1" on:click={removeLastTable}>Remove last table</button>
                </div>
            </div>
        {/if}
    </div>
    <div class="d-flex">
        <button class="btn btn-danger" title="delete" on:click={() => deleteEntry(entry)}>Delete entry</button>
    </div>
</div>
