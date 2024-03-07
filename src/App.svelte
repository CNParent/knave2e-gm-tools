<script>
    import Library from './components/Library.svelte';
	import TableRepository from './js/TableRepository.js'
	import { theme, setTheme } from './lib/styles.js'

	let tab = 'tables';
	let tr = new TableRepository();
	let navExpanded = false;
</script>

<svelte:head>
    <link rel="stylesheet" href="global.css">
	{#if theme == 'dark'}
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/vinorodrigues/bootstrap-dark@0.6.1/dist/bootstrap-dark.min.css">
	{:else}
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
	{/if}
</svelte:head>

<main id="app">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">Knave 2e GM Tools</a>
		<button class="navbar-toggler" type="button" on:click={() => navExpanded = !navExpanded} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="{navExpanded ? "" : "collapse"} navbar-collapse">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item {tab == "tables" ? "active" : ""}">
					<a class="nav-link" href="#" on:click={() => tab = "tables"}>Table Roller</a>
				</li>
				<li class="nav-item {tab == "manager" ? "active" : ""}">
					<a class="nav-link" href="#" on:click={() => tab = "manager"}>Table Manager</a>
				</li>
			</ul>			
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					{#if theme == 'dark'}
					<a class="nav-link" href="#" on:click={() => setTheme('light')}>Light mode</a>
					{:else}
					<a class="nav-link" href="#" on:click={() => setTheme('dark')}>Dark mode</a>
					{/if}
				</li>
			</ul>
		</div>
	</nav>
	{#if tab == 'tables'}
	<div class="p-2">
		<div class="row">
			<div class="col">
				<h1>Table Roller</h1>
			</div>
		</div>
		<hr />
        {#await tr.loadData()}
            Loading table data...
        {:then} 
            <Library tables={tr.tables} />
        {/await}
	</div>
	{:else if tab == "manager"}
		Manager not yet available
	{/if}
</main>
