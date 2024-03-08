const Dashboard = () => {
  return (
    <>
      <div className="w-screen h-[67vh] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">This is a restricted page</h1>
        <br />
        <p>You need to sign-in to access this page</p>
      </div>
    </>
  );
};

export default Dashboard;
