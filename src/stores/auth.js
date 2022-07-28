import { writable } from "svelte/store";
import { supabase } from '../supabase.js';

export const user = writable(false)