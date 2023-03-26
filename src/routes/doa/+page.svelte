<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="p-4 bg-violet-100 dark:bg-slate-800">
	<div class="mt-20" />

	<div id="menu" class="h-full">
		<div class="title-wrapper pb-6">
			<h1 class="font-bold dark:text-slate-300">Doa - Doa Harian</h1>

			<div class="w-28 h-1 my-2 bg-black dark:bg-slate-700" />
		</div>
	</div>

	{#each data.data as item (item.id)}
		<div
			class="p-4 mb-6 flex flex-col shadow-skew bg-white dark:bg-slate-700 border border-black"
			role="button"
		>
			<p class="title text-lg dark:text-slate-300 font-bold">
				{item.doa}
			</p>

			<div class="w-20 mt-1 mb-2 h-1 bg-black dark:bg-slate-800" />

			<p class="content text-2xl dark:text-slate-300 py-4">
				{item.ayat}
			</p>

			<p class="verse-meaning italic text-sm dark:text-slate-300">
				{item.artinya}
			</p>
		</div>
	{/each}
</section>
