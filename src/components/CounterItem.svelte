<script>
    import {CounterStore} from '../stores'

    export let item

    const handleDelete = (itemId) => {
        CounterStore.update((currentCounter) => {
            return currentCounter.filter(item => item.id != itemId)
        })
    }

    const changeTitle = (e, itemId) => {
        CounterStore.update((currentCounter)=> {
            let to_update = currentCounter.filter(item => item.id == itemId)[0]
            to_update['title'] = e.target.value
            return currentCounter
        })
    }

    const increment = (itemId) => {
        CounterStore.update((currentCounter)=> {
            let to_update = currentCounter.filter(item => item.id == itemId)[0]
            to_update['count'] +=1
            return currentCounter
        })
    }

    const decrement = (itemId) => {
        CounterStore.update((currentCounter)=> {
            let to_update = currentCounter.filter(item => item.id == itemId)[0]
            if (to_update['count'] > 0) {
                to_update['count'] -= 1
            }
            return currentCounter
        })
    }

    const reset = (itemId) => {
        CounterStore.update((currentCounter)=> {
            let to_update = currentCounter.filter(item => item.id == itemId)[0]
            to_update['count'] = 0
            return currentCounter
        })
    }

</script>

<div class="counter">
    <input type="text" on:input={(e) => changeTitle(e, item.id)} bind:value = {item.title}>
    {item.count}
    <button class="btn rounded-l" on:click={() => increment(item.id)}>+</button>
    <button class="btn" on:click={() => decrement(item.id)}>-</button>
    <button class="btn rounded-r" on:click={() => reset(item.id)}>0</button>
    <button on:click={()=> handleDelete(item.id)}>X</button>
</div>

<style>
    .counter {
        background-color: rgb(170, 170, 170);
        width: 50%;
        margin: auto;
        margin-bottom: 5px;
    }
    .btn {
        color: black;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        font-size: 1.125rem;
    }

    .rounded-l {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    .rounded-r {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
</style>