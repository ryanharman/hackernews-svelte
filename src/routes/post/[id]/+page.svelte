<script lang='ts'>
	import Comment from '../../../components/comment.svelte';
  import Summary from '../../../components/summary.svelte';

  export let data;
</script>

<Summary post={data.item} />
{#if data.item.comments && data.item.comments.length > 0}
  {#each data.item.comments as comment}
    <div class="mb-6">
      <Comment {comment} >
        <div class="ml-6 space-y-4 mt-4">
          {#if comment.comments && comment.comments.length > 0}
            {#each comment.comments as nestedComment}
            <Comment comment={nestedComment} />
            {/each}
          {/if}
        </div>
      </Comment>    
    </div>
  {/each}
{/if}
