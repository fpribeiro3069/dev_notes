<script lang="ts">
    import { notesStore } from "$lib/stores";
    import Note from "$lib/components/Note.svelte";
    import type { ComponentEvents } from 'svelte';
	import type { NoteType } from "$lib/types";
    import {v4 as uuidv4} from 'uuid';

    let newNoteText: string;
    let textComponent: any;

    function saveNote(): void {
        if (newNoteText.length > 0) {
            const newNote: NoteType = {
                id: uuidv4(),
                text: newNoteText,
                createdAt: new Date()
            }
            notesStore.update((n) => {n.push(newNote); return n});
            newNoteText = "";
            textComponent.focus();
        }
    }

	function deleteNote(event: ComponentEvents<Note>['delete']): undefined {
		notesStore.update((n) => {n.splice(n.findIndex((note: NoteType) => note.id === event.detail), 1); return n});
        return;
	}
</script>

<div class="container mt-12">
    <div class="flex flex-col mx-2">
        <h1 class="h1 mb-10 text-center">Write your notes</h1>
        <textarea 
            class="textarea mt-2" 
            rows="4" 
            placeholder="Write new note" 
            bind:value={newNoteText}
            bind:this={textComponent} />
        <button value="Save" class="btn variant-filled mt-2" on:click={saveNote}>
            Save
        </button>
    </div>
    {#each $notesStore as note (note.id)}
        <Note data={note} on:delete={deleteNote} />
    {/each}
</div>