import { AnimatedSquareStyleType, SquareStyleType } from '@peter-present/led-caro';

const ball1: SquareStyleType = { xAxis: 0, yAxis: 7, props: { className: 'grid1' } };
const ball2: SquareStyleType = { xAxis: 6, yAxis: 4, props: { className: 'grid3' } };
const ball3: SquareStyleType = { xAxis: 5, yAxis: 1, props: { className: 'grid4' } };
const ball4: SquareStyleType = { xAxis: 3, yAxis: 0, props: { className: 'grid1' } };
const ball5: SquareStyleType = { xAxis: 2, yAxis: 1, props: { className: 'grid2' } };
const ball6: SquareStyleType = { xAxis: 0, yAxis: 1, props: { className: 'grid3' } };
const ball7: SquareStyleType = { xAxis: 0, yAxis: 4, props: { className: 'grid2' } };
const prop1: Array<SquareStyleType> = [
  { xAxis: 0, yAxis: { $gte: 0, $lte: 4 }, props: { className: 'grid2' } },
  ball1,
];
const prop2: Array<SquareStyleType> = [
  { xAxis: 0, yAxis: { $gte: 1, $lte: 5 }, props: { className: 'grid2' } },
  ball1,
];
const prop3: Array<SquareStyleType> = [
  { xAxis: 0, yAxis: { $gte: 2, $lte: 6 }, props: { className: 'grid2' } },
  ball1,
];
const prop4: Array<SquareStyleType> = [
  { xAxis: 0, yAxis: { $gte: 2, $lte: 7 }, props: { className: 'grid1' } },
  ball2,
];
const prop5: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $gte: 3, $lte: 7 } },
      { xAxis: 1, yAxis: 7 },
    ],
    props: { className: 'grid1' },
  },
  ball2,
];
const prop6: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $gte: 4, $lte: 7 } },
      { xAxis: { $in: [1, 2] }, yAxis: 7 },
    ],
    props: { className: 'grid1' },
  },
  ball2,
];
const prop7: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $in: [5, 6, 7] } },
      { xAxis: { $in: [1, 2, 3] }, yAxis: 7 },
    ],
    props: { className: 'grid1' },
  },
  ball2,
];
const prop8: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $in: [6, 7] } },
      { xAxis: { $in: [1, 2, 3] }, yAxis: 7 },
      { xAxis: 3, yAxis: 6 },
    ],
    props: { className: 'grid1' },
  },
  ball2,
];
const prop9: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [0, 1, 2, 3] }, yAxis: 7 },
      { xAxis: 3, yAxis: { $in: [5, 6] } },
    ],
    props: { className: 'grid1' },
  },
  ball2,
];
const prop10: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [1, 2, 3] }, yAxis: 7 },
      { xAxis: 3, yAxis: { $in: [5, 6] } },
      { xAxis: 4, yAxis: 5 },
    ],
    props: { className: 'grid1' },
  },
  ball2,
];
const prop11: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [2, 3] }, yAxis: 7 },
      { xAxis: 3, yAxis: { $in: [5, 6] } },
      { xAxis: 4, yAxis: { $in: [4, 5] } },
    ],
    props: { className: 'grid1' },
  },
  ball2,
];
const prop12: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 3, yAxis: { $in: [5, 6, 7] } },
      { xAxis: 4, yAxis: { $in: [4, 5] } },
      { xAxis: 5, yAxis: 4 },
    ],
    props: { className: 'grid1' },
  },
  ball2,
];
const prop13: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 3, yAxis: { $in: [5, 6, 7] } },
      { xAxis: 4, yAxis: { $in: [4, 5] } },
      { xAxis: { $in: [5, 6] }, yAxis: 4 },
    ],
    props: { className: 'grid3' },
  },
  ball3,
];
const prop14: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 3, yAxis: { $in: [5, 6] } },
      { xAxis: 4, yAxis: { $in: [4, 5] } },
      { xAxis: { $in: [5, 6] }, yAxis: 4 },
      { xAxis: 6, yAxis: 3 },
    ],
    props: { className: 'grid3' },
  },
  ball3,
];
const prop15: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 3, yAxis: 5 },
      { xAxis: 4, yAxis: { $in: [4, 5] } },
      { xAxis: { $in: [5, 6] }, yAxis: 4 },
      { xAxis: 6, yAxis: { $in: [2, 3] } },
    ],
    props: { className: 'grid3' },
  },
  ball3,
];
const prop16: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 4, yAxis: { $in: [4, 5] } },
      { xAxis: { $in: [5, 6] }, yAxis: 4 },
      { xAxis: 6, yAxis: { $in: [1, 2, 3] } },
    ],
    props: { className: 'grid3' },
  },
  ball3,
];
const prop17: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 4, yAxis: { $in: [4, 5] } },
      { xAxis: { $in: [5, 6] }, yAxis: 4 },
      { xAxis: 6, yAxis: { $in: [1, 2, 3] } },
      { xAxis: 5, yAxis: 1 },
    ],
    props: { className: 'grid4' },
  },
  ball4,
];
const prop18: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [4, 5, 6] }, yAxis: 4 },
      { xAxis: 6, yAxis: { $in: [1, 2, 3] } },
      { xAxis: 5, yAxis: { $in: [0, 1] } },
    ],
    props: { className: 'grid4' },
  },
  ball4,
];
const prop19: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [5, 6] }, yAxis: 4 },
      { xAxis: 6, yAxis: { $in: [1, 2, 3] } },
      { xAxis: 5, yAxis: { $in: [0, 1] } },
      { xAxis: 4, yAxis: 0 },
    ],
    props: { className: 'grid4' },
  },
  ball4,
];
const prop20: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [5, 6] }, yAxis: 4 },
      { xAxis: 6, yAxis: { $in: [1, 2, 3] } },
      { xAxis: 5, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [3, 4] }, yAxis: 0 },
    ],
    props: { className: 'grid1' },
  },
  ball5,
];
const prop21: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 6, yAxis: { $in: [1, 2, 3, 4] } },
      { xAxis: 5, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [3, 4] }, yAxis: 0 },
      { xAxis: 3, yAxis: 1 },
    ],
    props: { className: 'grid1' },
  },
  ball5,
];
const prop22: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 6, yAxis: { $in: [1, 2, 3, 4] } },
      { xAxis: 5, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [3, 4] }, yAxis: 0 },
      { xAxis: { $in: [2, 3] }, yAxis: 1 },
    ],
    props: { className: 'grid2' },
  },
  ball6,
];
const prop23: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 6, yAxis: { $in: [1, 2, 3] } },
      { xAxis: 5, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [3, 4] }, yAxis: 0 },
      { xAxis: { $in: [1, 2, 3] }, yAxis: 1 },
    ],
    props: { className: 'grid2' },
  },
  ball6,
];
const prop24: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 6, yAxis: { $in: [1, 2, 3] } },
      { xAxis: 5, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [3, 4] }, yAxis: 0 },
      { xAxis: { $in: [0, 1, 2, 3] }, yAxis: 1 },
    ],
    props: { className: 'grid3' },
  },
  ball7,
];
const prop25: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 6, yAxis: { $in: [1, 2] } },
      { xAxis: 5, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [3, 4] }, yAxis: 0 },
      { xAxis: { $in: [0, 1, 2, 3] }, yAxis: 1 },
      { xAxis: 0, yAxis: 2 },
    ],
    props: { className: 'grid3' },
  },
  ball7,
];
const prop26: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [3, 4] }, yAxis: 0 },
      { xAxis: { $in: [0, 1, 2, 3, 6] }, yAxis: 1 },
      { xAxis: 0, yAxis: { $in: [2, 3] } },
    ],
    props: { className: 'grid3' },
  },
  ball7,
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
];
