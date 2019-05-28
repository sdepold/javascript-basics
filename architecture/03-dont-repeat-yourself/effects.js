function move(element) {
    anime({
        targets: element,
        translateY: 250
    });
}

function spin(element) {
    anime({
        targets: element,
        translateY: 250,
        scale: 2,
        rotate: '1turn'
    });
}

function skew(element) {
    anime({
        targets: element,
        scale: 0.5,
        skewX: '30deg'
    });
}

function transparent(element) {
    anime({
        targets: element,
        opacity: 0.5
    });
}

function shadow(element) {
    anime({
        targets: element,
        left: '240px',
        backgroundColor: '#FFF',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad'
    });
}

