<script lang="ts">
	import type { NewsResponse } from "../routes/+page";
	import type { PostResponse } from "../routes/post/[id]/+page";

  export let post: NewsResponse | PostResponse;

  $: showCommentLink = !post.isPost;
</script>

  <div class="mb-8">
    <h2 class="font-medium">
      <a href={post.url} target="_blank">
        {post.title}
      </a>
      <span class="font-normal text-sm text-zinc-500">
        ({post.domain})
      </span>
    </h2>
    <p class="text-zinc-500 text-sm">
      {post.points} points by {post.user} {post.time_ago} 
      {#if showCommentLink}
        | <a href={`/post/${post.id}`} class="hover:underline">{post.comments_count} comments</a>
      {/if}
    </p>

    {#if "content" in post}
      <div class="font-light text-md mt-2" contenteditable="inherit" bind:innerHTML={post.content} />
    {/if}
  </div>