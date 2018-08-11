<template>
	<section class="m-notification">
		<p class="bold">Nieuwe comment geplaats bij</p>
		<article class="notification-content">
			<p>{{ item.NAAM }} <span class="text-sm"> by {{ lastComment.user.username }}</span></p>
		</article>
	</section>
</template>

<script>
	import { getLastComment } from "../scripts/helper.js";

	export default {
		name: 'NotificationComponent',
		props: {
			item: Object
		},
		mounted() {
			document.querySelector(".m-notification").addEventListener("click",() => this.$emit("card-click", this.item));
		},
		computed: {
			lastComment: function() {
				return getLastComment(this.item);
			},
		}
	};
</script>
