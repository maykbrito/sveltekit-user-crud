<script>
    import { Users } from '../../store'
    import Button from './Button.svelte';

    const handleSubmit = (e) => {
        const form = new FormData(e.srcElement)
        const newUser  = {
            fullname: form.get("fullname"),
            email: form.get("email"), 
            avatar: form.get("avatar")
        }
    
        // check fields ?
        const fieldEmpty = Object.keys(newUser).find(field => newUser[field] == "" )

        if(fieldEmpty) {
            alert("Preencha todos os campos")
        }

        Users.update((currentUsers) => [newUser, ...currentUsers] )
    }

</script>

<div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3s">
        <div class="mt-5 md:mt-0 md:col-span-2">
            <form on:submit|preventDefault={handleSubmit}>
                <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="fullname" class="block text-sm font-medium text-gray-700">First name</label>
                            <input type="text" name="fullname" id="fullname" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                            <input type="text" name="email" id="email" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>
                    </div>

                    <div class="col-span-6 sm:col-span-3 mt-4">
                        <label for="avatar" class="block text-sm font-medium text-gray-700">Avatar URL</label>
                        <input type="text" name="avatar" id="avatar" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <Button type="submit" >Save</Button>
                </div>
                </div>
            </form>
        </div>
    </div>
</div>