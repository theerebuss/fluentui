import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { CardPreviewState } from './CardPreview.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    '> img': {
      width: '100%',
      position: 'absolute',
      top: '10px',
    },
  },
  logo: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    width: '50px',
    height: '50px',
    background: 'cyan',
  },
});

/**
 * Apply styling to the CardPreview slots based on the state
 */
export const useCardPreviewStyles = (state: CardPreviewState): CardPreviewState => {
  const styles = useStyles();
  state.className = mergeClasses(styles.root, state.className);

  if (state.logo) {
    state.logo.className = mergeClasses(styles.logo, state.logo.className);
  }

  return state;
};
