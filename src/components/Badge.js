import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia" />                    
                </div>

                <div>
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200

" alt= "Avatar"/>
                    <h1>Cristian <br/> Acero</h1>
                </div>
                <div>
                    <p>Frontend Engineer</p>
                    <p>@llcristianll</p>
                </div>

                <div>
                    #platziconf
                </div>
            </div>
            
        
        )
    }

}

export default Badge;