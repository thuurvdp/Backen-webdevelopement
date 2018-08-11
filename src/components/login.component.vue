<template>
	<section class="o-pop-up--overlay">
		<article class="o-pop-up o-pop-up--card-login">
			<h1>Login</h1>
			<button
				class="a-close-button"
				v-on:click="$emit('close')"
			/>
			<form v-on:submit.prevent="sendMessage">
				<div class="a-text-field">
					<label for="Username">Gebruikersnaam</label>
					<input id="Username" name="username" ref="username" autocomplete/>
				</div>
				<div class="a-text-field">
					<label for="Password">Wachtwoord</label>
					<input id="Password" type="password" name="password" ref="password" autocomplete/>
				</div>
				<button class="a-default-button a-large-button">
					Login
				</button>
			</form>
		</article>
	</section>
</template>

<script>
	import { login } from "../scripts/apiCall.js";
	import { saveUser } from "../scripts/storage.js";

	export default {
		name: 'LoginComponent',
		props: {
			item: Object,
		},
		methods: {
			mounted() {
				document.querySelector(".o-pop-up--overlay").addEventListener("click",() => this.$emit("close"));
			},
			sendMessage: function() {
				login({
					username: this.$refs.username.value,
					password: this.$refs.password.value,
				})
				.then((response) => {
					if (!response.data.success) {
						return;
					}

					saveUser({ token: response.data.token, user: response.data.user });

					this.clearMessage();
					this.$emit("close");
				})
				.catch(err => console.log(err));
			},
			clearMessage: function() {
				this.$refs.username.value = "";
				this.$refs.password.value = "";
			},
			beforeDestroy() {
				document.querySelector(".o-pop-up--overlay").addEventListener("click");
			}
		}
	};
</script>
