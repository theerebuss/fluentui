import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { CardState } from './Card.types';

/**
 * Styles for the root slot
 */
//TODO: Selected
//TODO: Disabled
const useStyles = makeStyles({
  root: theme => ({
    display: 'flex',
    flexDirection: 'column',

    boxShadow: theme.alias.shadow.shadow4,
    color: theme.alias.color.neutral.neutralForeground1,
    backgroundColor: theme.alias.color.neutral.neutralBackground1,

    // Size: medium
    padding: '12px',
    gap: '12px',
    borderRadius: theme.global.borderRadius.medium,
    minHeight: '48px',
    minWidth: '48px',
  }),

  //#region Appearances

  interactive: theme => ({
    boxShadow: theme.alias.shadow.shadow4,
    color: theme.alias.color.neutral.neutralForeground1,
    backgroundColor: theme.alias.color.neutral.neutralBackground1,

    ':hover': {
      boxShadow: theme.alias.shadow.shadow8,
      // color: theme.alias.color.neutral.neutralForeground1,
      backgroundColor: theme.alias.color.neutral.neutralBackground1Hover,
    },
  }),

  filledAlt: theme => ({
    boxShadow: theme.alias.shadow.shadow4,
    color: theme.alias.color.neutral.neutralForeground2,
    backgroundColor: theme.alias.color.neutral.neutralBackground2,
  }),

  filledAltInteractive: theme => ({
    boxShadow: theme.alias.shadow.shadow4,
    color: theme.alias.color.neutral.neutralForeground2,
    backgroundColor: theme.alias.color.neutral.neutralBackground2,

    ':hover': {
      boxShadow: theme.alias.shadow.shadow8,
      color: theme.alias.color.neutral.neutralForeground2Hover,
      backgroundColor: theme.alias.color.neutral.neutralBackground2Hover,
    },
  }),

  outline: theme => ({
    boxShadow: 'none',
    color: theme.alias.color.neutral.transparent,
    backgroundColor: theme.alias.color.neutral.transparentBackground,
  }),

  outlineInteractive: theme => ({
    boxShadow: 'none',
    color: theme.alias.color.neutral.transparent,
    backgroundColor: theme.alias.color.neutral.transparentBackground,

    ':hover': {
      boxShadow: theme.alias.shadow.shadow8,
      color: theme.alias.color.neutral.transparent,
      backgroundColor: theme.alias.color.neutral.transparentBackgroundHover,
    },
  }),

  subtle: theme => ({
    boxShadow: 'none',
    color: theme.alias.color.neutral.subtle,
    backgroundColor: theme.alias.color.neutral.subtleBackground,
  }),

  subtleInteractive: theme => ({
    boxShadow: 'none',
    color: theme.alias.color.neutral.subtle,
    backgroundColor: theme.alias.color.neutral.subtleBackground,

    ':hover': {
      boxShadow: theme.alias.shadow.shadow8,
      color: theme.alias.color.neutral.subtle,
      backgroundColor: theme.alias.color.neutral.subtleBackgroundHover,
    },
  }),

  //#endregion

  //#region - Size
  sizeSmallest: theme => ({
    flexDirection: 'row',
    padding: '4px 8px',
    gap: '8px',
    borderRadius: theme.global.borderRadius.small,
    minHeight: '24px',
    maxHeight: '44px',
    minWidth: '24px',
  }),

  sizeSmaller: theme => ({
    flexDirection: 'row',
    padding: '6px 8px',
    gap: '8px',
    borderRadius: theme.global.borderRadius.small,
    minHeight: '24px',
    maxHeight: '44px',
    minWidth: '24px',
  }),

  sizeSmall: theme => ({
    flexDirection: 'row',
    padding: '12px 8px',
    gap: '8px',
    borderRadius: theme.global.borderRadius.small,
    minHeight: '24px',
    maxHeight: '44px',
    minWidth: '24px',
  }),

  sizeLarge: theme => ({
    padding: '16px',
    gap: '16px',
    borderRadius: theme.global.borderRadius.xLarge,
  }),
  //#endregion

  //#region - Scale
  scaleAutoWidth: {
    width: 'fit-content',
  },
  scaleAutoHeight: {
    height: 'fit-content',
  },
  scaleAuto: {
    width: 'fit-content',
    height: 'fit-content',
  },
  scaleFluidWidth: {
    width: '100%',
  },
  scaleFluidHeight: {
    height: '100%',
  },
  scaleFluid: {
    width: '100%',
    height: '100%',
  },
  //#endregion

  // interactive: theme => ({
  //   ':hover': {
  //     boxShadow: theme.alias.shadow.shadow8,
  //     backgroundColor: theme.alias.color.neutral.neutralBackground1Hover,
  //     cursor: 'pointer',
  //   },
  //   ':active': {
  //     backgroundColor: theme.alias.color.neutral.neutralBackground1Pressed,
  //   },
  // }),

  // disabled: theme => ({
  //   boxShadow: theme.alias.shadow.shadow2,
  //   '& button': {
  //     cursor: 'not-allowed',
  //     background: theme.alias.color.neutral.neutralBackgroundDisabled,
  //     borderColor: theme.alias.color.neutral.neutralStrokeDisabled,
  //     color: theme.alias.color.neutral.neutralForegroundDisabled,
  //   },
  // }),
  // disabledInteractive: theme => ({
  //   cursor: 'not-allowed',
  //   boxShadow: theme.alias.shadow.shadow2,
  //   background: theme.alias.color.neutral.neutralBackgroundDisabled,
  //   borderColor: theme.alias.color.neutral.neutralStrokeDisabled,
  //   color: theme.alias.color.neutral.neutralForegroundDisabled,
  // }),
});

/**
 * Apply styling to the Card slots based on the state
 */
export const useCardStyles = (state: CardState): CardState => {
  const styles = useStyles();
  const isInteractive = state.onClick !== undefined;

  state.className = mergeClasses(
    styles.root,

    isInteractive && styles.interactive,
    state.appearance === 'filled-alternative' && (isInteractive ? styles.filledAltInteractive : styles.filledAlt),
    state.appearance === 'outline' && (isInteractive ? styles.outlineInteractive : styles.outline),
    state.appearance === 'subtle' && (isInteractive ? styles.subtleInteractive : styles.subtle),

    state.size === 'smallest' && styles.sizeSmallest,
    state.size === 'smaller' && styles.sizeSmaller,
    state.size === 'small' && styles.sizeSmall,
    state.size === 'large' && styles.sizeLarge,

    state.scale === 'auto-width' && styles.scaleAutoWidth,
    state.scale === 'auto-height' && styles.scaleAutoHeight,
    state.scale === 'auto' && styles.scaleAuto,
    state.scale === 'fluid-width' && styles.scaleFluidWidth,
    state.scale === 'fluid-height' && styles.scaleFluidHeight,
    state.scale === 'fluid' && styles.scaleFluid,

    // TODO: Disabled state might be more complex due to a11y
    // state.disabled && (state.onClick ? styles.disabledInteractive : styles.disabled),

    state.className,
  );

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
