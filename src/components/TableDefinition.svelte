<script>
    import TextInput from "./TextInput.svelte";

    export let table;

    let expand = false;
</script>

<div class="w-100 m-1">
    <button on:click={() => expand = !expand} class="text-left btn btn-light border w-100">{table.name}</button>
    {#if expand}
    <div class="p-2 border">
        <TextInput label="ID" bind:value={table.id} />
        <TextInput label="Display Name" bind:value={table.name} />
        <TextInput label="Category" bind:value={table.category} />
        <TextInput label="Roll" bind:value={table.roll} />
    </div>
    {/if}
</div>
