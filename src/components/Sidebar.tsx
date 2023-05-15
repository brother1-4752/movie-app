import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFire,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../atoms";
import { styled } from "styled-components";

const SidebarWrapper = styled.section`
  width: 65px;
  height: 100%;
  position: fixed;
  top: 52px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5px 5px 0.2px ${(props) => props.theme.textColor};

  a {
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 5px;
    padding-bottom: 5px;
    font-size: 12px;
  }

  a > svg:hover {
    box-shadow: none;
    border-radius: 0;
  }
`;

export default function Sidebar() {
  const isSidebar = useRecoilValue(sidebarState);
  return (
    <>
      {isSidebar ? (
        <SidebarWrapper>
          <a>
            <FontAwesomeIcon icon={faHouse} />홈
          </a>
          <a>
            <FontAwesomeIcon icon={faFire} />
            인기
          </a>
          <a>
            <FontAwesomeIcon icon={faArrowTrendUp} />
            트렌드
          </a>
        </SidebarWrapper>
      ) : (
        ""
      )}
    </>
  );
}
