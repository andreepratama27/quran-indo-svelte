<script>
  import Navbar from "../components/Navbar/Navbar.svelte";
  import "../app.css";
</script>

<div class="w-full h-full bg-violet-100">
  <Navbar />

  <div class="max-w-xl mx-auto">
    <slot />
  </div>
</div>