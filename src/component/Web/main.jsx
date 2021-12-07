import { useEffect, useState } from "react";
import CreateNewClient from "./CreateNewClient";
import DashBoard from "./DashBoard";

import Spinner from "./childComponent/Spinner.jsx";
import ChatArea from "./ChatArea";

const Main = () => {
  const [userInformation, setUserInformation] = useState({
    isLoggedin: null,
    Information: null,
  });
  useEffect(() => {
    console.log("uin");
    const localStorage = window.localStorage;
    const flag = localStorage.getItem("isAccessToken");
    if (flag) {
      const userInfo = {
        baseUrl: window.localStorage.getItem("base_url"),
        accessToken: window.localStorage.getItem("access_token"),
        userId: window.localStorage.getItem("user_id"),
        deviceId: window.localStorage.getItem("device_id"),
      };
      setUserInformation((prevState) => ({
        ...prevState,
        Information: {
          ...prevState.Information,
          ...userInfo,
        },
        isLoggedin: true,
      }));
    } else {
			setUserInformation((prevState) => ({
				...prevState,
				isLoggedin: false,
			}));
		}
  }, []);
  const loggedUserInfo = (status, userInfo) => {
    console.log(status, userInfo);
    console.log({ ...userInfo });
    setUserInformation((prevState) => ({
      ...prevState,
      isLoggedin: status,
      Information: {
        ...prevState.Information,
        ...userInfo,
      },
    }));
  };
  return (
    <>
			{(userInformation.isLoggedin === null) ? <Spinner /> :
				( (userInformation.isLoggedin === true) ?
					<DashBoard userInformation={userInformation.Information} /> :
					<CreateNewClient userData={loggedUserInfo} />
				)
			}
    </>
  );
};
export default Main;
/**
 *
			{(userInformation.isLoggedin === null) ? <Spinner /> :
				( (userInformation.isLoggedin === true) ?
					<DashBoard userInformation={userInformation.Information} /> :
					<CreateNewClient userData={loggedUserInfo} />
				)
			}

      {userInformation.isLoggedin === true ? (
        <DashBoard userInformation={userInformation.Information} />
      ) : (
        <CreateNewClient userData={loggedUserInfo} />
      )}
 *
 *
 * */
