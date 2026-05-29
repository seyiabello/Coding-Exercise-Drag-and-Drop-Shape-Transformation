function testCreateShape() {
    const types = ['circle', 'square', 'triangle', 'hexagon'];

    // in SVG squares map to 'rect', not 'square'
    const expectedTags = ['circle', 'rect', 'polygon', 'polygon'];

    types.forEach((type, i) => {
        const div = createShape(type);
        const svg = div.querySelector('svg');
        const shape = svg.firstChild;

        // uppercase is returned through tagName therefore must convert to lowercase for comparing
        const actualTag = shape.tagName.toLowerCase();
        const expectedTag = expectedTags[i];

        if (actualTag === expectedTag) {
            console.log(`PASS: createShape('${type}') returns <${actualTag}>`);
        } else {
            console.error(`FAIL: createShape('${type}') - expected <${expectedTag}>, got <${actualTag}>`);

        }
    });
}

testCreateShape();