import { INode, ICptWithParents, ICptWithoutParents } from "../src/types";

export const VisitToAsia: INode = {
  id: "VisitToAsia",
  states: ["NoVisit", "Visit"],
  parents: [],
  cpt: { NoVisit: 0.99, Visit: 0.01 },
};

export const Tuberculosis: INode = {
  id: "Tuberculosis",
  states: ["Absent", "Present"],
  parents: ["VisitToAsia"],
  cpt: [
    { when: { VisitToAsia: "NoVisit" }, then: { Absent: 0.99, Present: 0.01 } },
    { when: { VisitToAsia: "Visit" }, then: { Absent: 0.95, Present: 0.05 } },
  ],
};

export const Smoking: INode = {
  id: "Smoking",
  states: ["NonSmoker", "Smoker"],
  parents: [],
  cpt: { NonSmoker: 0.5, Smoker: 0.5 },
};

export const LungCancer: INode = {
  id: "LungCancer",
  states: ["Absent", "Present"],
  parents: ["Smoking"],
  cpt: [
    { when: { Smoking: "NonSmoker" }, then: { Absent: 0.99, Present: 0.01 } },
    { when: { Smoking: "Smoker" }, then: { Absent: 0.9, Present: 0.1 } },
  ],
};

export const TbOrCa = {
  id: "TbOrCa",
  states: ["Nothing", "CancerORTuberculosis"],
  parents: ["Tuberculosis", "LungCancer"],
  cpt: [
    {
      when: { Tuberculosis: "Absent", LungCancer: "Absent" },
      then: { Nothing: 1, CancerORTuberculosis: 0 },
    },
    {
      when: { Tuberculosis: "Absent", LungCancer: "Present" },
      then: { Nothing: 0, CancerORTuberculosis: 1 },
    },
    {
      when: { Tuberculosis: "Present", LungCancer: "Absent" },
      then: { Nothing: 0, CancerORTuberculosis: 1 },
    },
    {
      when: { Tuberculosis: "Present", LungCancer: "Present" },
      then: { Nothing: 0, CancerORTuberculosis: 1 },
    },
  ],
};

export const XRay: INode = {
  id: "XRay",
  states: ["Normal", "Abnormal"],
  parents: ["TbOrCa"],
  cpt: [
    { when: { TbOrCa: "Nothing" }, then: { Normal: 0.95, Abnormal: 0.05 } },
    {
      when: { TbOrCa: "CancerORTuberculosis" },
      then: { Normal: 0.02, Abnormal: 0.98 },
    },
  ],
};

export const Bronchitis: INode = {
  id: "Bronchitis",
  states: ["Absent", "Present"],
  parents: ["Smoking"],
  cpt: [
    { when: { Smoking: "NonSmoker" }, then: { Absent: 0.7, Present: 0.3 } },
    { when: { Smoking: "Smoker" }, then: { Absent: 0.4, Present: 0.6 } },
  ],
};

export const Dyspnea = {
  id: "Dyspnea",
  states: ["Absent", "Present"],
  parents: ["TbOrCa", "Bronchitis"],
  cpt: [
    {
      when: { TbOrCa: "Nothing", Bronchitis: "Absent" },
      then: { Absent: 0.9, Present: 0.1 },
    },
    {
      when: { TbOrCa: "Nothing", Bronchitis: "Present" },
      then: { Absent: 0.2, Present: 0.8 },
    },
    {
      when: { TbOrCa: "CancerORTuberculosis", Bronchitis: "Absent" },
      then: { Absent: 0.3, Present: 0.7 },
    },
    {
      when: { TbOrCa: "CancerORTuberculosis", Bronchitis: "Present" },
      then: { Absent: 0.1, Present: 0.9 },
    },
  ],
};

export const allNodes = [
  VisitToAsia,
  Tuberculosis,
  Smoking,
  LungCancer,
  TbOrCa,
  XRay,
  Bronchitis,
  Dyspnea,
];
export const network: {
  [name: string]: {
    levels: string[];
    parents: string[];
    cpt?: ICptWithParents | ICptWithoutParents;
  };
} = {};
allNodes.forEach((node: INode) => {
  network[node.id] = {
    levels: node.states,
    parents: node.parents,
    cpt: node.cpt,
  };
});
