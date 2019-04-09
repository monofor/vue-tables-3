<template>
	<div id="app">
		<div class="container m-t-3">
			<div class="col-12">
				<div class="row w-100 h-100 d-flex flex-row justify-content-center align-items-center">
					<h1>Vue-Table-3 Examples</h1>
				</div>
				<client-side-component />
				<server-side-component />
			</div>
		</div>
	</div>
</template>

<script>
import ClientSideComponent from "./ClientSide.vue";
import ServerSideComponent from "./ServerSide.vue";

export default {
	components: { ClientSideComponent, ServerSideComponent }
};
</script>

<style>
</style>