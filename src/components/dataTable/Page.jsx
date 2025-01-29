import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Page.css";

export default function Footer() {
  return (
    <footer className="pagination-footer">
      <Stack>
        <Pagination count={10} shape="rounded" />
      </Stack>
    </footer>
  );
}
