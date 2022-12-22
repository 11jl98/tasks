import Bucket from "../../components/Buckets";
import { BucketsInTasksProvider } from "../../context/BucketsInTasksContext";
import { TasksProvider } from "../../context/TasksContext";
import ModalTask from "../../components/Tasks/ModalTask";
function Home() {
  return (
    <BucketsInTasksProvider>
      <TasksProvider>
        <Bucket />
        <ModalTask />
      </TasksProvider>
    </BucketsInTasksProvider>
  );
}

export default Home;
