import React from 'react';
import { Factory, Cpu, PenTool, Microscope, Wrench, FlaskConical } from 'lucide-react';

export const equipmentList = [
  {
    icon: <Factory size={28} strokeWidth={1.5} />,
    title: "Pneumatic Press Lines",
    description: "High-tonnage hydraulic and mechanical presses (50T – 400T) for stamping, forming, and deep drawing operations.",
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
    icon: <Microscope size={28} strokeWidth={1.5} />,
    title: "CMM Inspection",
    description: "Coordinate Measuring Machines for dimensional accuracy verification with micron-level precision.",
    delay: "stagger-1"
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
    description: "Fully equipped metallurgical and testing lab with hardness testers, profile projectors, and surface roughness testers.",
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
    value: "197,000+",
    label: "Sq. Ft. Area",
    delay: "stagger-3"
  },
  {
    value: "400+",
    label: "Skilled Workforce",
    delay: "stagger-4"
  }
];
