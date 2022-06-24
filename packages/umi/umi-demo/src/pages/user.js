import { useNavigate, history } from "umi";
import { Button } from "antd";
import "antd/es/button/style";
import { createSearchParams } from "../.umi/exports";

/**
 * history 抽取一个 任何地方都可以使用。
 */
export default function User() {
  const navigate = useNavigate();
  return (
    <div>
      User Page
      <Button onClick={() => history.back()}>go back</Button>
      <Button onClick={() => history.push("/")}>go to index by history!</Button>
      <Button onClick={() => navigate(-1)}>go back by navigate!</Button>
      <Button onClick={() => navigate("/")}>go to index by navigate!</Button>
      <Button
        onClick={() => {
          navigate(`/?${createSearchParams({ a: 1, b: 2 })}`);
        }}
      >
        Go to index has SearchParams!
      </Button>
      <Button
        onClick={() => {
          navigate("/", { state: { c: 987 } });
        }}
      >
        Go to index has state!
      </Button>
    </div>
  );
}
