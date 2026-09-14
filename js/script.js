// ========================================================
// MENU HAMBÚRGUER
// ========================================================
const hamburguer = document.getElementById('hamburguer');
const menuLateral = document.getElementById('menuLateral');
const menuOverlay = document.getElementById('menuOverlay');
 
function abrirMenu() {
    hamburguer.classList.add('aberto');
    menuLateral.classList.add('aberto');
    menuOverlay.classList.add('aberto');
    hamburguer.setAttribute('aria-expanded', 'true');
}
 
function fecharMenu() {
    hamburguer.classList.remove('aberto');
    menuLateral.classList.remove('aberto');
    menuOverlay.classList.remove('aberto');
    hamburguer.setAttribute('aria-expanded', 'false');
}
 
hamburguer.addEventListener('click', () => {
    menuLateral.classList.contains('aberto') ? fecharMenu() : abrirMenu();
});
 
menuOverlay.addEventListener('click', fecharMenu);
 
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', fecharMenu);
});
 
 
// ========================================================
// NAVBAR COM FUNDO AO ROLAR A PÁGINA
// ========================================================
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});
 
 
// ========================================================
// CARREGADOR DE FOTOS
// Tenta carregar a foto indicada em cada elemento [data-foto].
// Se existir, ela aparece no lugar. Se não, mostra um espaço
// reservado bonito indicando onde a foto deve ser colocada.
// ========================================================
function carregarFotos() {
    document.querySelectorAll('[data-foto]').forEach(elemento => {
        const caminho = elemento.getAttribute('data-foto');
        const imagem = new Image();
 
        imagem.onload = () => {
            elemento.style.backgroundImage = `url('${caminho}')`;
            elemento.classList.remove('sem-foto');
        };
 
        imagem.onerror = () => {
            elemento.classList.add('sem-foto');
        };
 
        imagem.src = caminho;
    });
}
 
carregarFotos();
 
 
// ========================================================
// CORAÇÕES FLUTUANTES SAINDO DA LOGO
// ========================================================
const logo = document.getElementById('logo');
const coresCoracoes = ['#5B8DEF', '#FF6FA5', '#9B5DE5'];
 
function criarCoracaoFlutuante() {
    const coracao = document.createElement('span');
    coracao.className = 'coracao-flutuante';
    coracao.innerHTML = '♥';
    coracao.style.setProperty('--deslocamento', (Math.random() * 30 - 15) + 'px');
    coracao.style.color = coresCoracoes[Math.floor(Math.random() * coresCoracoes.length)];
    logo.appendChild(coracao);
 
    setTimeout(() => coracao.remove(), 2500);
}
 
setInterval(criarCoracaoFlutuante, 1000);
 
 
// ========================================================
// CARROSSEL DE MOTIVOS
// ========================================================
let indiceMotivoAtual = 0;
 
function mudarMotivo(direcao) {
    const slides = document.querySelectorAll('.motivo-slide');
 
    slides[indiceMotivoAtual].classList.remove('ativo');
 
    indiceMotivoAtual += direcao;
    if (indiceMotivoAtual >= slides.length) {
        indiceMotivoAtual = 0;
    } else if (indiceMotivoAtual < 0) {
        indiceMotivoAtual = slides.length - 1;
    }
 
    slides[indiceMotivoAtual].classList.add('ativo');
}
 
 
// ========================================================
// BOTÃO "EU TE AMO" — EXPLOSÃO DE CORAÇÕES
// ========================================================
const btnAmor = document.getElementById('btnAmor');
const coresExplosao = ['#5B8DEF', '#FF6FA5', '#9B5DE5', '#FFFFFF'];
 
btnAmor.addEventListener('click', () => {
    for (let i = 0; i < 18; i++) {
        criarCoracaoExplosao();
    }
});
 
function criarCoracaoExplosao() {
    const coracao = document.createElement('span');
    coracao.className = 'coracao-explosao';
    coracao.innerHTML = '♥';
    coracao.style.color = coresExplosao[Math.floor(Math.random() * coresExplosao.length)];
 
    const angulo = Math.random() * 360;
    const distancia = 80 + Math.random() * 130;
    const x = Math.cos(angulo * Math.PI / 180) * distancia;
    const y = Math.sin(angulo * Math.PI / 180) * distancia;
 
    coracao.style.setProperty('--x', x + 'px');
    coracao.style.setProperty('--y', y + 'px');
    coracao.style.fontSize = (14 + Math.random() * 16) + 'px';
 
    btnAmor.parentElement.appendChild(coracao);
 
    setTimeout(() => coracao.remove(), 1200);
}
 