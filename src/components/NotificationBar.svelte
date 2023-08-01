<script>
  import { notificationStore } from './../store.js';
  import { fade } from 'svelte/transition';
  let notification = { message: '', type: '' };
  
  // subscribe to changes in the store
  notificationStore.subscribe(value => {
    notification = value;
  });
  
  function showNotification(message, type = 'success') {
    notificationStore.set({ message, type });
    setTimeout(() => {
      notificationStore.set({ message: '', type: '' });
    }, 3000);
  }
</script>

<div
	class="notification-bar {notification.type} {notification.message ? 'show' : ''}" 
	in:fade={{duration: 300}} 
	out:fade={{duration: 300}}
>
  {notification.message}
</div>

<style>
	.notification-bar {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 5px;
		background-color: #2095C1;
		text-align: center;
		color: #fff;
	}
	.notification-bar.show {
		display: block;
	}
  .success {
    /* add your styles here */
  }
  .show {
    /* add your styles here */
  }
</style>
