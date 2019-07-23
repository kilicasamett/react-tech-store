import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">ürünler</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">ürün adı</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">fiyatı</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">mİktarı</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">sİl</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">toplam</p>
        </div>
        {/* end of single column */}
      </div>
    </div>
  );
}
