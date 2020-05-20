import user from '@/store/modules/user'

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
  
