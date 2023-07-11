<script lang="ts">
  import Summary from '../components/summary.svelte';
    import { invalidate } from '$app/navigation';

  export let data;

  function updateUrl(nextOrPrev?: boolean) {
    const pageNumber = new URLSearchParams(window.location.search).get('page') || "1";
    const nextPage = nextOrPrev ? parseInt(pageNumber) + 1 : parseInt(pageNumber) - 1;
    if (nextPage < 1) return;
    window.location.search = `?page=${nextPage}`;
  }

  function nextPage() {
    updateUrl(true)
    invalidate('/');
  }

  function prevPage() {
    updateUrl(false);
    invalidate('/');
  }
</script>

{#if data.items}
  <div class="flex flex-col space-y-4">
    {#each data.items as item}
      <Summary post={item} />
    {/each}
  </div>
  <div class="flex justify-between mt-4">
    <button class="btn btn-primary" on:click={prevPage}>Prev page</button>
    <button class="btn btn-primary" on:click={nextPage}>Next page</button>
  </div>
{:else}
  <p class="loading">loading...</p>
{/if}

