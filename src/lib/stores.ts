import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';
import type { LinkType, NoteType, SecretType } from '$lib/types';

export const notesStore: Writable<NoteType[]> = localStorageStore('notes', []);

export const linksStore: Writable<LinkType[]> = localStorageStore('links', []);

export const secretsStore: Writable<SecretType[]> = localStorageStore('secrets', []);