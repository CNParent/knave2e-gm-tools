<script>
    export let label;
    export let value;
</script>

<label class="form-group row">
    <div class="col-sm-2">
        <span class="ml-auto">{label}</span>
    </div>
    <div class="col-sm-10">
        <input class="form-control" bind:value={value}>
    </div>
</label>