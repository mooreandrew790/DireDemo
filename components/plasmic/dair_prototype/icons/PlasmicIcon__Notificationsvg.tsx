// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotificationsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotificationsvgIcon(props: NotificationsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.713 11.567l-.572-.486.572.486zm.733-1.702l.745.085-.745-.085zm11.108 0l.746-.084-.746.084zm.733 1.702l.572-.486-.572.486zm-1.02-4.239l-.745.085.745-.085zm-10.534 0l-.745-.084.745.084zm10.409 6.089H4.858v1.5h10.284v-1.5zm-.62-6.004l.287 2.537 1.49-.169-.287-2.537-1.49.169zM5.19 9.95l.287-2.537-1.49-.17L3.7 9.782l1.49.169zm-.907 2.102A3.93 3.93 0 005.19 9.95L3.7 9.78a2.436 2.436 0 01-.56 1.3l1.143.971zM14.81 9.95c.088.776.403 1.51.907 2.102l1.143-.97a2.431 2.431 0 01-.56-1.301l-1.49.169zm-9.95 3.467c-.626 0-1.05-.805-.575-1.365l-1.143-.97c-1.246 1.467-.273 3.835 1.717 3.835v-1.5zm10.283 1.5c1.99 0 2.963-2.368 1.717-3.836l-1.144.971c.476.56.052 1.365-.573 1.365v1.5zm.87-7.673C15.66 4.13 13.09 1.75 10 1.75v1.5c2.292 0 4.25 1.772 4.522 4.163l1.49-.17zm-10.534.169C5.75 5.022 7.708 3.25 10 3.25v-1.5c-3.09 0-5.66 2.38-6.012 5.494l1.49.169zm7.723 8.683a.75.75 0 10-1.404-.526l1.404.526zm-5-.526a.75.75 0 00-1.404.526l1.404-.526zm3.596 0c-.25.667-.944 1.18-1.798 1.18v1.5c1.455 0 2.724-.878 3.202-2.154l-1.404-.526zM10 16.75c-.854 0-1.548-.513-1.798-1.18l-1.404.526C7.276 17.372 8.545 18.25 10 18.25v-1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NotificationsvgIcon;
/* prettier-ignore-end */
