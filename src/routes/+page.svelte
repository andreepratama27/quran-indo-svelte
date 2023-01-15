<script lang="ts">
	import TodayVerse from '../components/TodayVerse/TodayVerse.svelte';
  import Jumbotron from '../components/Jumbotron/Jumbotron.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<section class="p-4">
  <div class="mt-20"></div>

  <TodayVerse />
  <!-- <Jumbotron /> -->

  {#each data.data as item (item.number)}
    <div class="p-4 mb-4 bg-white border border-black" role="button">
      <a href={`/surah/${item.number}`} class="flex items-center gap-2 font-bold">
        <div class="relative flex items-center justify-center w-14 h-14 number-wrapper">
          <img alt='number' src='/hexagram.png' class='w-full h-full' loading="lazy" />
          <p class="absolute text-sm number">{item.number}</p>
        </div>

        <div class="surah-wrap">
          <p>{item.name}</p>

          <div class="surah-type flex items-center gap-2">
            <p class="text-sm font-normal text-gray-500">{item.revelation}</p>
            <div class="w-1 h-1 bg-black rounded-full bullet"></div>
            <p class="text-sm font-normal text-gray-500">{item.numberOfAyahs} Ayat</p>
          </div>
        </div>
      </a>
    </div>
  {/each}
</section>