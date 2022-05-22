import axios from 'axios';
import React, { FC } from 'react';

const  axiosClient = axios.create({
    baseURL: "https://fa-asm-redux-backend.herokuapp.com/api",
    headers: {
        "Content-Type":"application/json"
    }
})

export default axiosClient;