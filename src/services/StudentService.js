import axios from "axios";

const baseURL = "http://localhost:8080/student";

// we can write export function like this (too shortly) <if only inncluded one line>
export const getAllStudents= ()=> axios.get(baseURL);