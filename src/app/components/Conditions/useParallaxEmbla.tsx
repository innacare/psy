'use client';

import {useCallback, useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const useParallaxEmbla = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const updateParallax = useCallback(() => {
    if (!emblaApi) return;

    const slides = emblaApi.slideNodes();
    const scrollProgress = emblaApi.scrollProgress();

    slides.forEach((slide, index) => {
      const diff = emblaApi.scrollSnapList()[index] - scrollProgress;

      const layer = slide.querySelector<HTMLElement>('.parallax__layer');
      if (layer) {
        layer.style.transform = `translateX(${diff * -40}%)`;
      }
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit();
    onSelect();

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onInit);
    emblaApi.on('scroll', () => requestAnimationFrame(updateParallax));

    return () => {
      emblaApi?.off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect, updateParallax]);

  return {
    emblaRef,
    selectedIndex,
    scrollSnaps,
    scrollTo,
    updateParallax,
  };
};
