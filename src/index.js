// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BadgeNew from './pages/BadgeNew';

 const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew/>, container);

    /*
    firstName = 'Cristian' 
    lastName = 'Acero'
    avatarUrl= "https://media-exp1.licdn.com/dms/image/C4E03AQGlasG70LC_kg/profile-displayphoto-shrink_800_800/0/1619050770031?e=1626912000&v=beta&t=xxIbqsmApJFV__9zpcQ8jknvamXMv-Olp7XmHeoOhf8"
    jobTitle="Frontend Engineer"
    twitter="lcristianl"
    */