import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkState } from "../atoms";

interface IKeyword {
  keyword: string;
}

const Header = styled.header`
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;

  div {
    margin-left: 10px;
  }
`;

const SearchInput = styled.input`
  width: 300px;
  height: 20px;
  text-indent: 10px;
  border-radius: 8px;
  border: 0.1px solid black;
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

export default function Home() {
  const { register, handleSubmit, setValue } = useForm<IKeyword>();
  const isDark = useRecoilValue(isDarkState);

  const onValid = ({ keyword }: IKeyword) => {
    console.log(keyword);
    setValue("keyword", "");
  };

  return (
    <Header>
      <HeaderItem>
        <div>{isDark ? "⚪" : "⚫"}</div>
        <span>Movie App 🎥</span>
      </HeaderItem>
      <form onSubmit={handleSubmit(onValid)}>
        <SearchInput
          {...register("keyword")}
          placeholder="키워드를 입력하세요..."
        />
        <SearchBtn>🔎</SearchBtn>
      </form>
      <div></div>
    </Header>
  );
}
