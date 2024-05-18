import axios from "axios";

const baseURL = "http://localhost:8080/student";

// we can write export function like this (too shortly) <if only inncluded one line>
export const getAllStudents= ()=> axios.get(baseURL);

export const createStudent = (data) => axios.post(baseURL,data);

export const deleteStudent = (id) => axios.delete(baseURL + '/' + id);

export const getStudent = (id) => axios.get(baseURL + '/' + id); 

export const updateStudent = (id,data) => axios.put(baseURL + '/' + id,data);