<script>
  import Summary from '../components/summary.svelte';

  export let data;
</script>

{#if data.items}
  <div class="flex flex-col space-y-4">
    {#each data.items as item}
      <Summary post={item} />
    {/each}
  </div>
{:else}
  <p class="loading">loading...</p>
{/if}
