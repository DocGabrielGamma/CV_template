import renderPanel from "./renderPanel";
import styles from "./styles";
import { withStyles } from '@material-ui/core/styles';

export default withStyles(styles, {withTheme: true})(renderPanel);