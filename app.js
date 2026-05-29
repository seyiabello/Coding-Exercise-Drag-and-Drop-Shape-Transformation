// namespace required for SVG element, standard createElement did not work
const NS = 'http://www.w3.org/2000/svg';

function createShape(type) {
    const div = document.createElement('div');
    div.setAttribute('draggable', 'true');

    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('width', '30');
    svg.setAttribute('height', '30');
    
    let shape;

    if (type === 'circle'){
        shape = document.createElementNS(NS, 'circle');
        shape.setAttribute('cx', '15');
        shape.setAttribute('cy', '15');
        shape.setAttribute('r', '12');
    }

    shape.setAttribute('fill', 'blue');
    svg.appendChild(shape);
    div.appendChild(svg);
    return div;
}

const box = document.getElementById('q1');

for (let i = 0; i < 5; i++) {
    box.appendChild(createShape('circle'));
}