//----------------ejemplo 1 fragmento

//import { Fragment } from 'react';

//export const FirstApp = () => {
//  return (
//      <Fragment>
//        <h1>Amisadai</h1>
//        <p>Soy un subtitulo</p>
//      </Fragment>
    
//  )
//}

//------------------------------------

///---------------------------Ejemplo 2
//const newMessage = {
//    message: 'Hola Mundo',
//    title: 'Fernando'
//};
//export const FirstApp = () => {

    
//    return (
//        <>
//          {/*ejemplo del newMessage*/}
//        {/*<code>{ JSON.stringify( newMessage ) }</code>*/}
//        <p>Soy un subtitulo</p>
//        </>
//    )
//}

///-------------------
import PropTypes from 'prop-types';
export const FirstApp = ( { title, subTitle, name } ) => {

    //console.log( props );
    
    return (
        <>
         <h1>{ title }</h1>
        <p>{ subTitle }</p>
        <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,


}

FirstApp.defaultProps = {
title: 'No hay titulo',
subTitle: 'No Hay Subtitle',
name: 'Amisadai Lechuga'
}