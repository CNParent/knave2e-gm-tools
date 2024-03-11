<script>
    export let allTables;
    export let value;

    let dataListId = crypto.randomUUID();
    let search = allTables.find(t => t.id == value)?.name ?? '';

    function setSubTableValue() {
        let table = allTables.find(t => t.name == search);
        if (!table) alert(`Table ${search} does not exist`);
        else value = table.id;
    }
</script>

<label class="form-group w-100 m-0">
    <span class="collapse">Roll on table</span>
    <input class="form-control" list={dataListId} bind:value={search} on:change={setSubTableValue} placeholder="Roll on table...">
    <datalist id={dataListId} value={search}>
        {#each allTables as option}
        <option value={option.name} />
        {/each}
    </datalist>
</label>
