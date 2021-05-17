import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';


class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" />                    
                </div>

                <div className="Badge__section-name">
                    <img  className="Badge__avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlasG70LC_kg/profile-displayphoto-shrink_800_800/0/1619050770031?e=1626912000&v=beta&t=xxIbqsmApJFV__9zpcQ8jknvamXMv-Olp7XmHeoOhf8" alt= "Avatar"/>
                    <h1>Cristian <br/> Acero</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>Frontend Engineer</h3>
                    <div>@llcristianll</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
            
        
        )
    }

}

export default Badge;