import { writable } from 'svelte/store';

const initialState = { message: '', type: '' };

export const notificationStore = writable(initialState);

export function showNotification(message, type = 'success') {
  notificationStore.set({ message, type });
  setTimeout(() => {
    notificationStore.set(initialState);
  }, 3000);
}