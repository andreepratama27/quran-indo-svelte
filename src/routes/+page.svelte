<script lang="ts">
	import TodayVerse from '@/ui/TodayVerse/TodayVerse.svelte';
</script>

<section class="p-4">
	<div class="mt-20" />

	<TodayVerse />

	<div id="menu" class="h-full">
		<div class="title-wrapper pb-4">
			<h1 class="font-bold dark:text-slate-300">Menu</h1>

			<div class="w-28 h-1 my-2 bg-black dark:bg-slate-700" />
		</div>

		<div class="menu-content mb-4">
			<div
				class="w-full border border-black bg-white dark:bg-slate-700 p-4 mb-6 shadow-skew"
				role="button"
			>
				<a href="/surah" sveltekit:prefetch>
					<p class="title dark:text-slate-300">Kumpulan Surah</p>
				</a>
			</div>
			<div
				class="w-full border border-black bg-white dark:bg-slate-700 p-4 shadow-skew"
				role="button"
			>
				<a href="/doa" sveltekit:prefetch>
					<p class="title dark:text-slate-300">Doa - Doa Harian</p>
				</a>
			</div>
		</div>
	</div>
</section>
