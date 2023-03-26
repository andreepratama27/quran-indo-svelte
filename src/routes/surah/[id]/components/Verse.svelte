<script lang="ts">
	import VerseOptions from './VerseOptions.svelte';

	export let verse: any;
</script>

<section class="w-full mb-8 surah-detail">
	<div
		class="flex justify-between w-full p-2 px-4 bg-violet-200 dark:bg-slate-200"
		id="surah-number"
	>
		<div
			class="flex items-center justify-center w-6 h-6 text-white rounded-full number-tag bg-violet-500 dark:bg-slate-500"
		>
			{verse?.number?.inSurah}
		</div>

		<VerseOptions {verse} />
	</div>

	<div id="surah-verse" class="py-8">
		<p class="text-2xl text-right dark:text-slate-300">
			{verse?.arab}
		</p>
	</div>

	<div class="surah-meaning">
		<p class="text-justify dark:text-slate-300">
			{verse?.translation}
		</p>
	</div>
</section>
