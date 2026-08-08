import axios from 'axios';

const API_URL = "https://localhost:7009/api/students";

export const getStudents = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
export const addStudent = async (student) => {

    const token = localStorage.getItem("token");

    const response = await axios.post(
        API_URL,
        student,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};