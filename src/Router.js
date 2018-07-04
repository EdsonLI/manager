import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

/**
 * 
 *@returns
 * propriedade 'initial' garante a prioridade do componente 'LoginForm' na abertura do aplicativo
 * 
 * verificar no index das 'actions' o fluxo onde o método 'Actions.employeeList()' do 'react-native-router-flux' 
 * chama o componente 'EmployeeList' quando um 'reducer' mudar de estado atraves de uma acao de 'LOGIN_USER_SUCCESS'
 */
const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Faça Login!" initial />
                </Scene>

                <Scene key="main">
                    <Scene
                        rightTitle="Adicionar"
                        onRight={ () => Actions.employeeCreate() }
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Colaboradores"
                        initial 
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Criar" />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Editar" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;