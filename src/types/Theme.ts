type Theme = {
  roundness: number;
  animation: {
    scale: number;
  };
};

type FontSize =
  | 'largeTitle'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'body'
  | 'small';

export type {Theme, FontSize};
