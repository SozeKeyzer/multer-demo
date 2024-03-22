import React from 'react'
import Upload from './Upload';
import { Navigate } from 'react-router-dom';

export default function Protected() {
    const token = window.localStorage.getItem('token');
  return (
    token?<Upload/>:<Navigate to="/"/>
  )
}
