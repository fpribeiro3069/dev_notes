<script>
	import { AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
    import { page } from '$app/stores';
</script>

<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/notes" selected={$page.url.pathname === '/notes'}>
            <svelte:fragment slot="lead">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"/>
                </svg>
            </svelte:fragment>
            <span>Notes</span>
        </AppRailAnchor>
	</svelte:fragment>
	<!-- --- -->
	<AppRailAnchor href="/links" selected={$page.url.pathname === '/links'}>
		<svelte:fragment slot="lead">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"/>
            </svg></svelte:fragment>
		<span>Links</span>
	</AppRailAnchor>
	<AppRailAnchor href="/secrets" selected={$page.url.pathname === '/secrets'}>
		<svelte:fragment slot="lead">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z"/>
            </svg>
        </svelte:fragment>
		<span>Secrets</span>
	</AppRailAnchor>
	<AppRailAnchor href="/tips" selected={$page.url.pathname === '/tips'}>
		<svelte:fragment slot="lead">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 17a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.8 9h2.7a2 2 0 1 0-1-3.7 1.9 1.9 0 0 0-.4-1.4 2 2 0 0 0-3.1-.2 2 2 0 0 0-3.5 1.6 2 2 0 1 0-1 3.7h3.4m3-1v3.6M10.1 9v2.6M15 16h0m-6 0h0m12-4.4a1.8 1.8 0 0 1-1.8 1.3 1.9 1.9 0 0 1-1.8-1.3 1.9 1.9 0 0 1-3.6 0 1.8 1.8 0 0 1-1.7 1.3 2 2 0 0 1-2-1.3 1.8 1.8 0 0 1-1.6 1.3 2 2 0 0 1-2-1.3 1.9 1.9 0 0 1-1.8 1.3A1.8 1.8 0 0 1 3 11.6v.4a9 9 0 0 0 18 0v-.4Z"/>
            </svg>
        </svelte:fragment>
		<span>Code Tips</span>
	</AppRailAnchor>
</AppRail>