<script>
  import { notificationStore } from './../store.js';
  import { fade } from 'svelte/transition';
  let notification = { message: '', type: '' };
  
  notificationStore.subscribe(value => {
    notification = value;
  });
</script>

{#if notification.message}
  <div
    class="notification-bar {notification.type}" 
    in:fade={{duration: 200}} 
    out:fade={{duration: 200}}
  >
    {notification.message}
  </div>
{/if}

<style>
  .notification-bar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
    padding: 5px;
    background-color: #2095C1;
    text-align: center;
    color: #fff;
  }
</style>
