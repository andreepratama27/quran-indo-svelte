<script lang='ts'>
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<section class="p-4 bg-violet-100">
  <div class="mt-20"></div>

  <div id="menu" class='h-full'>
    <div class="title-wrapper pb-6">
      <h1 class='font-bold'>Doa - Doa Harian</h1>

      <div class="w-28 h-1 my-2 bg-black"></div>
    </div>
  </div>

  {#each data.data as item (item.id)}
    <div class="p-4 mb-6 flex flex-col shadow-skew bg-white border border-black" role="button">
      <p class="title text-lg font-bold">
        {item.doa}
      </p>

      <div class="w-20 mt-1 mb-2 h-1 bg-black"></div>

      <p class="content text-2xl py-4">
        {item.ayat}
      </p>

      <p class="verse-meaning italic text-sm">
        {item.artinya}
      </p>
    </div>
  {/each}
</section>