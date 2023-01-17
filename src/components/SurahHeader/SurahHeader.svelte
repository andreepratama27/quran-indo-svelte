<script lang="ts">
	import { onDestroy } from "svelte";


  export let data: any;
  let isPlaying: boolean = false;
  let audio = new Audio(data?.data?.audio)

  function playAudio() {
    audio.play();
    isPlaying = true;
  }

  function pauseAudio() {
    audio.pause();
    // to stop the audio
    // audio.currentTime = 0;

    isPlaying = false;
  }

  onDestroy(() => {
    audio.pause();
    audio.currentTime = 0;
  })
</script>

<div class="relative flex flex-col items-center justify-center h-56 mb-10 overflow-hidden text-center bg-violet-600 shadow-skew" id="surah-intro">
  {#if isPlaying}
    <button class="absolute flex items-center justify-center w-8 h-8 border-2 border-black rounded-full shadow-lg right-2 top-2 bg-violet-200" id="play-surah" on:click={pauseAudio}>
      <img src="/pause.png" alt="stop-button" class="w-4 h-4">
    </button>
  {:else}
    <button class="absolute flex items-center justify-center w-8 h-8 border-2 border-black rounded-full shadow-lg right-2 top-2 bg-violet-200" id="play-surah" on:click={playAudio}>
      <img src="/play.png" alt="play-button" class="w-4 h-4">
    </button>
  {/if}
  

  <div class="relative surah-title -top-4">
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