import log from 'loglevel';
log.setLevel('error');

export const canvas = document.getElementById('canvas') as HTMLCanvasElement;
function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    log.info(`Canvas resized to ${canvas.width}x${canvas.height}`);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

export const context2D = canvas.getContext('2d')!;
