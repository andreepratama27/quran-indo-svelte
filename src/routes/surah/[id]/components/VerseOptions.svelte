<script lang="ts">
	import { onDestroy } from "svelte";


  export let verse: any;

  let isPlaying = false;
  let audio = new Audio(verse?.audio?.alafasy);

  function playAudio() {
    audio.play();

    isPlaying = true;
  }

  function stopAudio() {
    audio.pause()
    audio.currentTime = 0;

    isPlaying = false;
  }

  onDestroy(() => {
    audio.pause();
    audio.currentTime = 0;
  })
</script>

<div class="option">
  <ul class="flex items-center gap-4">
    <!-- <li>
      <p class="text-violet-600">Share</p>
    </li> -->
    <li>
      {#if isPlaying}
        <button class="text-violet-600" on:click={stopAudio}>
          Stop
        </button>
      {:else}
        <button class="text-violet-600" on:click={playAudio}>
          Play
        </button>
      {/if}
    </li>
    <!-- <li>
      <p class="text-violet-600">Save</p>
    </li> -->
  </ul>
</div>