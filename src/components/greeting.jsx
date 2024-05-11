import { useEffect, useState } from "react";
import { useAuth } from "../context/context";

const Greeting = () => {
  const { user } = useAuth();
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getGreeting = () => {
      if (currentTime >= 5 && currentTime < 12) {
        setGreeting("Good morning");
      } else if (currentTime >= 12 && currentTime < 18) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    };

    getGreeting();
  }, [currentTime]);

  if (user) {
    return (
      <div className="row">
        <div>
          <h5>
            {greeting} {user.name} {"🙂"}
          </h5>
        </div>
      </div>
    );
  }
  return null;
};

export default Greeting;
