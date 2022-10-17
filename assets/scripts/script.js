let filtroAtual = document.querySelector('#filter-todos');
let projetos = [
    {
        titulo: "TITULO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/robo.png",
        filtro: "robotica"

    },
    {
        titulo: "TITULO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/robo.png",
        filtro: "robotica"

    },
    {
        titulo: "TITULO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/robo.png",
        filtro: "robotica"

    },
    {
        titulo: "TITULO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/robo.png",
        filtro: "robotica"

    },
    {
        titulo: "TITULO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/robo.png",
        filtro: "robotica"

    },
    {
        titulo: "TITULO IMPRESSÃO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/impressao1.jpeg",
        filtro: "impressão"

    },
    {
        titulo: "TITULO IMPRESSÃO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/impressao2.jpeg",
        filtro: "impressão"

    },
    {
        titulo: "TITULO IMPRESSÃO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/impressao3.jpeg",
        filtro: "impressão"

    },
    {
        titulo: "TITULO IMPRESSÃO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/impressao4.jpeg",
        filtro: "impressão"

    },
    {
        titulo: "TITULO IMPRESSÃO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/impressao5.jpeg",
        filtro: "impressão"

    },
    {
        titulo: "TITULO IMPRESSÃO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/impressao6.jpeg",
        filtro: "impressão"

    },
    {
        titulo: "TITULO IMPRESSÃO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/impressao7.jpeg",
        filtro: "impressão"

    },
    {
        titulo: "TITULO IMPRESSÃO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/impressao8.jpeg",
        filtro: "impressão"

    },
    {
        titulo: "TITULO IMPRESSÃO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/impressao9.jpeg",
        filtro: "impressão"

    },
    {
        titulo: "TITULO IMPRESSÃO",
        descricao: "QUALQUER COISA",
        src: "./assets/images/projetos/impressao10.jpeg",
        filtro: "impressão"

    },
]


document.querySelector('#filter-todos').addEventListener("click", ()=>{

        if(filtroAtual != document.querySelector('#filter-todos')){
            filtroAtual.classList.remove('active');
            filtroAtual  = document.querySelector('#filter-todos');
            filtroAtual.classList.add('active');
            
            let projetoImagens = document.querySelector('.section-projetos-images');
           
            
            console.log("TODOS")
            console.log(filtroAtual)

        }
})
document.querySelector('#filter-simulacao').addEventListener("click", ()=>{

    if(filtroAtual != document.querySelector('#filter-simulacao')){
        filtroAtual.classList.remove('active');
        filtroAtual  = document.querySelector('#filter-simulacao');
        filtroAtual.classList.add('active');
        console.log("SIMULACAO")
        console.log(filtroAtual)
    }
})
document.querySelector('#filter-impressao').addEventListener("click", ()=>{

    if(filtroAtual != document.querySelector('#filter-impressao')){
        filtroAtual.classList.remove('active');
        filtroAtual  = document.querySelector('#filter-impressao');
        filtroAtual.classList.add('active');
        console.log("IMPRESSÃO")
        console.log(filtroAtual)
    }
})


document.querySelector('#filter-robotica').addEventListener("click", ()=>{

    if(filtroAtual != document.querySelector('#filter-robotica')){
        filtroAtual.classList.remove('active');
        filtroAtual  = document.querySelector('#filter-robotica');
        filtroAtual.classList.add('active');
        console.log("ROBOTICA")
        console.log(filtroAtual)
    }
})