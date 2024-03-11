<script>
    import Table from './Table.svelte'
	import actions from '../js/LibraryActions.js'

    export let tables = [];
    let filter = '';
    let modifier = '+0';
    let category = '';
    let topLevelOnly = true;
    let results = [];
    let categories = [...new Set(tables.filter(x => x.category).map(x => x.category))].sort((a,b) => a.localeCompare(b));
    $: filtered = tables
        .filter(x => !category || x.category == category)
        .filter(x => !topLevelOnly || x.topLevel)
        .filter(x => !filter || x.name.toLowerCase().includes(filter.toLowerCase()));

    function adjust(n) {
        n += Number(modifier);
        if (n < 0) modifier = `${n}`;
        else modifier = `+${n}`;
    };

	function handleRoll(table) {
		results = actions.rollOnTable({ table, modifier, tables });
	}

</script>

<div class="row">
    <div class="col-md-6">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="btn-group m-1">
                                <button on:click={() => adjust(-1)} class="btn btn-light border-dark">&darr;</button>
                                <button class="btn btn-dark border-dark">{modifier}</button>
                                <button on:click={() => adjust(1)} class="btn btn-light border-dark">&uarr;</button>
                            </div>
                            <button on:click={() => modifier = '+0'} class="btn btn-light border-dark m-1">reset</button>
                        </div>
                        <input class="form-control" placeholder="filter" bind:value={filter}>
                        <select bind:value={category} class="form-control">
                            <option></option>
                            {#each categories as c}
                                <option>{c}</option>
                            {/each}
                        </select>
                        <label class="form group w-100">
                            <input type="checkbox" bind:checked={topLevelOnly}>
                            <span>Top Level Only</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        {#each filtered as table}
                            <Table {table} {handleRoll} />
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card">
            <div class="card-body">
                {#each results as result}
                    <p style="white-space: pre-wrap;">Rolled {result.roll} on {result.table}: {result.description}</p>
                {/each}
            </div>
        </div>
    </div>
</div>