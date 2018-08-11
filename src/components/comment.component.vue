<template>
	<article class="m-card-comment">
		<header>
			<p class="bold">{{ author }}</p>
			<p class="text-sm">{{ dateString(time) }}</p>
		</header>
		<p class="body">{{ message }}</p>
	</article>
</template>

<script>
import moment from "moment";

export default {
  name: "CommentComponent",
  props: {
	  author: String,
	  time: String,
	  message: String,
  },
  methods: {
	  dateString: (time) => moment(time).format('DD/MM/YYYY'),
  }
};
</script>
