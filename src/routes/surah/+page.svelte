<script lang="ts">
	import SurahList from '@/ui/SurahList/SurahList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="p-4 bg-violet-100 dark:bg-slate-800">
	<div class="mt-20" />

	<div id="menu" class="h-full">
		<div class="title-wrapper pb-6">
			<h1 class="font-bold dark:text-slate-300">Kumpulan Surah</h1>

			<div class="w-28 h-1 my-2 bg-black dark:bg-slate-700" />
		</div>
	</div>

	{#each data.data as item (item.number)}
		<SurahList data={item} />
	{/each}
</section>
