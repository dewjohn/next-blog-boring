import svg0 from '@/public/year/0.svg';
import svg1 from '@/public/year/1.svg';
import svg2 from '@/public/year/2.svg';
import svg3 from '@/public/year/3.svg';
import svg4 from '@/public/year/4.svg';
import svg5 from '@/public/year/5.svg';
import svg6 from '@/public/year/6.svg';
import svg7 from '@/public/year/7.svg';
import svg8 from '@/public/year/8.svg';
import svg9 from '@/public/year/9.svg';
import svg10 from '@/public/year/10.svg';
import svg11 from '@/public/year/11.svg';

interface Iicon {
  [index: number]: any;
}

const icon: Iicon = {
  0: svg0,
  1: svg1,
  2: svg2,
  3: svg3,
  4: svg4,
  5: svg5,
  6: svg6,
  7: svg7,
  8: svg8,
  9: svg9,
  10: svg10,
  11: svg11
};

export const translateYear = (year: string) => {
  const index = parseInt(year) % 12;
  return icon[index];
};
