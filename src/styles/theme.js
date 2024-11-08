import mixin from './mixin';
import { css } from 'styled-components';

const colors = {
  normal: {
    white: '#FFFFFF',
    background_white: '#F9F9F9',
    black: '#000000',
  },
  pink: {
    background_pink: '#FFBBCB',
    dark_pink: '#FF7575',
    btn_hover_pink: '#FFA8BC',
    btn_pink: '#FFDFE7',
    white_pink: '#FFEEF2',
    warm_pink: '#FFA2A2',
    red_pink: '#FF5959',
  },
  feeling: {
    happy_yellow: '#FFF1A8',
    sad_blue: '#B4F2FF',
    surprised_orange: '#FFCA99',
    relax_green: '#B9FFB3',
    worried_purple: '#C3C9FF',
    angry_pink: '#FFB6B6',
  },
  yellow: {
    background_yellow: '#FFE768',
  },
  gray: {
    white_gray: '#D9D9D9',
    dark_gray: '#CBC7C7',
    text_gray: '#858585',
  },
  gradient: {
    gradient_pink:'linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%)',
    gradient_yellow: 'linear-gradient(187deg, #FFE768 20.43%, #FFF3B7 84.05%)',
    this_month_emotion_gradient:'background: var(--Warm-Pink, linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.39) 111.04%), #FFA2A2)',
    gradient_black: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)',
  },
};

const fonts = {
  b_55_60: css`
    font-family: 'Pretendard';
    font-size: 5.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 6rem;
    letter-spacing: -0.33rem;
  `,
  b_48: css`
    font-family: 'Pretendard';
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  r_48: css`
    font-family: 'Pretendard';
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  xb_40_60: css`
    font-family: 'Pretendard';
    font-size: 4%;
    font-style: normal;
    font-weight: 800;
    line-height: 6rem;
  `,

  b_40: css`
    font-family: 'Pretendard';
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  r_40: css`
    font-family: 'Pretendard';
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  b_36_60: css`
    font-family: 'Pretendard';
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 6rem;
  `,
  r_36_60: css`
    font-family: 'Pretendard';
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 6rem;
  `,
  b_32: css`
    font-family: 'Pretendard';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,

  r_32_60: css`
    font-family: 'Pretendard';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 6rem;
  `,
  r_32: css`
    font-family: 'Pretendard';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  xb_27_60: css`
    font-family: 'Pretendard';
    font-size: 2.7rem;
    font-style: normal;
    font-weight: 800;
    line-height: 6rem;
    letter-spacing: -0.081rem;
  `,
  sb_27_38: css`
  font-family: 'Pretendard';
  font-size: 2.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.8rem;
  letter-spacing: -0.189rem;
`,
r_27_38: css`
font-family: 'Pretendard';
font-size: 2.7rem;
font-style: normal;
font-weight: 400;
line-height: 3.8rem;
letter-spacing: -0.243rem;
`,
b_24: css`
font-family: 'Pretendard';
font-size: 2.4rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`,
r_24: css`
font-family: 'Pretendard';
font-size: 2.4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`,
r_24_60: css`
font-family: 'Pretendard';
font-size: 2.4rem;
font-style: normal;
font-weight: 400;
line-height: 6rem;
`,
r_24_50: css`
font-family: 'Pretendard';
font-size: 2.4rem;
font-style: normal;
font-weight: 400;
line-height: 5rem;
`,
b_20: css`
font-family: 'Pretendard';
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`,
r_20: css`
font-family: 'Pretendard';
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`,
r_20_44_5: css`
font-family: 'Pretendard';
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: 4.4rem;
letter-spacing: 0.1rem;
`,
b_12: css`
font-family: 'Pretendard';
font-size: 1.2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`,
b_10: css`
font-family: 'Pretendard';
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`,
};

const theme = { mixin, colors, fonts };

export default theme;
