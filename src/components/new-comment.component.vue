<template>
	<article class="m-card-add-comment">
		<form v-on:submit.prevent="sendMessage">
			<label for="message">New comment</label>
			<textarea id="message" ref="message">

			</textarea>
			<button class="a-default-button">
				Send
			</button>
		</form>
	</article>
</template>

<script>
import { postComment } from "../scripts/apiCall.js";

export default {
	name: "NewCommentComponent",
	props: {
		id: String,
	},
	methods: {
		sendMessage: function() {
			postComment({ postId: this.id, message: this.$refs.message.value })
				.then((response) => {
					this.clearMessage();
					this.$emit("refresh");
				})
				.catch(err => console.log(err));
		},
		clearMessage: function() {
			this.$refs.message.value = "";
		}
	}
};
</script>
