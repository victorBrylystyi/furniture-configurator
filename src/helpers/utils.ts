import { WebGLRenderer, WebGLRenderTarget } from "three";


export const drawBufferToImg = (buffer: ArrayBuffer, width: number, height: number, customeFileName?: string): void => {
    const img = new ImageData(width, height);
  
    for (let i = 0; i < img.data.length; i++) {
    //@ts-ignore
      img.data[i] = buffer[i];
    }
  
    const link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);
  
    const cnv = document.createElement('canvas');
    cnv.width = width;
    cnv.height = height;
  
    const ctx2d = cnv.getContext('2d') as CanvasRenderingContext2D;
  
    ctx2d.putImageData(img, 0, 0);
  
    link.href = cnv.toDataURL('image/png');
    link.download = `${customeFileName}.png`;
    link.click();
  
    document.body.removeChild(link);
};
  
export const drawRT = (gl: WebGLRenderer, rt: WebGLRenderTarget, customeFileName?: string): void => {
    const step = 4; // rgba

    const buffer = new Uint8Array(rt.width * rt.height * step);
    gl.autoClear = false;
    gl.setRenderTarget(rt);
    gl.clearDepth();

    gl.readRenderTargetPixels(rt, 0, 0, rt.width, rt.height, buffer);

    drawBufferToImg(buffer, rt.width, rt.height, customeFileName);

    gl.autoClear = true;
    gl.setRenderTarget(null);

};

export const  downloadScreenshot = (canvas: HTMLCanvasElement) => {
    const image = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.setAttribute('download', 'screenshot.png');
    a.setAttribute('href', image);
    a.click();
}