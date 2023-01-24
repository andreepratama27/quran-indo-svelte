<script lang='ts'>
	import SurahList from '@/ui/SurahList/SurahList.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<section class="p-4 bg-violet-100">
  <div class="mt-20"></div>

  <div id="menu" class='h-full'>
    <div class="title-wrapper pb-6">
      <h1 class='font-bold'>Kumpulan Surah</h1>

      <div class="w-28 h-1 my-2 bg-black"></div>
    </div>
  </div>

  {#each data.data as item (item.number)}
    <SurahList data={item} />
  {/each}
</section>