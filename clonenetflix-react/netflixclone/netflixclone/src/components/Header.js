import React from 'react';
import './Header.css';

export default ({black}) => {

    return (

<header className={black ? 'black':''}>
<div className="header--logo">
<a href="/">
<img src="https://i.guim.co.uk/img/media/c48ba97c12dd3968065d573237e83ad04b791af9/0_490_2008_1205/master/2008.jpg?width=620&quality=85&fit=max&s=cacc360e068d769b82d944489e7d748c" alt="Netflix"/>

</a>
</div>
<div className="header--user">
    <a href="/">
<img src="https://thumbs.dreamstime.com/b/%C3%ADcone-do-usu%C3%A1rio-do-vetor-7337510.jpg" alt="Usuário"/>

    </a>
</div>


</header>




    );





}
