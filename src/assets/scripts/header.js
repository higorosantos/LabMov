

document.querySelector('header').innerHTML = `<div class="header-container container">
<div class="logo"><img src="./assets/images/logo.png" alt="logo"></div>
<div class="menu-toggle"></div>
<nav class="menu">
    <ul>
        <li><a href="./index.html">inicio</a></li>
        <li><a href="./quemsomos.html">quem somos</a></li>
        <li><a id="open-submenu" href="#">pesquisas</a>
            <div class="projetos-submenu">
                <ul>
                    <li><a href="./impressao.html">impressão 3d</a></li>
                    <li><a href="./impressao.html">simulação</a></li>
                    <li><a href="./robotica.html">robotica</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">noticias</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScnbrODzKVrmP3G6KukY6EGzHsjoyWpELQ3nrpMHEar1cEWhw/viewform"
                target="_blank">Prestação de serviços</a></li>
    </ul>
</nav>
</div>`