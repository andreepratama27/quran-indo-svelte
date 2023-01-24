<script>
  import Navbar from "../ui/Navbar/Navbar.svelte";

  import "@fontsource/poppins";
  import "@fontsource/poppins/400.css"; // Weight 500.
  import "@fontsource/poppins/300.css"; // Weight 500.
  import "@fontsource/poppins/400.css"; // Weight 500.
  import "@fontsource/poppins/500.css"; // Weight 500.
  import "@fontsource/poppins/600.css"; // Weight 500.

  import "../app.css";
</script>

<div class="w-full bg-violet-100">
  <Navbar />

  <div class="max-w-xl mx-auto relative h-screen">
    <slot />

    <div class="pb-10"></div>

    <footer class="max-w-xl w-full fixed bottom-0 mx-auto bg-white border-t-2 border-black">
      <ul class='grid grid-cols-4 gap-4 place-items-center h-14'>
        <li class='w-full h-full items-center justify-center flex'>
          <a href="/">
            <img src="/home.png" alt="home" class='w-6 h-6'>
          </a>
        </li>
        <li class='w-full h-full items-center justify-center flex'>
          <a href="/search">
            <img src="/search.png" alt="search" class='w-6 h-6'>
          </a>
        </li>
        <li class='w-full h-full items-center justify-center flex'>
          <a href="/favorites">
            <img src="/favorite.png" alt="favorite" class='w-6 h-6'>
          </a>
        </li>
        <li class='w-full h-full items-center justify-center flex'>
          <a href="/settings">
            <img src="/settings.png" alt="settings" class='w-6 h-6'>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</div>