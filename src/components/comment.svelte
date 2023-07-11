<script lang="ts">
	import type { Comment } from "../routes/post/[id]/+page";

  export let comment: Comment;

  $: isCommentOpen = true;

  function toggleOpen() {
    isCommentOpen = !isCommentOpen;
  }
</script>

<div>
  <h3 class="font-medium text-sm">{comment.user} {comment.time_ago} <button class="ml-1" on:click={toggleOpen}>[-]</button></h3>
  {#if isCommentOpen}
    <div class="font-light text-md" contenteditable="inherit" bind:innerHTML={comment.content} />
      <div class="ml-6 space-y-4 mt-4">
        {#if comment.comments && comment.comments.length > 0}
          {#each comment.comments as nestedComment}
            <svelte:self comment={nestedComment} />
          {/each}
        {/if}
      </div>
    {:else} 
    <button class="hover:underline font-light text-sm text-slate-600" on:click={toggleOpen}>Read comment</button>
  {/if}
</div>