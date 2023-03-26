<script lang="ts">
	import url from './store';
</script>

<nav
	class="fixed z-10 flex items-center justify-center w-full bg-white dark:bg-slate-800 border-b-2 border-black dark:border-slate-700 h-14"
>
	<!-- {#if $url.pathname === '/'} -->
	<div class="w-full max-w-xl mx-auto px-4 text-center">
		<a href="/" class="text-lg font-bold dark:text-slate-300">Qur'an Indo</a>
	</div>
	<!-- {:else}
    <div class="w-full max-w-xl mx-auto px-4">
      <a href='/' class="text-lg font-bold">
        <img src="/arrow-left.png" alt="arrow-left" class="w-8 h-8">
      </a>
    </div>
  {/if} -->
</nav>
