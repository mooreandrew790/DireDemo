// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qncHCyztskarL7v1AeUkze
// Component: Do3GkWIka2
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_dair_prototype.module.css"; // plasmic-import: qncHCyztskarL7v1AeUkze/projectcss
import sty from "./PlasmicAlarmIconButton.module.css"; // plasmic-import: Do3GkWIka2/css

import NotificationsvgIcon from "./icons/PlasmicIcon__Notificationsvg"; // plasmic-import: uUXGZZiFKe/icon

export type PlasmicAlarmIconButton__VariantMembers = {};

export type PlasmicAlarmIconButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicAlarmIconButton__VariantsArgs;
export const PlasmicAlarmIconButton__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAlarmIconButton__ArgsType = {};
type ArgPropType = keyof PlasmicAlarmIconButton__ArgsType;
export const PlasmicAlarmIconButton__ArgProps = new Array<ArgPropType>();

export type PlasmicAlarmIconButton__OverridesType = {
  root?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
};

export interface DefaultAlarmIconButtonProps {
  className?: string;
}

function PlasmicAlarmIconButton__RenderFunc(props: {
  variants: PlasmicAlarmIconButton__VariantsArgs;
  args: PlasmicAlarmIconButton__ArgsType;
  overrides: PlasmicAlarmIconButton__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    true ? (
      <button
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.button,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          sty.root
        )}
      >
        <NotificationsvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </button>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAlarmIconButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAlarmIconButton__VariantsArgs;
    args?: PlasmicAlarmIconButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAlarmIconButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAlarmIconButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAlarmIconButton__ArgProps,
          internalVariantPropNames: PlasmicAlarmIconButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAlarmIconButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAlarmIconButton";
  } else {
    func.displayName = `PlasmicAlarmIconButton.${nodeName}`;
  }
  return func;
}

export const PlasmicAlarmIconButton = Object.assign(
  // Top-level PlasmicAlarmIconButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicAlarmIconButton
    internalVariantProps: PlasmicAlarmIconButton__VariantProps,
    internalArgProps: PlasmicAlarmIconButton__ArgProps
  }
);

export default PlasmicAlarmIconButton;
/* prettier-ignore-end */
