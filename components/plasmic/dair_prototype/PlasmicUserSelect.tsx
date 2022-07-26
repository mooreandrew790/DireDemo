// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qncHCyztskarL7v1AeUkze
// Component: 4xoHljOryBv
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
import sty from "./PlasmicUserSelect.module.css"; // plasmic-import: 4xoHljOryBv/css

import ChevronDownsvgIcon from "./icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: ZO9epW7qYsP/icon
import ChevronUpsvgIcon from "./icons/PlasmicIcon__ChevronUpsvg"; // plasmic-import: ITSwDsKltI1/icon

export type PlasmicUserSelect__VariantMembers = {
  isOpen: "isOpen";
  isDisabled: "isDisabled";
  color:
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear";
  showPlaceholder: "showPlaceholder";
};

export type PlasmicUserSelect__VariantsArgs = {
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  color?: SingleChoiceArg<
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
  >;
  showPlaceholder?: SingleBooleanChoiceArg<"showPlaceholder">;
};

type VariantPropType = keyof PlasmicUserSelect__VariantsArgs;
export const PlasmicUserSelect__VariantProps = new Array<VariantPropType>(
  "isOpen",
  "isDisabled",
  "color",
  "showPlaceholder"
);

export type PlasmicUserSelect__ArgsType = {
  selectedContent?: React.ReactNode;
  placeholder?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUserSelect__ArgsType;
export const PlasmicUserSelect__ArgProps = new Array<ArgPropType>(
  "selectedContent",
  "placeholder"
);

export type PlasmicUserSelect__OverridesType = {
  root?: p.Flex<"button">;
  contentContainer?: p.Flex<"div">;
  dropdownIcon?: p.Flex<"svg">;
};

export interface DefaultUserSelectProps {
  selectedContent?: React.ReactNode;
  placeholder?: React.ReactNode;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  color?: SingleChoiceArg<
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
  >;
  showPlaceholder?: SingleBooleanChoiceArg<"showPlaceholder">;
  className?: string;
}

function PlasmicUserSelect__RenderFunc(props: {
  variants: PlasmicUserSelect__VariantsArgs;
  args: PlasmicUserSelect__ArgsType;
  overrides: PlasmicUserSelect__OverridesType;

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

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
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
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_clear]: hasVariant(variants, "color", "clear"),
          [sty.rootcolor_softBlue]: hasVariant(variants, "color", "softBlue"),
          [sty.rootcolor_softCyan]: hasVariant(variants, "color", "softCyan"),
          [sty.rootcolor_softGray]: hasVariant(variants, "color", "softGray"),
          [sty.rootcolor_softGreen]: hasVariant(variants, "color", "softGreen"),
          [sty.rootcolor_softOrange]: hasVariant(
            variants,
            "color",
            "softOrange"
          ),
          [sty.rootcolor_softPink]: hasVariant(variants, "color", "softPink"),
          [sty.rootcolor_softPurple]: hasVariant(
            variants,
            "color",
            "softPurple"
          ),
          [sty.rootcolor_softRed]: hasVariant(variants, "color", "softRed"),
          [sty.rootcolor_softYellow]: hasVariant(
            variants,
            "color",
            "softYellow"
          ),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.rootisOpen]: hasVariant(variants, "isOpen", "isOpen")
        }
      )}
      disabled={
        hasVariant(variants, "isDisabled", "isDisabled") ? true : undefined
      }
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer)}
      >
        {(
          hasVariant(variants, "showPlaceholder", "showPlaceholder")
            ? false
            : true
        )
          ? p.renderPlasmicSlot({
              defaultContents: true ? (
                <div className={classNames(projectcss.all, sty.freeBox__lpFfP)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__t1CGc)}
                    displayHeight={"32px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"32px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/dair_prototype/images/avatarsvg.svg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eE8C9
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <span
                          className={classNames(
                            projectcss.all,
                            projectcss.span,
                            projectcss.__wab_text,
                            projectcss.plasmic_default__inline,
                            sty.span__lFhp6
                          )}
                        >
                          {"ArmanNijum"}
                        </span>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
              ) : null,
              value: args.selectedContent,
              className: classNames(sty.slotTargetSelectedContent, {
                [sty.slotTargetSelectedContentcolor_softBlue]: hasVariant(
                  variants,
                  "color",
                  "softBlue"
                ),
                [sty.slotTargetSelectedContentcolor_softCyan]: hasVariant(
                  variants,
                  "color",
                  "softCyan"
                ),
                [sty.slotTargetSelectedContentcolor_softGreen]: hasVariant(
                  variants,
                  "color",
                  "softGreen"
                ),
                [sty.slotTargetSelectedContentcolor_softOrange]: hasVariant(
                  variants,
                  "color",
                  "softOrange"
                ),
                [sty.slotTargetSelectedContentcolor_softPink]: hasVariant(
                  variants,
                  "color",
                  "softPink"
                ),
                [sty.slotTargetSelectedContentcolor_softPurple]: hasVariant(
                  variants,
                  "color",
                  "softPurple"
                ),
                [sty.slotTargetSelectedContentcolor_softRed]: hasVariant(
                  variants,
                  "color",
                  "softRed"
                ),
                [sty.slotTargetSelectedContentcolor_softYellow]: hasVariant(
                  variants,
                  "color",
                  "softYellow"
                ),
                [sty.slotTargetSelectedContentshowPlaceholder]: hasVariant(
                  variants,
                  "showPlaceholder",
                  "showPlaceholder"
                )
              })
            })
          : null}

        {(
          hasVariant(variants, "showPlaceholder", "showPlaceholder")
            ? true
            : false
        )
          ? p.renderPlasmicSlot({
              defaultContents: "Select…",
              value: args.placeholder,
              className: classNames(sty.slotTargetPlaceholder, {
                [sty.slotTargetPlaceholdercolor_softBlue_showPlaceholder]:
                  hasVariant(variants, "showPlaceholder", "showPlaceholder") &&
                  hasVariant(variants, "color", "softBlue"),
                [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                  variants,
                  "showPlaceholder",
                  "showPlaceholder"
                ),
                [sty.slotTargetPlaceholdershowPlaceholder_color_softCyan]:
                  hasVariant(variants, "showPlaceholder", "showPlaceholder") &&
                  hasVariant(variants, "color", "softCyan"),
                [sty.slotTargetPlaceholdershowPlaceholder_color_softGreen]:
                  hasVariant(variants, "showPlaceholder", "showPlaceholder") &&
                  hasVariant(variants, "color", "softGreen"),
                [sty.slotTargetPlaceholdershowPlaceholder_color_softOrange]:
                  hasVariant(variants, "showPlaceholder", "showPlaceholder") &&
                  hasVariant(variants, "color", "softOrange"),
                [sty.slotTargetPlaceholdershowPlaceholder_color_softPink]:
                  hasVariant(variants, "showPlaceholder", "showPlaceholder") &&
                  hasVariant(variants, "color", "softPink"),
                [sty.slotTargetPlaceholdershowPlaceholder_color_softPurple]:
                  hasVariant(variants, "color", "softPurple") &&
                  hasVariant(variants, "showPlaceholder", "showPlaceholder"),
                [sty.slotTargetPlaceholdershowPlaceholder_color_softRed]:
                  hasVariant(variants, "showPlaceholder", "showPlaceholder") &&
                  hasVariant(variants, "color", "softRed"),
                [sty.slotTargetPlaceholdershowPlaceholder_color_softYellow]:
                  hasVariant(variants, "showPlaceholder", "showPlaceholder") &&
                  hasVariant(variants, "color", "softYellow")
              })
            })
          : null}
      </div>

      <p.PlasmicIcon
        data-plasmic-name={"dropdownIcon"}
        data-plasmic-override={overrides.dropdownIcon}
        PlasmicIconType={
          hasVariant(variants, "isOpen", "isOpen")
            ? ChevronUpsvgIcon
            : ChevronDownsvgIcon
        }
        className={classNames(projectcss.all, sty.dropdownIcon, {
          [sty.dropdownIconcolor_softBlue]: hasVariant(
            variants,
            "color",
            "softBlue"
          ),
          [sty.dropdownIconcolor_softCyan]: hasVariant(
            variants,
            "color",
            "softCyan"
          ),
          [sty.dropdownIconcolor_softGreen]: hasVariant(
            variants,
            "color",
            "softGreen"
          ),
          [sty.dropdownIconcolor_softOrange]: hasVariant(
            variants,
            "color",
            "softOrange"
          ),
          [sty.dropdownIconcolor_softPink]: hasVariant(
            variants,
            "color",
            "softPink"
          ),
          [sty.dropdownIconcolor_softPurple]: hasVariant(
            variants,
            "color",
            "softPurple"
          ),
          [sty.dropdownIconcolor_softRed]: hasVariant(
            variants,
            "color",
            "softRed"
          ),
          [sty.dropdownIconcolor_softYellow]: hasVariant(
            variants,
            "color",
            "softYellow"
          ),
          [sty.dropdownIconisOpen]: hasVariant(variants, "isOpen", "isOpen")
        })}
        role={"img"}
      />
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "contentContainer", "dropdownIcon"],
  contentContainer: ["contentContainer"],
  dropdownIcon: ["dropdownIcon"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  contentContainer: "div";
  dropdownIcon: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUserSelect__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUserSelect__VariantsArgs;
    args?: PlasmicUserSelect__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUserSelect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUserSelect__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUserSelect__ArgProps,
          internalVariantPropNames: PlasmicUserSelect__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicUserSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserSelect";
  } else {
    func.displayName = `PlasmicUserSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicUserSelect = Object.assign(
  // Top-level PlasmicUserSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),

    // Metadata about props expected for PlasmicUserSelect
    internalVariantProps: PlasmicUserSelect__VariantProps,
    internalArgProps: PlasmicUserSelect__ArgProps
  }
);

export default PlasmicUserSelect;
/* prettier-ignore-end */