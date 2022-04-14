<script>
  import {CounterStore} from '../stores'

  export let sum
  export let titles

  
	$: sum = $CounterStore.reduce((a, {count})=> a + count, 0)
  $: titles = $CounterStore.map(item => " " + item.title)
</script>

<div>
    <h4>title list: {titles}</h4>
    <h4>sum of count: {sum}</h4>
</div>