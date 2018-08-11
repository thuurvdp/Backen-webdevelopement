<template>
	<article class="m-card--address">
		<h3>{{ name }}</h3>
		<div class="m-card-address-info">
			<p>{{ street }} {{ number }}</p>
			<p>{{ postalCode }} {{ city }}</p>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'CardComponent',
		props: {
			id: String,
			name: String,
			street: String,
			number: String,
			postalCode: String,
			city: String,
		}
	};
</script>
