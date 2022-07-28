import { writable } from "svelte/store";
import { supabase } from './supabase.js';

export const Users = writable([])

export const loadUsers = async () => {
    const { data, error } = await supabase.from('users').select();

    if (error) {
        return console.error(error)
    }

    Users.set(data)
}

export const addUser = async ({ fullname, email, avatar }) => {
    const { data, error } = await supabase.from('users').insert([{ fullname, email, avatar }])

    if (error) {
        return console.error(error)
    }

    Users.update(currentUsers => [...currentUsers, data[0]])
}

export const deleteUser = async email => {
    const { error } = await supabase.from('users').delete().match({ email })

    if (error) {
        return console.error(error)
    }

    Users.update(users => users.filter(user => user.email !== email))
}