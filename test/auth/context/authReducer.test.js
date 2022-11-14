import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas en el authRecuer', () => { 

    test('Debe de retornar el estado por defecto', () => { 
        const state = authReducer({logged: false}, {})
        expect(state).toEqual({logged: false})
     })

     test('Debe de llamr el login autenticar y establecer el user', () => { 
        const action = {
            type: types.login,
            payload:{
                name: 'Jorge',
                id: '123'
            }
        }

        const state = authReducer({logged: false}, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
      })

      test('logout debe de borrar el name de usuario logged en false', () => { 
        
        const state = {
            logged: true,
            user: {
                id: '123',
                name: 'Jorge'
            }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action)
        expect(newState).toEqual({
            logged: false
        })

       })

 })