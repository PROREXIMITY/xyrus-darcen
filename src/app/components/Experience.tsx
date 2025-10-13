'use client';

import React from 'react';
import Image from 'next/image';
import { experiences } from '@/app/components/data/mockData';

interface ExperienceCardsProps {
  activeType: 'education' | 'organization';
}

export default function ExperienceCards({ activeType }: ExperienceCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiences
        .filter((exp) => exp.type === activeType)
        .map((exp, index) => (
          <div
            key={index}
            className="group bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-500"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={exp.image}
                alt={exp.institution}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-purple-300">{exp.period}</p>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <p className="text-white/80 font-medium">{exp.institution}</p>
                <p className="text-sm text-gray-400">{exp.description}</p>
              </div>

              {exp.achievements && (
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-medium text-white/80">
                    {activeType === 'education' ? 'Achievements' : 'Key Contributions'}
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i}
                        className="text-sm text-gray-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
