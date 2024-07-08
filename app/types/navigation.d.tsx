export type RootStackParamsList = {
  replace(arg0: string, arg1?: any): void;
  navigate(arg0: String, arg1?: any): void;
  goBack(): void;
  reset: (arg0: { index: number; routes: any[] }) => void;
  push: (name: string, params: object) => void;
  pop: () => void;
  popToTop: () => void;
  Home: String | undefined;
  Splash: String | undefined;
  BottomTabs: String | undefined;
  ProductDetail: String | undefined;
  setOptions: any;
};
