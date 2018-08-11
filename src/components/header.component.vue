<template>
	<header class="o-navigation">
		<button
			v-on:click="onLoginButtonClick"
			class="a-default-button"
		>
			{{ buttonText }}
		</button>
	</header>
</template>

<script>
	import { logOut } from "../scripts/apiCall.js";
	import { getToken } from "../scripts/storage.js";

	export default {
		name: 'HeaderComponent',
		props: {
			buttonText: String,
		},
		methods: {
			onLoginButtonClick() {
				if (getToken()) {
					logOut();
					return;
				}

				this.$emit("open-login");
			}
		},
	};
</script>
