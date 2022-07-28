import { writable } from "svelte/store";

export const Users = writable([])

export const addUser = ({ fullname, email, avatar }) => {
    Users.update(currentUsers => [...currentUsers, { fullname, email, avatar }])
}

export const deleteUser = email => {
    Users.update(users => users.filter(user => user.email !== email))
}