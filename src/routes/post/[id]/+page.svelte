<script lang='ts'>
	import Comment from '../../../components/comment.svelte';
  import Summary from '../../../components/summary.svelte';

  export let data;
</script>

<Summary post={data.item} />

<div class="w-full border-b my-6 border-slate-400" />

{#if data.item.comments && data.item.comments.length > 0}
  {#each data.item.comments as comment}
    <div class="mb-6">
      <Comment {comment} />
    </div>
  {/each}
{/if}
