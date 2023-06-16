import * as React from 'react';
import {
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const stacks = [
  {
    id: 'nextjs',
    icon: SiNextdotjs,
  },
  {
    id: 'react',
    icon: SiReact,
  },
  {
    id: 'nest',
    icon: SiNestjs,
  },
  {
    id: 'typescript',
    icon: SiTypescript,
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
  },
  {
    id: 'mui',
    icon: SiMui,
  },
  {
    id: 'node',
    icon: SiNodedotjs,
  },
];

export default function TechStack() {
  return (
    <div className="flex justify-center space-x-2 md:space-x-4">
      {stacks.map((tech) => (
        <tech.icon
          key={tech.id}
          className="hover:text-fuaprimary-500 dark:hover:text-fuasecondary-500 h-4 w-4 text-gray-600 transition-colors dark:text-gray-200 md:h-5 md:w-5"
        />
      ))}
    </div>
  );
}
