const ConatctUs = () => (
  <>
    <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
    <form className="p-4 m-4 flex flex-col w-[350px] gap-2">
      <input
        name="name"
        placeholder="Name"
        className="border-2 border-gray-300 rounded p-2"
      />
      <input
        name="description"
        placeholder="Description"
        className="border-2 border-gray-300 rounded p-2"
      />
      <button className="border-gray-600 border-2 p-2 w-[150px]">Submit</button>
    </form>
  </>
);

export default ConatctUs;
