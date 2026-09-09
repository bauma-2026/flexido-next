import type { ReferenceId, ReferenceShared } from "./types";

export const referenceOrder: ReferenceId[] = [
  "overmolding-cell",
  "klt-conveyor",
  "carton-forming",
];

export const referenceShared: Record<ReferenceId, ReferenceShared> = {
  "overmolding-cell": {
    id: "overmolding-cell",
    routeKey: "referenceOvermolding",
    image: {
      src: "/images/systems/raw/robotska-celica-za-nabrizgavanje.png",
      width: 757,
      height: 1024,
      objectPosition: "object-[50%_50%]",
    },
    relatedSolutions: ["solutionInjectionMolding"],
  },
  "klt-conveyor": {
    id: "klt-conveyor",
    routeKey: "referenceConveyor",
    image: {
      src: "/images/systems/raw/vhodno-izhodna-tracna-proga.png",
      width: 757,
      height: 1024,
      objectPosition: "object-[50%_38%]",
    },
    relatedSolutions: ["solutionCnc", "solutionCobots", "solutionLogistics"],
  },
  "carton-forming": {
    id: "carton-forming",
    routeKey: "referenceCarton",
    image: {
      src: "/images/systems/raw/avtomatsko-oblikovanje-in-lepljenje-skatel.png",
      width: 1448,
      height: 1086,
    },
    relatedSolutions: ["solutionCustomSystems"],
  },
};
