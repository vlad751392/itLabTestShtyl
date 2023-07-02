export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export const BUTTON_STYLES: { [key in ButtonVariants]: string } = {
  [ButtonVariants.PRIMARY]:
    'relative transition-all rounded-lg bg-blue-primary border-4 border-transparent px-14 py-4 2xl:py-5 2xl:px-16 text-white bg-primary hover:border-transparen before:transition-all before:h-full before:w-full before:top-0 before:left-0 before:bg-blue-dark primary-button font-bold active:border-4 active:border-white',
  [ButtonVariants.SECONDARY]:
    'relative transition-all  rounded-lg bg-gray-primary border-4 border-transparent sm:w-52 2xl:py-4 py-3 w-4/5 text-blue-primary hover:text-white active:text-white bg-primary hover:border-transparen before:transition-all before:h-full before:w-full before:top-0 before:left-0 before:bg-gray-dark secondary-button font-bold active:border-4 active:border-white'
};
