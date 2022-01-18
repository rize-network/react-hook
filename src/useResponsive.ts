import { useState } from 'react';
import { enquireScreen } from 'enquire-js';
import { useMount } from './useMount';

export type ScreenResponsiveConfig = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ResponsiveConfig = Record<
  ScreenResponsiveConfig,
  {
    min: number;
    max: number;
  }
>;

export interface ResponsiveInfo {
  screen: ScreenResponsiveConfig;
}

export const responsiveConfig: ResponsiveConfig = {
  xs: {
    min: -Infinity,
    max: 576,
  },
  sm: {
    min: 576,
    max: 768,
  },
  md: {
    min: 768,
    max: 992,
  },
  lg: {
    min: 992,
    max: 1200,
  },
  xl: {
    min: 1200,
    max: 1600,
  },
  xxl: {
    min: 1600,
    max: +Infinity,
  },
};

export type ScreenConfig = {
  screen: ScreenResponsiveConfig;
  orientation: 'landscape' | 'portrait';
};

const defaultScreenConfig: ScreenConfig = {
  screen: 'xs',
  orientation: 'portrait',
};
export function useResponsive() {
  const [screen, setScreen] = useState('md');
  const [orientation, setOrientation] = useState(
    defaultScreenConfig.orientation,
  );

  useMount(() => {
    for (const key of Object.keys(responsiveConfig)) {
      const sizeScreen = responsiveConfig[key];
      enquireScreen(() => {
        setScreen(key as ScreenResponsiveConfig);
      }, `only screen ${sizeScreen.min && sizeScreen.min >= 0 ? 'and (min-width:' + sizeScreen.min + 'px)' : ''} ${sizeScreen.max && sizeScreen.max >= 0 && sizeScreen.max < Infinity ? 'and (max-width:' + sizeScreen.max + 'px)' : ''}`);
    }

    enquireScreen(() => {
      setOrientation('landscape');
    }, 'only screen and (orientation: landscape)');
    enquireScreen(() => {
      setOrientation('portrait');
    }, 'only screen and (orientation: portrait)');
  });

  return { screen, orientation };
}
