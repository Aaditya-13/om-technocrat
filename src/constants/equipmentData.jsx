import React from 'react';
import { Factory, Cpu, PenTool, Microscope, Wrench, FlaskConical } from 'lucide-react';

export const equipmentList = [
  {
    icon: <Factory size={28} strokeWidth={1.5} />,
    title: "Robotic Pick-and-Place Tandem Pneumatic Press Lines",
    description: "Automated pneumatic tandem press lines with robotic pick-and-place systems for high-volume stamping and forming operations.",
    delay: "stagger-1"
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: "Robotic Welding Cells",
    description: "Automated MIG and spot welding robots ensuring consistent weld quality and high production throughput.",
    delay: "stagger-2"
  },
  {
    icon: <PenTool size={28} strokeWidth={1.5} />,
    title: "CNC Machining Centers",
    description: "Precision CNC milling and turning centers for tool & die manufacturing and critical component machining.",
    delay: "stagger-3"
  },
  {
    icon: <Wrench size={28} strokeWidth={1.5} />,
    title: "SPM Assembly Lines",
    description: "Special Purpose Machines and semi-automated assembly lines for sub-assembly and final assembly operations.",
    delay: "stagger-2"
  },
  {
    icon: <FlaskConical size={28} strokeWidth={1.5} />,
    title: "Quality Testing Lab",
    description: "Fully equipped metallurgical and testing lab with CMM inspection, hardness testers, profile projectors, and surface roughness testers, ensuring accurate measurement and stringent quality control.",
    delay: "stagger-3"
  }
];

export const capacityMetrics = [
  {
    value: "50,000+",
    label: "Parts / Month",
    delay: "stagger-1"
  },
  {
    value: "600T",
    label: "Max Press Capacity",
    delay: "stagger-2"
  },
  {
    value: "127,000+",
    label: "Sq. Ft. Area",
    delay: "stagger-3"
  },
];
