<script>
    import UserItem from "./UserItem.svelte";
    import { Users } from "../../store"
</script>
<!-- This example requires Tailwind CSS v2.0+ -->
<ul class="divide-y divide-gray-200 mt-6 flex-1">
    {#each $Users as user(user.email)}
        <UserItem user={user} />
    {/each}
</ul>