const FundraiserCardNepal = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Help Disaster Relief for Nepal Landslide Victims
      </h1>
      {/* Image */}
      <div className="w-full">
        <img
          src="https://via.placeholder.com/600x300" // Replace with the actual landslide image URL
          alt="Landslide"
          className="rounded-lg w-full"
        />
      </div>
      {/* Organizer Info */}
      <div className="flex items-center my-4">
        <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center">
          <span className="text-gray-600 font-bold">K</span>
        </div>
        <div className="ml-3">
          <p className="text-gray-700 font-semibold">Kamal Thapa</p>
          <p className="text-gray-500 text-sm">
            is organizing this fundraiser to support Nepal Relief Foundation.
          </p>
        </div>
      </div>
      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        Hi, my name is Kamal Thapa. A recent landslide in Sindhupalchok district
        has displaced over 1,200 families, destroying homes and livelihoods. We
        are raising funds to provide essential supplies such as food, clothing,
        and temporary shelters to those affected. Every contribution will make a
        difference in helping the victims rebuild their lives. Please donate and
        support this cause!
      </p>
      {/* Donation Summary */}
      <div className="flex flex-col items-center w-full">
        <div className="w-full flex justify-between items-center mb-4">
          <p className="font-bold text-gray-800">₹50,000 raised</p>
          <p className="text-gray-500 text-sm">50% of ₹1,00,000 goal</p>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div className="bg-green-500 h-full" style={{ width: "50%" }}></div>
        </div>
        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600">
            Share
          </button>
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600">
            Donate now
          </button>
        </div>
      </div>
      {/* Donors List */}
      <div className="mt-6 w-full">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Donors</h2>
        <ul className="space-y-2">
          {[
            { name: "Suman Shrestha", amount: "₹20,000", time: "2 days ago" },
            { name: "Anita Rai", amount: "₹10,000", time: "3 days ago" },
            { name: "Rabin Gurung", amount: "₹5,000", time: "4 days ago" },
            { name: "Sunita Basnet", amount: "₹5,000", time: "5 days ago" },
            { name: "Krishna Pandey", amount: "₹10,000", time: "6 days ago" },
          ].map((donor, index) => (
            <li
              key={index}
              className="flex justify-between text-gray-600 text-sm"
            >
              <span>{donor.name}</span>
              <span>
                {donor.amount}{" "}
                <span className="text-gray-400">{donor.time}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FundraiserCardNepal;
