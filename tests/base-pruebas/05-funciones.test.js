import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
      test('getUser debe de retornar un objet', () => {

        const testUser = {
            uid: 'ABC123',
        username: 'El_Papi1502'
        };
        const user = getUser();

        expect( testUser ).toEqual( user );


      });

      test('should first', () => { 

        const name = 'Fernando';
        const userA = getUsuarioActivo( name );


        expect( userA ).toEqual({
          uid: 'ABC567',
          username: name

        });


       });
    });