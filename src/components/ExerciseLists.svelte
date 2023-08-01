<script>

</script>

<div class="exercise-lists">
	<h2>Today's Exercise Plan</h2>
	<div class="loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>loading</title><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" /></svg></div>
	<ul id="today-exercise-plan-list"></ul>

	<h2>Available Exercises for Today</h2>
	<div class="loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>loading</title><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" /></svg></div>
	<ul id="available-exercises"></ul>

	<h2>Recent Exercises for Rest and Recovery</h2>
	<div class="loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>loading</title><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" /></svg></div>
	<ul id="exercise-list"></ul>
	<h2>Paused</h2>
	<ul id="paused-exercise-list"></ul>

	<template id="exercise-template">
		<li>
			<input class="name" type="text" readonly /> 
			<input class="tags" type="text" value="Add tags" readonly />
			<input class="timestamp" type="text" readonly />
			<button class="up"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>arrow-up</title><path d="M10 5H12V6H13V7H14V8H15V9H16V11H14V10H13V9H12V18H10V9H9V10H8V11H6V9H7V8H8V7H9V6H10" /></svg></button>
			<button class="done"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg></button>
			<button class="pause"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pause</title><path d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg></button>
			<button class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg></button>
		</li>
	</template>
</div>

<style>

</style>
