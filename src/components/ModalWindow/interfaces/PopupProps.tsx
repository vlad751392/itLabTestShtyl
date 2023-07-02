import { ReactElement } from "react";

export interface PopupProps {
  children?: ReactElement;
  open?: boolean;
  onClose: () => void;
}
