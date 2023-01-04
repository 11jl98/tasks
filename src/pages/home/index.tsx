import Bucket from "../../components/Buckets";
import { BucketsInTasksProvider } from "../../context/BucketsInTasksContext";
import { TasksProvider } from "../../context/TasksContext";
import { UserProvider } from "../../context/UserContext";
import ModalTask from "../../components/Tasks/ModalTask";
import Nav from "../../components/Navbar";
import Login from "../../components/Login";

function Home() {
  return (
    <>
      <UserProvider>
        <Nav />
        <Login />
        <BucketsInTasksProvider>
          <TasksProvider>
            <Bucket />
            <ModalTask />
          </TasksProvider>
        </BucketsInTasksProvider>
      </UserProvider>
    </>
  );
}

export default Home;
