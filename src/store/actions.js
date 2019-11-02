
import {RECEIVE_ANIMALS} from "./types"
import {reqAnimalis,RESULT_OK} from "../api";


export default {

  getAnimals({commit},cb){
      reqAnimalis().then(response =>{
        const result = response.data
        if(result.success == RESULT_OK){
          const animails = result.data
          commit(RECEIVE_ANIMALS, {animails})
          cb && cb()
        }
      })
  }
}
