import React, { useContext, createContext } from 'react';

const UserContext = createContext();

function DisplayUser() {
  const user = useContext(UserContext);  // Context থেকে ডেটা অ্যাক্সেস
  return <h1>Welcome, {user}!</h1>;
}

function Review() {
  return (
    <UserContext.Provider value="John Doe">
      <DisplayUser />
    </UserContext.Provider>
  );
}

export default Review;
