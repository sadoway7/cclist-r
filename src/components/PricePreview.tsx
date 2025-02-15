import React from 'react';

interface PricePreviewProps {
  selectedProduct: string;
  selectedWeight: string;
  quantity: number;
  getPrice: (productName: string, weightSize: string, qty: number) => number;
  children?: React.ReactNode; // Add children prop
}

const PricePreview: React.FC<PricePreviewProps> = ({
  selectedProduct,
  selectedWeight,
  quantity,
  getPrice,
  children, // Receive children
}) => {
  const price = getPrice(selectedProduct, selectedWeight, quantity);

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded bg-bg-light">
      <p className="text-lg font-bold text-gray-700">Preview:</p>
      {selectedProduct ? (
        <table className="w-full text-gray-800">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-2">{selectedProduct}</td>
              <td className="p-2">{selectedWeight}</td>
              <td className="p-2 text-center">{quantity}</td>
              <td className="p-2 text-right">
                {price > 0 ? `$${(price / quantity).toFixed(2)}` : '-'}
              </td>
              <td className="p-2 text-right">
                {price > 0 ? `$${price.toFixed(2)}` : '-'}
              </td>
              <td className="w-8"></td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="text-gray-700">No product selected.</p>
      )}
      <div className="flex justify-end mt-2">
        {children} {/* Render children here */}
      </div>
    </div>
  );
};

export default PricePreview;
