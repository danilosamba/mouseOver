// Seleciona o elemento com o ID 'pattern' e armazena na variável 'patternElement'
const patternElement = document.getElementById("pattern");

// Verifica se o elemento 'patternElement' foi encontrado. Se não, exibe um erro no console.
if (!patternElement) {
    console.error("Elemento com ID 'pattern' não encontrado.");
}

// Calcula quantos hexágonos podem caber verticalmente, dividindo a altura do elemento pelo tamanho do hexágono (40px) e arredondando para cima, adicionando 1.
const countY = Math.ceil(patternElement.clientHeight / 40) + 1;

// Calcula quantos hexágonos podem caber horizontalmente, dividindo a largura do elemento pelo tamanho do hexágono (48px) e arredondando para cima, adicionando 1.
const countX = Math.ceil(patternElement.clientWidth / 48) + 1;

// Loop para criar hexágonos no padrão
for (let i = 0; i < countY; i++) {
    for (let j = 0; j < countX; j++) {

        // Cria um novo elemento <div> para representar um hexágono
        const hexagon = document.createElement("div");

        // Define o estilo do hexágono, incluindo a imagem de fundo e a posição absoluta
        hexagon.style = `
        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=') no-repeat;
        width: 44px;
        height: 50px;
        background-size: contain;
        position: absolute;
        top: ${i * 40}px;
        left: ${j * 48 + ((i * 24) % 48)}px;
        `;

        // Adiciona o hexágono criado ao elemento 'patternElement'
        patternElement.appendChild(hexagon);
    }
}

// Inicializa a posição do mouse
let mousePosition = { x: 0, y: 0 };

// Adiciona um evento que escuta o movimento do mouse
document.addEventListener("mousemove", (mouse) => {

    // Atualiza a posição do mouse com as coordenadas atuais
    mousePosition = {
        x: mouse.clientX,
        y: mouse.clientY,
    };
});

// Função que cria um loop de animação
const loop = () => {

    // Seleciona o elemento com ID 'gradient' e armazena na variável 'gradientElement'
    const gradientElement = document.getElementById("gradient");

    // Verifica se o elemento 'gradientElement' foi encontrado. Se não, exibe um erro no console e sai da função.
    if (!gradientElement) {
        console.error("Elemento com ID 'gradient' não encontrado.");
        return; // Agora estamos dentro da função, o return é válido aqui
    }

    // Atualiza a transformação do elemento 'gradientElement' para mover conforme a posição do mouse
    gradientElement.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;

    // Solicita a próxima animação
    window.requestAnimationFrame(loop);
};

// Inicia o loop de animação
window.requestAnimationFrame(loop);
