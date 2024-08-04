import React from 'react';
import Button from 'react-bootstrap/Button';
const ProductDetail = ({ productID }) => {
  return (
    <div className="container">
      <form action="/user/chitiet" method="post" encType="multipart/form-data">
        <div className="row mt-3">
          <div className="col-5">
          <img  className="card-img-top" alt="Example" />
          </div>
          <div className="col-7">
            <h3></h3>
            <hr />
            <div className="row">
              <h5>CHI TIẾT SẢN PHẨM</h5>
              <h2>Tên sản phẩm</h2>
              <div className="col-3">
                <p>Danh mục</p>
                <p>Nhà sản xuất</p>
                <p>Nhà cung cấp</p>
              </div>
              <div className="col-9">
            
                <p>Cao đẳng FTP Cần Thơ</p>
                <p>Gear Poly</p>
              </div>
            </div>
            <h2 className="text-danger">
              <strong></strong>
            </h2>
            <div className="row">
              <div className="col-6">
                <form  method="post">
                  <div className="text-center">
                    <input type="hidden" name="id"  />
                  </div>
                </form>
              </div>
            </div>
            <Button type="submit" className="btn btn-primary mt-5">
                      Thêm vào giỏ hàng
                    </Button>
          </div>
        </div>
      </form>
      <hr />
      <h4>MÔ TẢ SẢN PHẨM</h4>
      <p> 'Màn hình Xiaomi A27 Ela5345EU 27 inch là sự kết hợp hoàn hảo giữa thiết kế tinh tế và hiệu suất đỉnh cao. Với kích thước rộng 27 inch, độ phân giải cao và màu sắc chân thực, thiết bị màn hình Xiaomi này mang lại trải nghiệm xem hình ảnh và video tuyệt vời. Đây chính là sự lựa chọn lý tưởng cho những người đòi hỏi chất lượng và thẩm mỹ trong trải nghiệm hiển thị.</p>
      <hr />
    </div>
  );
};

export default ProductDetail;
