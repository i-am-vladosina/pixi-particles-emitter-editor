import { EmitterConfigV3 } from "@pixi/particle-emitter";

export const baseParticlesEmitterConfig: EmitterConfigV3 = {
  lifetime: {
    min: 0.5,
    max: 0.8,
  },
  frequency: 0.008,
  spawnChance: 1,
  particlesPerWave: 1,
  emitterLifetime: -1,
  maxParticles: 1000,
  pos: {
    x: 0,
    y: 0,
  },
  addAtBack: false,
  behaviors: [
    {
      type: "alpha",
      config: {
        alpha: {
          list: [
            {
              value: 0.8,
              time: 0,
            },
            {
              value: 0.1,
              time: 1,
            },
          ],
        },
      },
    },
    {
      type: "scale",
      config: {
        scale: {
          list: [
            {
              value: 0.2,
              time: 0,
            },
            {
              value: 0.01,
              time: 1,
            },
          ],
        },
      },
    },
    {
      type: "blendMode",
      config: {
        blendMode: "screen",
      },
    },
    {
      type: "color",
      config: {
        color: {
          list: [
            {
              value: "fb1010",
              time: 0,
            },
            {
              value: "f5b830",
              time: 1,
            },
          ],
        },
      },
    },
    {
      type: "moveSpeed",
      config: {
        speed: {
          list: [
            {
              value: 200,
              time: 0,
            },
            {
              value: 100,
              time: 1,
            },
          ],
          isStepped: false,
        },
      },
    },
    {
      type: "rotationStatic",
      config: {
        min: 0,
        max: 360,
      },
    },
    {
      type: "spawnShape",
      config: {
        type: "torus",
        data: {
          x: 0,
          y: 0,
          radius: 10,
        },
      },
    },
  ],
};
