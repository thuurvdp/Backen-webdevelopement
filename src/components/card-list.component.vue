<template>
	<section class="t-section t-list--md">
		<CardComponent
			v-for="card in cards"
			:key="card.id"
			v-bind:id="card.id"
			v-bind:name="card.NAAM"
			v-bind:street="card.STRAAT"
			v-bind:number="card.NUMMER"
			v-bind:postalCode="card.POSTCODE"
			v-bind:city="card.GEMEENTE"
			v-on:click.native="$emit('card-click', card)"
		/>
	</section>
</template>

<script>
import CardComponent from "./card.component.vue";
import { fetchAll } from "../scripts/apiCall.js";

export default {
  name: "CardListComponent",
  components: {
    CardComponent
  },
  data() {
    return { cards: [] };
  },
  mounted() {
	fetchAll().then(response => {
		this.cards = response.data.data;
	});
  }
};
</script>
