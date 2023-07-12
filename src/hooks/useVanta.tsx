import { useEffect, useRef } from 'react';
import { Effect } from 'postprocessing';
import { VantaBase } from 'vanta/dist/vanta.base.min';

type VantaOptions = Parameters<VantaBase>[1];

const useVanta = (effect: Effect, options: VantaOptions): React.RefObject<HTMLDivElement> => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaInstanceRef = useRef<VantaBase | null>(null);

  useEffect(() => {
    if (vantaRef.current && !vantaInstanceRef.current) {
      vantaInstanceRef.current = effect(options, vantaRef.current) as VantaBase;
    }

    return () => {
      if (vantaInstanceRef.current) {
        vantaInstanceRef.current.destroy();
        vantaInstanceRef.current = null;
      }
    };
  }, [effect, options]);

  return vantaRef;
};

export default useVanta;
