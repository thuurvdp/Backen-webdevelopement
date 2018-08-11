<template>
	<section class="o-comments">
		<header>
			<h2>Comments</h2>
		</header>
		<div class="list">
			<CommentComponent
				v-for="comment in items"
				:key="comment.id"
				v-bind:time="comment.time"
				v-bind:author="comment.user.username"
				v-bind:message="comment.message"
			/>

			<NewCommentComponent
				v-if="token"
				v-bind:id="id"
				v-on:refresh="$emit('refresh')"
			/>
		</div>
	</section>
</template>

<script>
import CommentComponent from "./comment.component";
import NewCommentComponent from "./new-comment.component";
import { getToken } from "../scripts/storage.js";

export default {
	name: "CommentListComponent",
	props: {
		id: String,
		items: Array,
	},
	computed: {
		token: () => getToken(),
	},
	components: {
		CommentComponent,
		NewCommentComponent,
	},
};
</script>
