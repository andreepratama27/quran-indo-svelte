<script lang="ts">
	import SurahHeader from "@/ui/SurahHeader/SurahHeader.svelte";
	import VerseOptions from "./components/VerseOptions.svelte";

  import type { PageData } from "./$types";
	import Verse from "./components/Verse.svelte";

  export let data: PageData;
</script>

<section id="surah" class="h-full p-4">
  <div class="mt-20"></div>

  <SurahHeader data={data} />

  {#each data?.data?.ayahs as verse (verse?.number?.inQuran)}
    <Verse verse={verse} />
  {/each}
  
</section>