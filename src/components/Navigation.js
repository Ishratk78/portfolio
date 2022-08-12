import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        About Me
      </Link>
      <Link underline="hover" color="inherit" href="/portfolio">
        Projects
      </Link>
      <Link underline="hover" color="inherit" href="/resume">
        Resume
      </Link>
      <Link underline="hover" color="inherit" href="/contact">
        Contact
      </Link>
    </Breadcrumbs>
  );
};

export default Navigation;
