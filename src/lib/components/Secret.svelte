<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { SecretType } from '$lib/types';
    import { clipboard } from '@skeletonlabs/skeleton';
    import { Toast, getToastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';

    const toastStore = getToastStore();

    const dispatch = createEventDispatcher();

    export let data: SecretType;

    const t: ToastSettings = {
        message: 'Copied secret to clipboard!',
        timeout: 1000
    }
</script>

<section class="card card-hover m-4 p-4">
    <div class="flex flex-row justify-center">
        <div class="flex flex-col w-full">
            <h5 class="h5">{data.description}</h5>
            <button class="btn variant-filled-primary w-fit mt-4" use:clipboard={data.secret} on:click={() => toastStore.trigger(t)}>
                <span>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 8v3c0 .6-.4 1-1 1H5m11 4h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-7a1 1 0 0 0-1 1v1m4 3v10c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1v-7.1c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H13c.6 0 1 .4 1 1Z"/>
                    </svg>
                </span>
                <span>Copy Secret</span>
            </button>
        </div>
        <button class="btn-icon variant-ghost-error h-fit" on:click={() => dispatch('delete', data.id)}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
            </svg>
        </button>
    </div>
</section>