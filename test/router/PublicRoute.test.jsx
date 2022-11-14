import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en <PublicRoute />', () => {
    
    test('Si no está autenticado debe de mostrar el children', () => { 

        const contextValue = {
            logged: false
        }

         render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
         )
         //screen.debug()
         expect(screen.getAllByText('Ruta pública')).toBeTruthy()
    })

    test('debe de navegar si está autenticado', () => { 

        const contextValue = {
            logged: true,
            user: {
                name: 'Pablo',
                id: 'ABC'
            }
        }
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />
                        <Route path='/' element={<h1>Página Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        //screen.debug()
        expect(screen.getByText('Página Marvel')).toBeTruthy()

    })

});