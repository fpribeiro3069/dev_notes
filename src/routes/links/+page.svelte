<script lang="ts">
    import { linksStore } from "$lib/stores";
    import type { ComponentEvents } from 'svelte';
	import type { LinkType } from "$lib/types";
    import {v4 as uuidv4} from 'uuid';
	import Link from "$lib/components/Link.svelte";

    let newLinkText: string;
    let newDescription: string;
    let textComponent: any;

    function saveLink(): void {
        if (newLinkText.length > 0) {
            const newLink: LinkType = {
                id: uuidv4(),
                link: newLinkText,
                description: newDescription
            }
            linksStore.update((n) => {n.push(newLink); return n});
            newLinkText = "";
            newDescription = "";
            textComponent.focus();
        }
    }

	function deleteLink(event: ComponentEvents<Link>['delete']): undefined {
		linksStore.update((n) => {n.splice(n.findIndex((note: LinkType) => note.id === event.detail), 1); return n});
        return;
	}

</script>

<div class="container mt-12">
    <div class="flex flex-col mx-2">
        <h1 class="h1 mb-10 text-center">Save your <span class="anchor">links</span></h1>
        <input 
            class="input mt-2" 
            placeholder="Save new link" 
            bind:value={newLinkText}
            bind:this={textComponent} />
        <input
            class="input mt-2"
            placeholder="Description for the link"
            bind:value={newDescription} />
        <button value="Save" class="btn variant-filled mt-2" on:click={saveLink}>
            Save
        </button>
    </div>
    {#each $linksStore as link (link.id)}
        <Link data={link} on:delete={deleteLink} />
    {/each}
</div>