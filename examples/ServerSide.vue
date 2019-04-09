<template>
	<div class="row w-100 h-100 d-flex flex-row justify-content-center align-items-center">
		<div class="col-md-10">
			<h3>Server Side</h3>
			<v-server-table
			 url="http://jsonplaceholder.typicode.com/db"
			 :columns="columns"
			 :options="options"
			></v-server-table>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			columns: ["id", "title"],
			options: {
				requestFunction: function(data) {
					return axios
						.get(this.url, {
							params: data
						})
						.catch(
							function(e) {
								this.dispatch("error", e);
							}.bind(this)
						);
				},
				responseAdapter: response => {
					if (response === undefined) {
						return {
							data: [],
							count: 0
						};
					}

					return {
						data: response.data.posts,
						count: response.data.posts.length
					};
				}
			}
		};
	}
};
</script>

<style>
</style>
