<script>
  import '../app.css';
</script>

<main
  class="flex flex-col justify-start items-center p-16 bg-zinc-100 min-h-screen text-zinc-800"
>
  <div class="flex gap-4 items-center pb-6">
    <a href="/">
      <h1 class="text-xl font-bold">Hacker News</h1>
    </a>

    <a href="https://ryanharman.dev" class="pt-1 text-zinc-500">
      <h2 class="text-sm">by Ryan Harman</h2>
    </a>
  </div>

  <div class="max-w-3xl w-full">
    <slot />
  </div>
</main>
