<script lang="ts">
  import TodayVerse from '@/ui/TodayVerse/TodayVerse.svelte';
</script>

<section class="p-4">
  <div class="mt-20"></div>

  <TodayVerse />

  <div id="menu" class='h-full'>
    <div class="title-wrapper pb-4">
      <h1 class='font-bold'>Menu</h1>

      <div class="w-28 h-1 my-2 bg-black"></div>
    </div>

    <div class="menu-content mb-4">
      <div class="w-full border border-black bg-white p-4 mb-6 shadow-skew" role='button'>
        <a href="/surah" sveltekit:prefetch>
          <p class="title">Kumpulan Surah</p>
        </a>
      </div>
      <div class="w-full border border-black bg-white p-4 shadow-skew" role='button'>
        <a href="/doa" sveltekit:prefetch>
          <p class="title">Doa - Doa Harian</p>
        </a>
      </div>
    </div>
  </div>
</section>