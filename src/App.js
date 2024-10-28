import "./App.css"
import React from 'react';
import Saludo from './Saludo';
import Despedida from './Despedida';

const App = () => {
    const mostrarSaludo = false; 
    const nombreUsuario = "Daniel";
    const matriculas = 
    [ 
        {Matricula: '1425BTY', Marca: 'Peugeot', Modelo:'3008', Tipo:'híbrido'}, 

        {Matricula: '1762MNY', Marca: 'Mercedes', Modelo:'EQS', Tipo:'Diesel'},

        {Matricula: '9882TPK', Marca: 'Renault', Modelo:'4 E-Tech', Tipo:'Eléctrico'}, 

        {Matricula: '6634TRV', Marca: 'Volswagen', Modelo:'Golf', Tipo:'Gasolina'}, 

        {Matricula: '2285RPL', Marca: 'Toyota', Modelo:'RAV4', Tipo:'hibrido'}, 

        {Matricula: '1782PRT', Marca: 'Peugeot', Modelo:'5008', Tipo:'diesel'}
    ];

    return (
        <div>
            <div>
                <h1>Ejercicio 1</h1>
                <div>{mostrarSaludo ? (<Saludo nombre={nombreUsuario} />) : (<Despedida nombre={nombreUsuario} />)}</div>
            </div>
            <div>
                <h1>Ejercicio 2</h1>
                <div className="StyledTextComponent">
                    {matriculas.map((coch) => (
                        <ul>
                            <li>{coch.Matricula} - {coch.Marca} - {coch.Modelo} - ({coch.Tipo})</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>

       

        
        
    );
};

export default App;
