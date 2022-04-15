<script>  
    import {CounterStore} from '../stores'
    import {fade, scale} from 'svelte/transition'
    import CounterItem from './CounterItem.svelte'

    const addCounter = () => {
        let last_id = 0
        if ($CounterStore.length != 0) {
            last_id = $CounterStore.at(-1).id
        }
        const newCounter = {
            id: last_id+1,
            title: 'new',
            count: 0
        }
        console.log(newCounter)
        CounterStore.update((currentCounter) => {
            return [...currentCounter, newCounter]
          } )
    }
</script>

{#each $CounterStore as c (c.id)}
<div in:scale out:fade="{{duration: 500}}">
    <CounterItem item={c}/>
</div>
{/each}
<button on:click={()=>addCounter()}>new counter</button>