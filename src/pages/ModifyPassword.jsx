import React, {useState} from 'react';
import  { useNavigate } from 'react-router-dom';
import {apiClient} from "../api/client";

const ModifyPassword = () => {
  const[ prePassword, setPrePassword] = useState('');
  const[ newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

 const handleModifyPasswordSubmit = async (e) => {
   e.preventDefault();

   const passwordData = {
     prePassword,
     newPassword,
   };

   try {
     const response = await apiClient.patch('/api/v1/users/password', passwordData, {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `${localStorage.getItem('Authorization')}`,
       },
     });
     alert("비밀번호 변경완료 재로그인 해주세요.");
     navigate('/');
     localStorage.removeItem('Authorization');
   } catch (error) {
     if (error.response) {
       console.error(`Error! HTTP Status: ${error.response.status}, Message: ${error.response.data.message}`);
       alert(error.response.data.message);
     } else if (error.request) {
       // 요청이 서버에 도달했지만, 응답을 받지 못한 경우
       console.error('No response was received', error.request);
     } else {
       // 요청을 생성하는 중에 에러가 발생한 경우
       console.error('Error', error.message);
     }
   }
 };

 return (
   <form onSubmit={handleModifyPasswordSubmit}>
     <label style={{ color: "white" }}>
       현재 비밀번호:
       <input type="text" value={prePassword} onChange={e => setPrePassword(e.target.value)} />
     </label>
     <br />
     <br />
     <p style={{color: "white"}}>새로운 비밀번호를 영어 소문자 및 대문자, 숫자, 특수문자를 사용하여 8자 이상 15자 이하로 입력해주세요. </p>
     <label style={{ color: "white" }}>
       새로운 비밀번호:
       <textarea value={newPassword} onChange={e => setNewPassword(e.target.value)} />
     </label>
     <br /><br />
     <button type="submit">Submit</button>
   </form>
 )

}

export default ModifyPassword;