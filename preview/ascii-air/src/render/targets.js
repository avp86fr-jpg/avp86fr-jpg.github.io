import * as THREE from "three";

export function makeColorDepthRT(w, h) {
  const depth = new THREE.DepthTexture(w, h);
  depth.format = THREE.DepthFormat;
  depth.type = THREE.UnsignedIntType;
  const rt = new THREE.WebGLRenderTarget(w, h, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    generateMipmaps: false,
    depthBuffer: true,
    stencilBuffer: false,
    type: THREE.UnsignedByteType,
    format: THREE.RGBAFormat,
    depthTexture: depth,
  });
  rt.texture.colorSpace = THREE.SRGBColorSpace;
  return rt;
}

export function makeRT(w, h, filter = THREE.LinearFilter, colorSpace = THREE.NoColorSpace) {
  const rt = new THREE.WebGLRenderTarget(w, h, {
    minFilter: filter,
    magFilter: filter,
    generateMipmaps: false,
    depthBuffer: false,
    type: THREE.UnsignedByteType,
    format: THREE.RGBAFormat,
  });
  rt.texture.colorSpace = colorSpace;
  return rt;
}
