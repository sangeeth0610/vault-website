'use client';

import expand from '@/public/assests/expand.png';
import layers from '@/public/assests/layers.png';
import light from '@/public/assests/light-bulb.png';
import network from '@/public/assests/network.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import AnimatedFillButton from '../Buttons/AnimatedFillButton';
import './PartnerWithUs.css';

gsap.registerPlugin(ScrollTrigger);

const partnerData = [
  {
    img: network,
    title: 'Network Effect',
    description: 'Multiply network of investors and business with Vault.',
  },
  {
    img: light,
    title: 'Know How',
    description: 'Exchange business or operational know-how with Vault.',
  },
  {
    img: layers,
    title: 'Industry Expertise',
    description: 'Exchange deep industry insights with Vault.',
  },
  {
    img: expand,
    title: 'Expand Reach',
    description: 'Expand your reach to deal flow.',
  },
];

export default function PartnerWithUs() {
  const leftRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  console.info(activeIndex);

  useLayoutEffect(() => {
    if (!leftRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // 🔵 Desktop Only
        '(min-width: 1024px)': function () {
          partnerData.forEach((_, i) => {
            ScrollTrigger.create({
              trigger: sectionsRef.current[i],
              start: 'top center',
              onEnter: () => setActiveIndex(i),
              onEnterBack: () => setActiveIndex(i),
            });
          });

          ScrollTrigger.create({
            trigger: leftRef.current,
            start: 'top top',
            end: () => {
              const right = document.querySelector('.partner-right');
              if (!right) return '+=0';

              const rightHeight = right.scrollHeight;
              const leftHeight = leftRef.current!.offsetHeight;

              return `+=${rightHeight - leftHeight}`;
            },
            pin: true,
            pinSpacing: true,
          });
        },

        // 🔵 Tablet & Mobile
        '(max-width: 1023px)': function () {},
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="partner-with-us">
      <div className="partner-layout flex-wrap">
        <div className="partner-left">
          <div ref={leftRef} className="partner-left-inner px-4 gap-4">
            <div className="primary-text text-uppercase letter-spacing fw-semibold fs-15">
              Partner With Us
            </div>

            <h2 className="font-libre fs-42 text-white">
              Become our <br />
              Operating Partner
            </h2>

            <AnimatedFillButton
              text="CONTACT US"
              sufixIconChildren={<GoArrowUpRight size={20} />}
            />
          </div>
        </div>

        <div className="partner-right">
          {partnerData.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) sectionsRef.current[i] = el;
              }}
              className="partner-with-us-content d-flex flex-column gap-3"
            >
              <Image src={item.img} alt={item.title} />
              <div>
                <h3 className="font-libre fs-42 text-white">{item.title}</h3>
                <p className="text-secondary fs-15 fw-lighter mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
