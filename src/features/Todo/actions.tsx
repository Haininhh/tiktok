import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants"


export const setJob = (payload: string) => {
    return {
      type: SET_JOB,
      payload
    }
  }
  
export const addJob = (payload: string) => {
    return {
      type: ADD_JOB,
      payload
    }
  }
export const deleteJob = (payload: number ) => {
    return {
      type: DELETE_JOB,
      payload
    }
  }