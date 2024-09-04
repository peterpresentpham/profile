import { AnimatedSquareStyleType, SquareStyleType } from '@peter-present/led-caro';

const prop1: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $in: [1, 2, 3] } },
      { xAxis: 1, yAxis: 2 },
    ],
    props: { className: 'grid1' },
  },
];
const prop2: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 1, yAxis: { $in: [1, 2, 3] } },
      { xAxis: 2, yAxis: 2 },
    ],
    props: { className: 'grid1' },
  },
];
const prop3: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [0, 1, 2] }, yAxis: 2 },
      { xAxis: 1, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
];
const prop4: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [1, 2, 3] }, yAxis: 2 },
      { xAxis: 2, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
];
const prop5: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [2, 3, 4] }, yAxis: 2 },
      { xAxis: 3, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
];
const prop6: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 4, yAxis: { $in: [1, 2, 3] } },
      { xAxis: 3, yAxis: 2 },
    ],
    props: { className: 'grid1' },
  },
];
const prop7: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [1, 2, 3] } },
      { xAxis: 4, yAxis: 2 },
    ],
    props: { className: 'grid1' },
  },
];
const prop8: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 4, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
];
const prop9: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 4, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
  { $or: [{ xAxis: { $in: [0, 1] }, yAxis: { $in: [2, 3] } }], props: { className: 'grid4' } },
];
const prop10: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 4, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
  { $or: [{ xAxis: { $in: [1, 2] }, yAxis: { $in: [2, 3] } }], props: { className: 'grid4' } },
];
const prop11: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 4, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
  { $or: [{ xAxis: { $in: [1, 2] }, yAxis: { $in: [1, 2] } }], props: { className: 'grid4' } },
];
const prop12: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 4, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
  { $or: [{ xAxis: { $in: [2, 3] }, yAxis: { $in: [1, 2] } }], props: { className: 'grid4' } },
];
const prop13: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 4, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
  { $or: [{ xAxis: { $in: [3, 4] }, yAxis: { $in: [1, 2] } }], props: { className: 'grid4' } },
];
const prop14: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 4, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
  { $or: [{ xAxis: { $in: [3, 4] }, yAxis: { $in: [0, 1] } }], props: { className: 'grid4' } },
];
const prop15: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 4, yAxis: 3 },
    ],
    props: { className: 'grid1' },
  },
  { $or: [{ xAxis: { $in: [4, 5] }, yAxis: { $in: [0, 1] } }], props: { className: 'grid4' } },
];
const prop16: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
];
const prop17: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  {
    $or: [
      { xAxis: 0, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 1, yAxis: 2 },
    ],
    props: { className: 'grid2' },
  },
];
const prop18: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  {
    $or: [
      { xAxis: 1, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 2, yAxis: 2 },
    ],
    props: { className: 'grid2' },
  },
];
const prop19: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  {
    $or: [
      { xAxis: 4, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 5, yAxis: 2 },
    ],
    props: { className: 'grid2' },
  },
];
const prop20: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  {
    $or: [
      { xAxis: 4, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 5, yAxis: 2 },
    ],
    props: { className: 'grid2' },
  },
  { xAxis: { $in: [0, 1] }, yAxis: { $in: [2, 3] }, props: { className: 'grid3' } },
];
const prop21: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  {
    $or: [
      { xAxis: 4, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 5, yAxis: 2 },
    ],
    props: { className: 'grid2' },
  },
  { xAxis: { $in: [1, 2] }, yAxis: { $in: [2, 3] }, props: { className: 'grid3' } },
];
const prop22: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  {
    $or: [
      { xAxis: 4, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 5, yAxis: 2 },
    ],
    props: { className: 'grid2' },
  },
  { xAxis: { $in: [1, 2] }, yAxis: { $in: [1, 2] }, props: { className: 'grid3' } },
];
const prop23: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  {
    $or: [
      { xAxis: 4, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 5, yAxis: 2 },
    ],
    props: { className: 'grid2' },
  },
  { xAxis: { $in: [1, 2] }, yAxis: { $in: [0, 1] }, props: { className: 'grid3' } },
];
const prop24: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  {
    $or: [
      { xAxis: 4, yAxis: { $in: [2, 3, 4] } },
      { xAxis: 5, yAxis: 2 },
    ],
    props: { className: 'grid2' },
  },
  { xAxis: { $in: [3, 4] }, yAxis: { $in: [0, 1] }, props: { className: 'grid3' } },
];
const prop25: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  { xAxis: 5, yAxis: 2, props: { className: 'grid2' } },
  { xAxis: 4, yAxis: { $in: [0, 1] }, props: { className: 'grid3' } },
];
const prop26: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  { xAxis: 5, yAxis: 2, props: { className: 'grid2' } },
  { xAxis: 4, yAxis: { $in: [0, 1] }, props: { className: 'grid3' } },
  {
    $or: [
      { xAxis: 0, yAxis: 2 },
      { xAxis: 1, yAxis: { $in: [2, 3, 4] } },
    ],
    props: { className: 'grid4' },
  },
];
const prop27: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  { xAxis: 5, yAxis: 2, props: { className: 'grid2' } },
  { xAxis: 4, yAxis: { $in: [0, 1] }, props: { className: 'grid3' } },
  {
    $or: [
      { xAxis: 1, yAxis: 2 },
      { xAxis: 2, yAxis: { $in: [2, 3, 4] } },
    ],
    props: { className: 'grid4' },
  },
];
const prop28: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  { xAxis: 5, yAxis: 2, props: { className: 'grid2' } },
  { xAxis: 4, yAxis: { $in: [0, 1] }, props: { className: 'grid3' } },
  {
    $or: [
      { xAxis: 2, yAxis: 2 },
      { xAxis: { $in: [0, 1, 2] }, yAxis: 3 },
    ],
    props: { className: 'grid4' },
  },
];
const prop29: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  { xAxis: 5, yAxis: 2, props: { className: 'grid2' } },
  { xAxis: 4, yAxis: { $in: [0, 1] }, props: { className: 'grid3' } },
  {
    $or: [
      { xAxis: 3, yAxis: 2 },
      { xAxis: { $in: [1, 2, 3] }, yAxis: 3 },
    ],
    props: { className: 'grid4' },
  },
];
const prop30: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  { xAxis: 5, yAxis: 2, props: { className: 'grid2' } },
  { xAxis: 4, yAxis: { $in: [0, 1] }, props: { className: 'grid3' } },
  {
    $or: [
      { xAxis: 3, yAxis: 4 },
      { xAxis: 2, yAxis: { $in: [2, 3, 4] } },
    ],
    props: { className: 'grid4' },
  },
];
const prop31: Array<SquareStyleType> = [
  { xAxis: 5, yAxis: 3, props: { className: 'grid1' } },
  { xAxis: 5, yAxis: { $in: [0, 1] }, props: { className: 'grid4' } },
  { xAxis: 5, yAxis: 2, props: { className: 'grid2' } },
  { xAxis: 4, yAxis: { $in: [0, 1] }, props: { className: 'grid3' } },
  {
    $or: [
      { xAxis: 5, yAxis: 4 },
      { xAxis: 4, yAxis: { $in: [2, 3, 4] } },
    ],
    props: { className: 'grid4' },
  },
];
export const squares: Array<AnimatedSquareStyleType> = [
  { props: prop1 },
  { props: prop2 },
  { props: prop3 },
  { props: prop4 },
  { props: prop5 },
  { props: prop6 },
  { props: prop7 },
  { props: prop8 },
  { props: prop9 },
  { props: prop10 },
  { props: prop11 },
  { props: prop12 },
  { props: prop13 },
  { props: prop14 },
  { props: prop15 },
  { props: prop16 },
  { props: prop17 },
  { props: prop18 },
  { props: prop19 },
  { props: prop20 },
  { props: prop21 },
  { props: prop22 },
  { props: prop23 },
  { props: prop24 },
  { props: prop25 },
  { props: prop26 },
  { props: prop27 },
  { props: prop28 },
  { props: prop29 },
  { props: prop30 },
  { props: prop31 },
  { props: [] },
];
