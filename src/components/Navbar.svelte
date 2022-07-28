<script>
	import { supabase } from '../supabase.js';

	const logout = () => {
		console.log('log out');
		supabase.auth.signOut();
	};
</script>

<div class="my-4 flex justify-end px-12">
	<button
		class="text-sm bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
		on:click={logout}>Log out</button
	>
</div>
