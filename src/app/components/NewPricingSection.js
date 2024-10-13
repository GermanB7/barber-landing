// src/app/components/NewPricingSection.js
export default function NewPricingSection() {
  return (
    <section className="py-16 bg-beige-100 text-black">
      <div className="container mx-auto text-left">
        <h2 className="text-4xl font-bold mb-8">Our Prices</h2>
        <ul className="text-lg">
          <li className="flex justify-between items-center border-b border-gray-400 py-4">
            <span className="text-xl font-semibold">Haircut</span>
            <span className="text-xl">$40</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-400 py-4">
            <span className="text-xl font-semibold">Shave</span>
            <span className="text-xl">$35</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-400 py-4">
            <span className="text-xl font-semibold">Haircut + Shave</span>
            <span className="text-xl">$70</span>
          </li>
          <li className="flex justify-between items-center py-4">
            <span className="text-xl font-semibold">Beard Trim</span>
            <span className="text-xl">$15</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
