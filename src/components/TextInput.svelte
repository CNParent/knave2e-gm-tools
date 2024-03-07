<script>
    export let label;
    export let value;
</script>

<label class="form-group w-100 m-0">
    <span class="collapse">{label}</span>
    <input class="form-control" placeholder="{label}" bind:value={value}>
</label>