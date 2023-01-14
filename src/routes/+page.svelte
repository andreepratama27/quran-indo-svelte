<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<section class="p-4">
  <div class="relative flex flex-col justify-center w-full px-4 mt-20 mb-8 border-2 border-black bg-violet-600 h-36">
    <p class="pb-4 text-white">Terakhir Dibaca</p>
    <p class="pt-2 text-lg font-bold text-white">Al- Fatihah</p>
    <p class="text-white text-sm font-light">Ayat Nomor 1</p>

    <div class="absolute right-6 image-overlay">
      <div class="w-20 h-20 image-wrapper">
        <img src="/quran.png" alt="quran" class="w-full h-full" />
      </div>
    </div>
  </div>

  {#each data.data as item (item.number)}
    <div class="p-4 mb-4 bg-white border border-black" role="button">
      <a href={`/surah/${item.number}`} class="flex items-center gap-2 font-bold">
        <div class="relative flex items-center justify-center w-14 h-14 number-wrapper">
          <img alt='number' src='/hexagram.png' class='w-full h-full' loading="lazy" />
          <p class="absolute text-sm number">{item.number}</p>
        </div>
        {item.name}
      </a>
    </div>
  {/each}
</section>