<script>
	import Block from './Block.svelte'
	import {change} from './container'
	import {gh} from './cub'
</script>



<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	

	.container{
		display: flex;
		
	}

	

	.red,
	.blue,
	.green{
		width: 100px;
		height: 100px;
		opacity: 0;
	}
	.red{
		background-color: red;
	}

	.blue{
		background-color: blue;
	}

	.green{
		background-color: green;
	}

	.act{
		opacity: 1;
		
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<Block names={gh} />

<main>
	<div on:click={change} class='container'>
		<div class="red act"></div>
		<div class="blue act"></div>
		<div class="green act"></div>
		</div>
</main>