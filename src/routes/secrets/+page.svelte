<script lang="ts">
	import Secret from "$lib/components/Secret.svelte";
    import { secretsStore } from "$lib/stores";
    import type { SecretType } from "$lib/types";
	import type { ComponentEvents } from "svelte";
    import {v4 as uuidv4} from 'uuid';

    let newSecretDescription: string;
    let newSecretSecret: string;
    let textComponent: any;

    function saveSecret(): void {
        if (newSecretSecret.length > 0 && newSecretDescription.length > 0) {
            const newSecret: SecretType = {
                id: uuidv4(),
                description: newSecretDescription,
                secret: newSecretSecret
            }
            secretsStore.update((n) => {n.push(newSecret); return n});
            newSecretDescription = "";
            newSecretSecret = "";
            textComponent.focus();
        }
    }

	function deleteSecret(event: ComponentEvents<Secret>['delete']): undefined {
		secretsStore.update((n) => {n.splice(n.findIndex((secret: SecretType) => secret.id === event.detail), 1); return n});
        return;
	}
</script>

<div class="container mt-12">
    <div class="flex flex-col mx-2">
        <h1 class="h1 mb-10 text-center">Keep your secre*s</h1>
        <input
            class="input mt-2"
            placeholder="Secret description"
            bind:value={newSecretDescription}
            bind:this={textComponent}
        />
        <label class="label mt-2">
            <span>Secret</span>
            <input
                name="secret"
                type="password"
                class="input"
                bind:value={newSecretSecret}
            />
        </label>
        <button value="Save" class="btn variant-filled mt-2" on:click={saveSecret}>
            Save
        </button>
    </div>
    {#each $secretsStore as secret (secret.id)}
        <Secret data={secret} on:delete={deleteSecret} />
    {/each}
</div>