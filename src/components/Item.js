import React, { memo } from 'react';
import useCountRenders from '../hooks/useCountRenders';

const Item = memo(({ n, increment }) => {
  useCountRenders(`item ${n}`);
  return <button onClick={() => increment(n)}>{n}</button>;
});

export default Item;
