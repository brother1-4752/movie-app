import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSetRecoilState } from "recoil";
import { sidebarState } from "../atoms";

interface IKeyword {
  keyword: string;
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  box-shadow: 0 0.5px 5px 0.2px ${(props) => props.theme.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderItem = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    margin-left: 10px;
  }
`;

const MenuBtn = styled.div`
  cursor: pointer;

  svg {
    margin-left: 5px;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
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

export default function Header() {
  const { register, handleSubmit, setValue } = useForm<IKeyword>();
  const setSidebar = useSetRecoilState(sidebarState);

  const onValid = ({ keyword }: IKeyword) => {
    console.log(keyword);
    setValue("keyword", "");
  };

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <HeaderWrapper>
      <HeaderItem>
        <MenuBtn onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </MenuBtn>
        <span>Movie App 🎥</span>
      </HeaderItem>
      <SearchForm onSubmit={handleSubmit(onValid)}>
        <SearchInput
          {...register("keyword")}
          placeholder="키워드를 입력하세요..."
        />
        <SearchBtn>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchBtn>
      </SearchForm>
      <div style={{ width: "100px" }}></div>
    </HeaderWrapper>
  );
}
