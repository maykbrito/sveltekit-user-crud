<script>
	import '../app.css';
	import Auth from '../components/Auth.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { user } from '../stores/auth.js';
	import { loadUsers } from '../stores/users';
	import { supabase } from '../supabase';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((__, session) => {
		user.set(session?.user);
		if (session?.user) {
			loadUsers();
		}
	});
</script>

<h1 class="text-2xl fon p-6 t-bold text-center text-gray-800 md:text-3xl shadow-md">Users</h1>

<div class="container mx-auto mt-2">
	{#if $user}
		<Navbar />
		<slot />
	{:else}
		<Auth />
	{/if}
</div>
