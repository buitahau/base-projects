'use client';

import { ImageType } from '@/types/image';
import React from 'react';

interface SliderProps {
  folder_id?: string;
}

interface SliderState {
  images: ImageType[];
}

class Slider extends React.Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props);
    this.state = {
      images: []
    };
  }
  render() {
    return <div>Slider</div>;
  }
}

export default Slider;
