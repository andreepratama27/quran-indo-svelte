<script lang="ts">
	export let data: any;
	import favoriteStore from '$lib/stores/favoriteStore';

	function addToFavorite() {
		let currentFavorite = [...$favoriteStore, { ...data, source: 'surah' }];
		favoriteStore.set(currentFavorite);
	}
</script>

<div
	class="p-4 mb-6 flex justify-between items-center shadow-skew bg-white border border-black dark:bg-slate-700 dark:border-slate-700"
	role="button"
>
	<a href={`/surah/${data.number}`} class="flex items-center gap-2 font-bold">
		<div class="relative flex items-center justify-center w-14 h-14 number-wrapper">
			<img alt="number" src="/hexagram.png" class="w-full h-full" loading="lazy" />
			<p class="absolute text-sm number dark:text-slate-300">{data.number}</p>
		</div>

		<div class="surah-wrap">
			<p class="dark:text-slate-300">{data.name}</p>

			<div class="surah-type flex items-center gap-2">
				<p class="text-sm font-normal text-gray-500 dark:text-slate-400">{data.revelation}</p>
				<div class="w-1 h-1 bg-black rounded-full bullet" />
				<p class="text-sm font-normal text-gray-500 dark:text-slate-400">
					{data.numberOfAyahs} Ayat
				</p>
			</div>
		</div>
	</a>

	<!-- <button class='hover:cursor-pointer' on:click={addToFavorite}>
    <img src="/bookmark.png" alt="bookmark" class='w-6 h-6'>
  </button> -->
</div>
