<script>
  import "../app.css";
</script>

<main class="flex flex-col justify-start items-center p-16 bg-zinc-100 min-h-screen text-zinc-800">
  <a href="/" class="pb-6">
    <h1 class="text-xl font-bold">Hacker News</h1>
  </a>
  <div class="max-w-3xl w-full">
    <slot />
  </div>
</main>