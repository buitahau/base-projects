import { useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red'
};

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');
  let [size, setSize] = useState(50);

  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="my-3"
      />
    </div>
  );
}

export default Loading;
