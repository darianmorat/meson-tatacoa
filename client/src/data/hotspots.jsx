export const POOL_HOTSPOT = [
   {
      id: 100,
      category: "pool",
      position: [-0.93, -0.52, -1.29],
      info: {
         title: "PISCINA",
         description:
            "Espacios apropiados para la recreación y descanso, disfruta de nuestros servicios de piscina los cuales estan incluidos dentro de tu estadia",
      },
   },
];

export const HOTSPOTS = [
   {
      id: 1,
      category: "reservation",
      position: [-0.15, -0.38, 1.15],
      info: {
         title: "#1 MIOCOCHILIUS",
         description:
            "1 cama doble ideal para parejas, incluye baño privado y comodidades necesarias",
      },
   },
   {
      id: 2,
      category: "reservation",
      position: [0.4, -0.38, 1.38],
      info: {
         title: "#2 HUILATHERIUM",
         description:
            "1 cama doble ideal para parejas, incluye baño privado y comodidades necesarias",
      },
   },
   {
      id: 3,
      category: "reservation",
      position: [1.1, -0.28, 0.7],
      info: {
         title: "#3 STIRTONIA",
         description:
            "2 camas dobles ideal para familias, 4 personas, incluye baño privado",
      },
   },
   {
      id: 4,
      category: "reservation",
      position: [-0.9, -0.42, 0.1],
      info: {
         title: "#4 PHORUSRHACIDAE",
         description:
            "3 camas dobles acomodacion multiple, familiar 6 personas, no cuenta con baño",
      },
   },
   {
      id: 6,
      category: "reservation",
      position: [-2.45, -0.55, -0.35],
      info: {
         title: "#6 STUPENDEMYS",
         description:
            "2 camas dobles 4 personas acomodación multiple familiar, incluye baño privado",
      },
   },
   {
      id: 7,
      category: "reservation",
      position: [-1.75, -0.55, -1.25],
      info: {
         title: "#7 PURUSSAURUS",
         description:
            "2 camas dobles 4 personas acomodación multiple familiar, incluye baño privado",
      },
   },
];

export const ALL_HOTSPOTS = [...HOTSPOTS, ...POOL_HOTSPOT];
