<script lang="ts">
	import SurahHeader from "../../../components/SurahHeader/SurahHeader.svelte";
	import VerseOptions from "./components/VerseOptions/VerseOptions.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<section id="surah" class="h-full p-4">
  <div class="mt-20"></div>

  <SurahHeader data={data} />

  {#each data?.data?.ayahs as verse (verse?.number?.inQuran)}
    <section class="w-full mb-8 surah-detail">
      <div class="flex justify-between w-full p-2 px-4 bg-violet-200" id="surah-number">
        <div class="flex items-center justify-center w-6 h-6 text-white rounded-full number-tag bg-violet-500">{verse?.number?.inSurah}</div>

        <VerseOptions verse={verse} />
      </div>

      <div id="surah-verse" class="py-8">
        <p class="text-2xl text-right">
          {verse?.arab}
        </p>
      </div>

      <div class="surah-meaning">
        <p class="text-justify">
          {verse?.translation}
        </p>
      </div>
    </section> 
  {/each}
  
</section>