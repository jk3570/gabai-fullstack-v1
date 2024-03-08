function AdminSignIn() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <form action="">
            <div className="flex flex-col items-center justify-center">
              <input
                type="text"
                placeholder="Username"
                className="w-[25rem] border-2 border-black rounded-xl p-2"
              />
              <span className="py-2"></span>
              <input
                type="password"
                placeholder="Password"
                className="w-[25rem] border-2 border-black rounded-xl p-2"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminSignIn;
