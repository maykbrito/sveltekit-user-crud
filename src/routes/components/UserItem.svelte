<script>
	import Button from './Button.svelte';
	import { deleteUser } from '../../store';
	export let user;

	$: isLoading = false;
	const handleDelete = async (userEmail) => {
		isLoading = true;
		await deleteUser(userEmail);
		isLoading = false;
	};
</script>

<li class="py-4 flex justify-between">
	<div class="flex">
		<img class="h-10 w-10 rounded-full" src={user.avatar} alt="" />
		<div class="ml-3">
			<p class="text-sm font-medium text-gray-900">{user.fullname}</p>
			<p class="text-sm text-gray-500">{user.email}</p>
		</div>
	</div>
	<form on:submit|preventDefault={() => handleDelete(user.email)}>
		<Button disabled={isLoading} type="submit" style="delete">Delete</Button>
	</form>
</li>
