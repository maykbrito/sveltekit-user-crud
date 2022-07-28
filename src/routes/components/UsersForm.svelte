<script>
	import { addUser } from '../../store';
	import Button from './Button.svelte';

	$: newUser = { fullname: '', email: '', avatar: '' };

	const handleSubmit = (e) => {
		// check fields ?
		const isSomeFieldEmpty = Object.keys(newUser).some((field) => newUser[field] == '');

		if (isSomeFieldEmpty) {
			alert('Preencha todos os campos');
			return;
		}

		addUser(newUser);

		newUser = { fullname: '', email: '', avatar: '' };
	};
</script>

<div class="mt-10 sm:mt-0">
	<div class="md:grid md:grid-cols-3s">
		<div class="mt-5 md:mt-0 md:col-span-2">
			<form on:submit|preventDefault={handleSubmit}>
				<div class="shadow overflow-hidden sm:rounded-md">
					<div class="px-4 py-5 bg-blue-600 sm:p-6">
						<div class="grid grid-cols-6 gap-6">
							<div class="col-span-6 sm:col-span-3">
								<label for="fullname" class="block text-sm font-medium text-white">First name</label
								>
								<input
									bind:value={newUser.fullname}
									type="text"
									id="fullname"
									autocomplete="given-name"
									class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
								/>
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label for="email" class="block text-sm font-medium text-white">Email address</label
								>
								<input
									bind:value={newUser.email}
									type="text"
									id="email"
									autocomplete="email"
									class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>

						<div class="col-span-6 sm:col-span-3 mt-4">
							<label for="avatar" class="block text-sm font-medium text-white">Avatar URL</label>
							<input
								bind:value={newUser.avatar}
								type="text"
								id="avatar"
								class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					</div>
					<div class="px-4 py-3 bg-blue-600 text-right sm:px-6">
						<Button type="submit">Save</Button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
