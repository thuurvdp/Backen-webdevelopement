<template>
	<section class="o-pop-up--overlay">
		<article class="o-pop-up o-pop-up--card-detail">
			<header>
				<h1>{{ card.NAAM }}</h1>
				<div class="t-list-horizontal">
					<p
						v-if="card.LABEL"
						class="a-tag text-sm"
					>
						{{ card.LABEL }}
					</p>
					<p
						v-if="card.CATEGORIE"
						class="a-tag text-sm"
					>
						{{ card.CATEGORIE }}
					</p>
				</div>
				<button
					class="a-close-button"
					v-on:click="$emit('close')"
				/>
			</header>
			<div class="o-pop-up--card-body">
				<p>{{ card.opmerkingen}}</p>
				<dl class="m-list--detail">
					<dt v-if="card.telefoon">Tel:</dt>
					<dd v-if="card.telefoon">{{ card.telefoon }}</dd>
					<dt v-if="card.WEBADRES">Web:</dt>
					<dd v-if="card.WEBADRES">{{ card.WEBADRES }}</dd>
					<dt>Adres:</dt>
					<dd>
						<p>{{ card.STRAAT }} {{ card.NUMMER }}</p>
						<p>{{ card.POSTCODE }} {{ card.GEMEENTE }}</p>
					</dd>
				</dl>
			</div>
			<CommentListComponent
				v-bind:id="card.id"
				v-bind:items="card.comment"
				v-on:refresh="fetchDetail"
			/>
		</article>
	</section>
</template>

<script>
	import CommentListComponent from "./comment-list.component.vue";
	import { fetchById } from "../scripts/apiCall.js";
	export default {
		name: 'DetailComponent',
		props: {
			id: String,
		},
		data() {
			return { card: {} };
		},
		components: {
			CommentListComponent,
		},
		mounted() {
			this.fetchDetail();
		},
		methods: {
			fetchDetail: function() {
				fetchById({ id: this.id }).then(response => this.card = response.data.data);
			}
		}
	};
</script>
