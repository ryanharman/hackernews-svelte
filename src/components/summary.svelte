<script lang="ts">
	import type { NewsResponse } from "../routes/+page.server";
	import type { PostResponse } from "../routes/post/[id]/+page.server";

  export let post: NewsResponse | PostResponse;
</script>

  <div class="">
    <h2 class="font-medium">
      <a href={post.url} target="_blank">
        {post.title}
      </a>
      <span class="font-normal text-sm text-zinc-500">
        ({post.domain})
      </span>
    </h2>
    <p class="text-zinc-500 text-sm">
      {post.points} points by {post.user} {post.time_ago} | <a href={`/post/${post.id}`} class="hover:underline">{post.comments_count} comments</a>
    </p>
  </div>