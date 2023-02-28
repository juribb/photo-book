import { useState } from "react";
//import {TossCert} from 'https://cdn.toss.im/cert/v1';

const JoinPage = () => {

  // const tossCert = TossCert();
  // tossCert.preparePopup();

  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

    const onSubmitHandler = () => {
      console.log(id, nickName);
        if(id.trim() === "") {
          alert("아이디를 입력해주세요.");
          return false;
        }

        if(userName.trim() === "") {
          alert("이름를 입력해주세요.");
          return false;
        }

        if(nickName.trim() === "") {
          alert("닉네임을 입력해주세요.");
          return false;
        }

        if(password.trim() === "") {
          alert("비밀번호를 입력해주세요.");
          return false;
        }

        console.log(id, password);
    }

 return (
    <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div>
            <h2 className="mt-6 mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              회원가입
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()} method="POST">
            <div className="rounded-md shadow-sm">
            <div className="mb-5">
                <label htmlFor="userId" className="sr-only">
                아이디
                </label>
                <input
                  id="userId"
                  name="userId"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.currentTarget.value)}
                  required
                  className="relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="아이디"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="userName" className="sr-only">
                이름
                </label>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.currentTarget.value)}
                  required
                  className="relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="이름"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="nickName" className="sr-only">
                닉네임
                </label>
                <input
                  id="nickName"
                  name="nickName"
                  type="text"
                  value={nickName}
                  onChange={(e) => setNickName(e.currentTarget.value)}
                  required
                  className="relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="닉네임"
                />
            </div>


            <div className="mb-5">
                <label htmlFor="userId" className="sr-only">
                휴대폰 번호 
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                  required
                  className="relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="휴대폰번호"
                />
                <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded">
                    본인인증
                </button> 
            </div>  

              <div className="mb-5">
                <label htmlFor="password" className="sr-only">
                비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="비밀번호"
                />
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.currentTarget.value)}
                  required
                  className="relative block w-full appearance-none rounded-md mt-2 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="비밀번호확인"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => onSubmitHandler()}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
 )
}

export default JoinPage;