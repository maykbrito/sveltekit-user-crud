<script>
import UsersForm from "./components/UsersForm.svelte";
import UsersList from "./components/UsersList.svelte";

</script>

<h1 class="text-2xl fon mb-12 t-bold text-center text-gray-800 md:text-3xl">
    Users
</h1>

<main class="md:flex gap-8 px-12">
    <UsersForm />
    <UsersList />
</main>