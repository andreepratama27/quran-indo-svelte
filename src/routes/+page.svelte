<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<section class="p-4">
  <div class="relative flex flex-col justify-center w-full px-4 mt-20 mb-8 border-2 border-black bg-violet-400 h-36">
    <p class="pb-4 text-white">Terakhir Dibaca</p>
    <p class="pt-2 text-lg font-bold text-white">Al- Fatihah</p>
    <p class="text-white">Ayat Nomor 1</p>

    <div class="absolute right-6 image-overlay">
      <div class="w-20 h-20 image-wrapper">
        <img src="/quran.png" alt="quran" class="w-full h-full" />
      </div>
    </div>
  </div>

  {#each data.data as item (item.number)}
    <div class="p-4 mb-4 bg-white border border-black" role="button">
      <a href={`/surah/${item.number}`} class="font-bold">
        {item.name}
      </a>
    </div>
  {/each}
</section>