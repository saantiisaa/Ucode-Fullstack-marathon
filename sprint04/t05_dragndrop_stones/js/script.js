const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
    let isDraggable = false;
    let startPosX, startPosY, startMouseX, startMouseY;

    block.addEventListener('click', () => {
        isDraggable = !isDraggable;
        block.classList.toggle('draggable', isDraggable);
    });

    block.addEventListener('mousedown', (event) => {
        if (isDraggable) {
            startPosX = block.offsetLeft;
            startPosY = block.offsetTop;
            startMouseX = event.clientX;
            startMouseY = event.clientY;
            block.style.cursor = 'grabbing';
        }
    });

    block.addEventListener('mousemove', (event) => {
        if (isDraggable) {
            if (event.buttons === 1) {
                const deltaX = event.clientX - startMouseX;
                const deltaY = event.clientY - startMouseY;
                block.style.left = startPosX + deltaX + 'px';
                block.style.top = startPosY + deltaY + 'px';
            }
        }
    });

    block.addEventListener('mouseup', () => {
        block.style.cursor = 'grab';
    });

    block.addEventListener('mouseleave', () => {
        block.style.cursor = 'grab';
    });
});
