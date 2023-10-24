export interface CardButton {
  title: string;
  action?: (() => void) | null;
}
