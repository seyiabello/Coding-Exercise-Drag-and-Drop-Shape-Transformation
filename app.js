// namespace required for SVG element, standard createElement did not work
const NS = 'http://www.w3.org/2000/svg';

// outlines the shape a dropped shape will transform into if it lands in a certain quadrant
const shapeMap = {
    q1: 'circle',
    q2: 'hexagon',
    q3: 'square',
    q4: 'triangle'
};

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
    
    } else if (type === 'square') {
        shape = document.createElementNS(NS, 'rect');
        shape.setAttribute('x', '3');
        shape.setAttribute('y', '3');
        shape.setAttribute('width', '24');
        shape.setAttribute('height', '24');
    
    } else if (type === 'triangle') {
        shape = document.createElementNS(NS, 'polygon');

        // points are for the x and ycoordinates of each triangle corner
        shape.setAttribute('points', '15,3 27,27 3,27');

    } else if (type === 'hexagon') {
        shape = document.createElementNS(NS, 'polygon');

        // points are for the x and y coordinates of each hexagon corner
        shape.setAttribute('points', '15,2 26,8 26,22 15,28 4,22 4,8');
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

let draggedShape = null;

document.querySelectorAll('div[draggable]').forEach(div => {
    div.addEventListener('dragstart', function() {
        draggedShape = this;
    });
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('drop', function() {
        const targetQuadrant = this.id;
        const newShape = createShape(shapeMap[targetQuadrant]);

        // use of replaceWith in order to get rid of draggedShape from current quadrant and place newShape in its place
        draggedShape.replaceWith(newShape);

        this.appendChild(newShape);

        // attach dragstart to shape that has been transformed so it can be dragged again
        newShape.addEventListener('dragstart', function() {
            draggedShape = this;
        });
    });
});