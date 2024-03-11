<script>
	import Library from './components/Library.svelte';
    import TableManager from './components/TableManager.svelte';
	import TableRepository from './js/TableRepository.js';
	import io from './js/IO.js';
	import { onMount } from 'svelte';
	import { theme, setTheme } from './lib/styles.js';

	let tab = 'tables';
	let tableRepository;
	let navExpanded = false;

	onMount(async () => {
		tableRepository = new TableRepository();
		await tableRepository.loadData();
		tableRepository = tableRepository;
	});

	let reset = async () => {
		if(!confirm('Reset tables and load default table set? Any unsaved changes will be lost.')) return;

		await tableRepository.reset();
		tableRepository = tableRepository;
	}

	let deleteAll = () => {
		if(!confirm('Delete all tables? Any unsaved changes will be lost.')) return;

		tableRepository.tables = [];
		tableRepository = tableRepository;
	}

	let importTables = () => {
		if(confirm('Delete existing tables?')) {
			tableRepository.tables = [];
		}

		io.import((tables) => {
			let id = tableRepository.tables.length == 0 ? 1 : Math.max(...tableRepository.tables.map(t => t.id)) + 1;
			let idMap = [];
			tables.forEach(t => {
				idMap.push({ oldId: t.id, newId: id });
				t.id = id++;
			});

			idMap.forEach(pair => {
				let entries = tables
					.reduce((a,b) => [...a, ...b.entries], [])
					.filter(e => e.tables.includes(pair.oldId));
				
				entries.forEach(e => {
					let index = e.tables.indexOf(pair.oldId);
					e.tables = [...e.tables.slice(0, index), ...e.tables.slice(index + 1, e.tables.length), pair.newId]
				});
			});

			tableRepository.tables = [...tableRepository.tables, ...tables];
		});
	}
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
				<li class="nav-item">
					<a class="nav-link" href="#" on:click={importTables}>Import Tables</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" on:click={() => io.export(tableRepository.tables)}>Export Tables</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" on:click={() => tableRepository.save()}>Save Tables</a>
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
	{#if !tableRepository || !tableRepository.done}
		Loading table data...
	{:else}
		{#if tab == 'tables'}
			<div class="p-2">
				<div class="row">
					<div class="col">
						<h1>Table Roller</h1>
					</div>
				</div>
				<hr />
				<Library bind:tables={tableRepository.tables} />
			</div>
		{:else if tab == "manager"}
			<TableManager bind:tables={tableRepository.tables} {reset} {deleteAll} />
		{/if}
	{/if}
</main>
