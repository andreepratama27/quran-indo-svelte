<script lang="ts">
	import { todayVerse } from '$lib/stores/todayVerse';
</script>

<div
	class="relative flex flex-col items-center justify-center min-h-56 mb-8 overflow-hidden text-center bg-violet-600 dark:bg-slate-700 shadow-skew py-4 px-2"
	id="surah-intro"
>
	<div class="surah-title relative -top-1">
		<p class="text-xl text-white pb font-bold">Ayat Hari Ini</p>

		<div class="w-10 mx-auto h-1 my-4 bg-white" />

		<p class="text-white text-2xl">
			{#if $todayVerse}
				{$todayVerse?.arab}
			{:else}
				---
			{/if}
		</p>

		<div id="verse-translation" class="px-4 pb-4 pt-5">
			<p class="italic text-white text-sm">
				{#if $todayVerse}
					{$todayVerse.translation}
				{:else}
					---
				{/if}
			</p>
		</div>

		<!-- <div class="source flex self-end justify-end right-4 -bottom-4 absolute gap-2 items-center">
      <p class='text-white text-sm'>{data?.number.inSurah}</p>
      <div class="w-1 h-1 rounded-full bg-white"></div>
      <p class='text-white text-sm'>Ayat 7</p>
    </div> -->
	</div>

	<div class="absolute opacity-25 bottom-2 w-36 h-36 image-overlay right-4">
		<img src="/quran.png" alt="quran" class="w-full h-full" />
	</div>
</div>
