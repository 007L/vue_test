import {RECEIVE_ANIMALS} from "./types"

export default {

  [RECEIVE_ANIMALS](state , {animails}){
    state.animails = animails
  }
}
