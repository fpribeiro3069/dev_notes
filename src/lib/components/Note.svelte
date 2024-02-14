<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { NoteType } from '$lib/types';

    const dispatch = createEventDispatcher();

    export let data: NoteType;
</script>

<section class="card card-hover m-4 p-4">
    <div class="flex flex-row justify-center">
        <pre class="w-full">{data.text}</pre>
        <button class="btn-icon variant-ghost-error h-fit" on:click={() => dispatch('delete', data.id)}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
            </svg>
        </button>
    </div>
</section>