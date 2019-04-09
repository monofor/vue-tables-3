<template>
	<div id="app">
		<div class="container m-t-3">
			<div class="col-12">
				<div class="row position-absolute w-100 h-100 d-flex flex-row justify-content-center align-items-center">
					<div class="col-md-10">
						<v-client-table
						 :data="tableData"
						 :columns="columns"
						 :options="options"
						></v-client-table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			columns: ["id", "name", "age"],
			tableData: [
				{ id: 1, name: "John", age: "20" },
				{ id: 2, name: "Jane", age: "24" },
				{ id: 3, name: "Susan", age: "16" },
				{ id: 4, name: "Chris", age: "55" },
				{ id: 5, name: "Dan", age: "40" },
				{ id: 1, name: "John", age: "20" },
				{ id: 2, name: "Jane", age: "24" },
				{ id: 3, name: "Susan", age: "16" },
				{ id: 4, name: "Chris", age: "55" },
				{ id: 5, name: "Dan", age: "40" },
				{ id: 1, name: "John", age: "20" },
				{ id: 2, name: "Jane", age: "24" },
				{ id: 3, name: "Susan", age: "16" },
				{ id: 4, name: "Chris", age: "55" },
				{ id: 5, name: "Dan", age: "40" },
				{ id: 1, name: "John", age: "20" },
				{ id: 2, name: "Jane", age: "24" },
				{ id: 3, name: "Susan", age: "16" },
				{ id: 4, name: "Chris", age: "55" },
				{ id: 5, name: "Dan", age: "40" },
				{ id: 1, name: "John", age: "20" },
				{ id: 2, name: "Jane", age: "24" },
				{ id: 3, name: "Susan", age: "16" },
				{ id: 4, name: "Chris", age: "55" },
				{ id: 5, name: "Dan", age: "40" },
				{ id: 1, name: "John", age: "20" },
				{ id: 2, name: "Jane", age: "24" },
				{ id: 3, name: "Susan", age: "16" }
			],
			options: {
				// see the options API
			}
		};
	}
};
</script>

<style>
</style>