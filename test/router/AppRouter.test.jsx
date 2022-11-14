import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en el <AppRouter />', () => {
    
    test('Debe de mostrar el login, si no está autenticado', () => { 

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        //screen.debug();
        expect(screen.getAllByText('Login').length).toBe(2);

     })

     test('Debe de mostrar el comoponente de Marvel si está auteunticado', () => { 
        
        const contextValue = {
            logged: true,
            user: {
                name: 'Pablo',
                id: 'ABC'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        //screen.debug();
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);



      })

});