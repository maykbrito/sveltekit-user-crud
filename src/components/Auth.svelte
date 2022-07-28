<script>
	import { supabase } from '../supabase';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;

			const { error } = await supabase.auth.signIn({ email });

			if (error) throw error;

			alert('check your email for the login link!');
		} catch (error) {
			console.error(error);
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<div class="max-w-sm mx-auto mt-32">
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Log In</h1>
	<p class="text-center mt-2 mb-6">Sign in via magic link with your email below</p>
	<form on:submit|preventDefault={handleLogin}>
		<div class="flex flex-col text-sm mb-2">
			<label for="email" class="font-bold mb-2 text-gray-800">Email</label>
			<input
				class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
				id="email"
				type="email"
				placeholder="Your email"
				bind:value={email}
			/>
		</div>

		<button class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
			>Log In</button
		>
	</form>
</div>
