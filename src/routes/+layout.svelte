<script>
  import Navbar from "../components/Navbar/Navbar.svelte";

  import "@fontsource/poppins";
  import "@fontsource/poppins/400.css"; // Weight 500.
  import "@fontsource/poppins/300.css"; // Weight 500.
  import "@fontsource/poppins/400.css"; // Weight 500.
  import "@fontsource/poppins/500.css"; // Weight 500.
  import "@fontsource/poppins/600.css"; // Weight 500.

  import "../app.css";
</script>

<div class="w-full h-full bg-violet-100">
  <Navbar />

  <div class="max-w-xl mx-auto">
    <slot />
  </div>
</div>