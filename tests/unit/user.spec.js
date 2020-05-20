import Vuex from 'vuex'
import user from '@/store/modules/user'
import { createLocalVue } from '@vue/test-utils'
// import cloneDeep from 'lodash.clonedeep'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/modules/user.js', () => {
 
  describe('mutations',()=>{
      it('EMPTY_USER_ID',()=>{
          const state = {
              currentUser: "test"
          }

          user.mutations.EMPTY_USER_ID(state)
          expect(state.currentUser).toBe("")
          
      })
      
  })
})
  