import axios from "axios"

const ANIMAL_url = "animal/list.do"

export const RESULT_OK = true

export function reqAnimalis() {
  return axios.get(ANIMAL_url)
}
