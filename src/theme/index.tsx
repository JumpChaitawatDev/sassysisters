import { createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

export default theme;
