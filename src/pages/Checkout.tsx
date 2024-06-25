import React from 'react'

type Props = {}

export default function Checkout({}: Props) {
    return (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              {/* <DeliveryAddress /> */}
            </div>
            <div>
              {/* <PriceDetails /> */}
            </div>
          </div>
        </div>
      );
}