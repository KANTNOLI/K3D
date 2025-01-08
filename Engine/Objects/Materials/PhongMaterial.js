import * as THREE from "three";

export const PhongMaterial = (
  visual = {
    color: 0xffffff,
    specular: 0x111111,
    shininess: 30,
    map: null,
    lightMap: null,
    lightMapIntensity: 1,
    aoMap: null,
    aoMapIntensity: 1,
    emissive: 0x000000,
    emissiveIntensity: 1,
    emissiveMap: null,
    bumpMap: null,
    bumpScale: 1,
    normalMap: null,
    normalScale: new THREE.Vector2(1, 1),
    displacementMap: null,
    displacementScale: 1,
    displacementBias: 0,
    specularMap: null,
    alphaMap: null,
    envMap: null,
    opacity: 1,
    transparent: false,
  },
  additional = {
    combine: THREE.MultiplyOperation,
    reflectivity: 1,
    refractionRatio: 0.98,
  },
  admin = {
    wireframe: false,
    wireframeLinewidth: 1,
    fog: true,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0,
    premultipliedAlpha: false,
    polygonOffset: false,
    polygonOffsetFactor: 0,
    polygonOffsetUnits: 0,
    dithering: false,
    side: THREE.FrontSide,
    shadowSide: null,
    vertexColors: false,
    blending: THREE.NormalBlending,
    blendSrc: THREE.SrcAlphaFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
    blendEquation: THREE.AddEquation,
    blendSrcAlpha: null,
    blendDstAlpha: null,
    blendEquationAlpha: null,
    colorWrite: true,
    precision: null
  },
  animate = {
    skinning: false,
    morphTargets: false,
    morphNormals: false,
    flatShading: false,
  }
) => {
  return new THREE.MeshPhongMaterial({
    color: visual.color,
    specular: visual.specular,
    shininess: visual.shininess,
    map: visual.map,
    lightMap: visual.lightMap,
    lightMapIntensity: visual.lightMapIntensity,
    aoMap: visual.aoMap,
    aoMapIntensity: visual.aoMapIntensity,
    emissive: visual.emissive,
    emissiveIntensity: visual.emissiveIntensity,
    emissiveMap: visual.emissiveMap,
    bumpMap: visual.bumpMap,
    bumpScale: visual.bumpScale,
    normalMap: visual.normalMap,
    normalScale: visual.normalScale,
    displacementMap: visual.displacementMap,
    displacementScale: visual.displacementScale,
    displacementBias: visual.displacementBias,
    specularMap: visual.specularMap,
    alphaMap: visual.alphaMap,
    envMap: visual.envMap,
    opacity: visual.opacity,
    transparent: visual.transparent,
    combine: additional.combine,
    reflectivity: additional.reflectivity,
    refractionRatio: additional.refractionRatio,
    wireframe: admin.wireframe,
    wireframeLinewidth: admin.wireframeLinewidth,
    fog: admin.fog,
    depthTest: admin.depthTest,
    depthWrite: admin.depthWrite,
    alphaTest: admin.alphaTest,
    premultipliedAlpha: admin.premultipliedAlpha,
    polygonOffset: admin.polygonOffset,
    polygonOffsetFactor: admin.polygonOffsetFactor,
    polygonOffsetUnits: admin.polygonOffsetUnits,
    dithering: admin.dithering,
    side: admin.side,
    shadowSide: admin.shadowSide,
    vertexColors: admin.vertexColors,
    blending: admin.blending,
    blendSrc: admin.blendSrc,
    blendDst: admin.blendDst,
    blendEquation: admin.blendEquation,
    blendSrcAlpha: admin.blendSrcAlpha,
    blendDstAlpha: admin.blendDstAlpha,
    blendEquationAlpha: admin.blendEquationAlpha,
    colorWrite: admin.colorWrite,
    precision: admin.precision,
    skinning: animate.skinning,
    morphTargets: animate.morphTargets,
    morphNormals: animate.morphNormals,
    flatShading: animate.flatShading,
  });
};
