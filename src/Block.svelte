<script>
export let names
    
</script>

<style>
    div{
        height: 100px;
        width: 100px;
        background-color: black;
    }
</style>

<main>
    <form on:submit={names}>
        <input type="text">
        <input type="text">
        <button type='submit'>Клик</button>
    </form>
    <div></div>
</main>