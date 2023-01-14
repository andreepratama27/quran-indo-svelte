<script lang="ts">
  export let isPlaying = false;
  export let verse: any;

  function playAudio() {
    isPlaying = true;
    let audio = new Audio(verse?.audio?.alafasy);

    audio.play();
  }
</script>

<div class="option">
  <ul class="flex items-center gap-4">
    <!-- <li>
      <p class="text-violet-600">Share</p>
    </li> -->
    <li>
      <button class="text-violet-600" on:click={playAudio}>
          Play
      </button>
    </li>
    <!-- <li>
      <p class="text-violet-600">Save</p>
    </li> -->
  </ul>
</div>