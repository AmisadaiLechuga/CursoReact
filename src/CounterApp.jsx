import { useState } from 'react';
import PropTypes from 'prop-types';
export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState ( value );


  const handleAdd = () => { 
    //console.log(event)
    //setCounter( counter + 1 ) ;   //se puede utilizar este metodo para sumar cada clic
    setCounter ( (c) => c + 1 )     //oh se puede utilizar de esta forma
   } 

   //---------------------Ejemeplo de boton menos
  // const handleLess = () => { 
  //    setCounter ( (c) => c - 1 )
  //}
  
  //metodo mas corto

  const handleLess = () => setCounter ( counter - 1  );

  //-----------------------Fin de ejemplo menos



   ////---------------Ejemeplo de boton Reset
   //const handleReset = () => { 
    
   // setCounter ( value )
   //} 

   // metodo mas corto

   const handleReset = () => setCounter ( value );
    ////---------------Fin de boton Reset


  return (
      <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2> 
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleLess }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
      </>
    
  );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

////OTRA MANERA DE BOTON
//<button onClick={ (event) => handleAdd(event) }>
//+1
//</button>