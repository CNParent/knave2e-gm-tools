<script>
    import TextInput from "./TextInput.svelte";

    export let entry;
</script>

<tr>
    <td><TextInput label="Minimum" bind:value={entry.min} /></td>
    <td><TextInput label="Maximum" bind:value={entry.max} /></td>
    <td><TextInput label="Name" bind:value={entry.name} /></td>
    <td>
        <ul>
            {#each entry.tables as table}
                <li>{table}</li>
            {/each}
        </ul>
    </td>
</tr>
