<script>
    export let style = 'primary'
    export let type = 'button'
    export let disabled = false

    const btnStyle = {
        primary: `inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
    
        delete: `inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`
    }
</script>
  
<button {type} {disabled} class={btnStyle[style]}>
    <slot></slot>
</button>
  
  