<script >
  export let data;
</script>


<h1 class="text-xl font-bold">Hacker News</h1>

{#if data.items}
<div class="flex flex-col space-y-4">
  {#each data.items as item, i}
  <div class="">
    <h2 class="font-medium">
      <a href={item.url} target="_blank">
        {item.title}
      </a>
    </h2>
    <p class="text-zinc-500">
      {item.points} points by {item.user} {item.time_ago} | <a href={`/post/${item.id}`} class="hover:underline">{item.comments_count} comments</a>
    </p>
  </div>
	{/each}
</div>
{:else}
	<p class="loading">loading...</p>
{/if}

