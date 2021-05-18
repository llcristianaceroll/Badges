import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';


class BadgeNew extends React.Component {
    render()  {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge  firstName = 'Cristian' 
                                lastName = 'Acero'
                                avatarUrl= "https://media-exp1.licdn.com/dms/image/C4E03AQGlasG70LC_kg/profile-displayphoto-shrink_800_800/0/1619050770031?e=1626912000&v=beta&t=xxIbqsmApJFV__9zpcQ8jknvamXMv-Olp7XmHeoOhf8"
                                jobTitle="Frontend Engineer"
                                twitter="lcristianl"/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BadgeNew;