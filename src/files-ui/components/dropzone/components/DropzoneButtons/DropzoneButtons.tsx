import * as React from "react";
import { addClassName, Localization } from "../../../../core";
import { MaterialButton } from "../../../material-button";
import {
  DropzoneActionButton,
  DropzoneActions,
} from "../dropzone/DropzoneProps";
import "./DropzoneButtons.scss";

interface DropzoneButtonsProps extends DropzoneActions {
  localization?: Localization;
  onAbort?: Function;
  onDelete?: Function;
  onUpload?: Function;
  onClean?: Function;
  top?: boolean;
  disabled?: boolean;
}

const DropzoneButtons: React.FC<DropzoneButtonsProps> = (
  props: DropzoneButtonsProps
) => {
  const {
    cleanButton,
    abortButton,
    className: containerClassName,
    style: containerStyle,
    deleteButton,
    uploadButton,
    //localization,
    onAbort,
    onClean,
    onDelete,
    onUpload,
    top,
    disabled,
  } = props;

  const actionButtonsList: DropzoneActionButton[] = [
    cleanButton
      ? { ...cleanButton, label: "Clean", onClick: onClean }
      : undefined,
    deleteButton
      ? { ...deleteButton, label: "Delete", onClick: onDelete }
      : undefined,
    uploadButton
      ? { ...uploadButton, label: "Upload", onClick: onUpload }
      : undefined,
    abortButton
      ? { ...abortButton, label: "Abort", onClick: onAbort }
      : undefined,
  ].filter(
    (ab: DropzoneActionButton | undefined) => ab !== undefined
  ) as DropzoneActionButton[];

  const tailClassName:string = `${top ? " top" : " bottom"}`;
  const finalClassName = addClassName(
    "files-ui-buttons-container" + tailClassName,
    containerClassName
  );

  return (
    <div className={finalClassName} style={containerStyle}>
      {actionButtonsList.map(
        (actionButtonProps: DropzoneActionButton, index: number) => {
          const { children, label, resetStyles, className, style, onClick } =
            actionButtonProps;
          return (
            <MaterialButton
              key={index}
              className={className}
              style={style}
              resetStyles={resetStyles}
              onClick={() => onClick?.()}
              disabled={disabled}
            >
              {children || label}
            </MaterialButton>
          );
        }
      )}
    </div>
  );
};
export default DropzoneButtons;
