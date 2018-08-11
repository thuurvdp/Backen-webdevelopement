<template>
  <div id="app">
		<HeaderComponent
			v-on:open-login="toggleLogin"
			v-bind:buttonText="headerButtonText"
		/>
		<main>
			<CardListComponent
				id="testBeta"
				v-on:card-click="openDetail"
			/>
		</main>
		<DetailComponent
			v-bind:id="card.id"
			v-if="showPopup"
			v-on:close="toggleDetail"
		/>
		<LoginComponent
			v-if="showLogin"
			v-on:close="toggleLogin"
		/>
		<transition name="fade">
			<NotificationComponent
				v-if="showNotification"
				v-on:card-click="openDetailFromNotification"
				v-bind:item="notificationCard"
			/>
		</transition>
  </div>
</template>

<script>
import io from "socket.io-client";
import { getToken } from "./scripts/storage.js";
import { LoggedInUserLastCommented } from "./scripts/helper.js";

import HeaderComponent from "./components/header.component.vue";
import CardListComponent from "./components/card-list.component";
import DetailComponent from "./components/detail.component";
import LoginComponent from "./components/login.component";
import NotificationComponent from "./components/notification.component";

export default {
  name: "app",
  components: {
    HeaderComponent,
	CardListComponent,
	DetailComponent,
	LoginComponent,
	NotificationComponent,
  },
  data() {
    return {
		showPopup: false,
		showLogin: false,
		showNotification: false,
		card: {},
		notificationCard: {},
		headerButtonText: getToken() ? "Logout" : "Login",
	};
  },
  sockets: {
    connected: function() {
		console.log('socket connected')
	},
	broadcast: function(data) {
		if (!getToken() || LoggedInUserLastCommented(data.data)) {
			return;
		}

		this.showNotification = true;
		this.notificationCard = data.data;
		this.hideNotification();
	}
  },
  methods: {
	toggleDetail: function() {
		this.showPopup = !this.showPopup;
	},
	toggleLogin: function() {
		this.showLogin = !this.showLogin;
		this.headerButtonText = getToken() ? "Logout" : "Login";
	},
	openDetailFromNotification: function(card) {
		this.toggleDetail();
		this.card = card;
		this.showNotification = false;
	},
	openDetail: function(card) {
		this.toggleDetail();
		this.card = card;
	},
	hideNotification: function() {
		setTimeout(() => {
			this.showNotification = false;
		}, 10000)
	}
  },
};
</script>

<style lang="scss">
@import "./assets/style/index.scss";
</style>
