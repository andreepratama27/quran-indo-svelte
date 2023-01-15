<script lang='ts'>
	import { API_ENDPOINT } from "$lib/api";
	import { onMount } from "svelte";

  interface Surah {
    arab: string;
    audio: Record<string, string>;
    image: {
      primary: string;
      secondari: string;
    };
    meta: {
      juz: number;
      hizbQuarter: number;
      manzil: number;
      page: number;
      ruku: number;
      sajda: {
        obligatory: boolean;
        recommended: boolean;
      }
    };
    number: {
      inQuran: number;
      inSurah: number;
    };
    tafsir: Record<string, any>;
    translation: string;
  }

  let data: Surah | null = null;
  let loading: boolean = true;

  onMount(() => {
    fetch(`${API_ENDPOINT}/random`)
      .then(response => response.json())
      .then(result => {
        data = result;
      })
      .catch(err => console.error(err))
      .finally(() => loading = false)
  })
</script>

<div class="relative flex flex-col items-center justify-center h-56 mb-10 overflow-hidden text-center bg-violet-600 shadow-skew" id="surah-intro">
  <div class="surah-title relative -top-1">
    <p class="text-xl text-white pb font-bold">Ayat Hari Ini</p>

    <div class="w-10 mx-auto h-1 my-4 bg-white"></div>

    <p class="text-white text-2xl">
      {loading ? '---' : data?.arab}
    </p>
    
    <div id="verse-translation" class="px-4 pb-4 pt-5">
      <p class="italic text-white text-sm">
        {loading ? '---' : data?.translation}
      </p>
    </div>

    <!-- <div class="source flex self-end justify-end right-4 -bottom-4 absolute gap-2 items-center">
      <p class='text-white text-sm'>{data?.number.inSurah}</p>
      <div class="w-1 h-1 rounded-full bg-white"></div>
      <p class='text-white text-sm'>Ayat 7</p>
    </div> -->
</div>

  <div class="absolute opacity-25 bottom-2 w-36 h-36 image-overlay right-4">
    <img src="/quran.png" alt="quran" class="w-full h-full">
  </div>
</div>