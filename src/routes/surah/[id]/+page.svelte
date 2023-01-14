<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<section id="surah" class="h-full p-4">
  <div class="mt-20"></div>

  <div class="relative flex flex-col items-center justify-center h-56 mb-10 overflow-hidden text-center bg-violet-600" id="surah-intro">
    <div class="surah-title">
      <p class="text-xl text-white pb">{data?.data?.name}</p>
      <p class="italic text-white text-md">"{data?.data?.translation}"</p>

      <div class="w-full h-1 mt-4 bg-white"></div>

      <div class="flex items-center justify-center gap-2 pt-2">
        <p class='text-white'>{data?.data?.revelation}</p>
        <div class="w-1 h-1 bg-white rounded-full bullet"></div>
        <p class='text-white'>{data?.data?.numberOfAyahs} Ayat</p>
      </div>

      <p class="relative text-3xl text-white bismillah top-6">
        {data?.data?.bismillah?.arab}
      </p>
    </div>

    <div class="absolute opacity-25 bottom-2 w-36 h-36 image-overlay right-4">
      <img src="/quran.png" alt="quran" class="w-full h-full">
    </div>
  </div>

  {#each data?.data?.ayahs as verse}
    <section class="w-full mb-8 surah-detail">
      <div class="flex justify-between w-full p-2 px-4 bg-violet-200" id="surah-number">
        <div class="flex items-center justify-center w-6 h-6 text-white rounded-full number-tag bg-violet-500">1</div>
        <div class="option">
          <ul class="flex items-center gap-4">
            <li>
              <p class="text-violet-600">Share</p>
            </li>
            <li>
              <p class="text-violet-600">Play</p>
            </li>
            <li>
              <p class="text-violet-600">Save</p>
            </li>
          </ul>
        </div>
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