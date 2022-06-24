import { Link, useSearchParams } from "umi";
import { Button } from "antd";
import { useLocation } from "umi";

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const a = searchParams.get("a");
  const b = searchParams.get("b");
  const location = useLocation();
  console.log("location", location);
  return (
    <div>
      Index Page
      <p>
        <Link to="/user">Go to user page</Link>
      </p>
      <p>
        Search Params --- a: {a}; b: {b}
      </p>
      <p>State c:{location.state?.c}</p>
      <Button
        onClick={() => {
          setSearchParams({ a: 123, b: 456 });
        }}
      >
        Change SearchParams
      </Button>
    </div>
  );
};
