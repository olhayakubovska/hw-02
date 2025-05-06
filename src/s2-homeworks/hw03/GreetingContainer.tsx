import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[]; // need to fix any
  addUserCallback: (name: string) => void; // need to fix any
};

export const pureAddUser = (
  name: string,
  setError: (error: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void
) => {
  const trimmerName = name.trim();

  if (trimmerName) {
    addUserCallback(trimmerName);
    setName("");
  } else {
    setError("Ошибка! Введите имя!");
  }
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
};

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
  // если имя пустое - показать ошибку
  if (!name || name.trim() === "") {
    setError("Ошибка! Введите имя!")
  }
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void
) => {
  // если нажата кнопка Enter - добавить
  if (e.key === "Enter") {
    addUser();
    // e.currentTarget.blur(); // убираем фокус с инпута

  }
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(""); // need to fix any
  const [error, setError] = useState<string>(""); // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // need to fix any
    // setName("some name"); // need to fix÷\
    setName(e.currentTarget.value);

    error && setError("");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: any) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length; // need to fix
  // //   const lastUserName = users[users.length - 1].name; // need to fix
  // const lastUserName = "lalalal"; // need to fix
  // const totalUsers =1; // need to fix
  // const a = users[totalUsers]; // need to fix
  // console.log(users[totalUsers - 1], "users");

  // const lastUserName = users[totalUsers - 1] ; // need to fix
  let lastUserName = "";
  if (totalUsers !== 0) {
    lastUserName = users[totalUsers - 1].name; // need to fix
  }

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;

// import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
// import Greeting from './Greeting'
// import { UserType } from './HW3'

// type GreetingContainerPropsType = {
//     users: any // need to fix any
//     addUserCallback: any // need to fix any
// }

// export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
//     // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
// }

// export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
// }

// export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
// }

// // более простой и понятный для новичков
// // function GreetingContainer(props: GreetingPropsType) {

// // более современный и удобный для про :)
// const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
//     users,
//     addUserCallback,
// }) => {
//     // деструктуризация пропсов
//     const [name, setName] = useState<any>('') // need to fix any
//     const [error, setError] = useState<any>('') // need to fix any

//     const setNameCallback = (e: any) => { // need to fix any
//         setName('some name') // need to fix

//         error && setError('')
//     }
//     const addUser = () => {
//         pureAddUser(name, setError, setName, addUserCallback)
//     }

//     const onBlur = () => {
//         pureOnBlur(name, setError)
//     }

//     const onEnter = (e: any) => {
//         pureOnEnter(e, addUser)
//     }

//     const totalUsers = 0 // need to fix
//     const lastUserName = 'some name' // need to fix

//     return (
//         <Greeting
//             name={name}
//             setNameCallback={setNameCallback}
//             addUser={addUser}
//             onBlur={onBlur}
//             onEnter={onEnter}
//             error={error}
//             totalUsers={totalUsers}
//             lastUserName={lastUserName}
//         />
//     )
// }

// export default GreetingContainer
