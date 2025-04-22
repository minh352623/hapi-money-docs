export const API_URL = "https://gateway-fortune-vault-dev.up.railway.app";

export const data = [
  {
    title: "API Lấy danh sách quà tặng từ kho quà URBox",
    description:
      "UrBox tuỳ chỉnh danh sách quà cho Client dưới dạng 1 giftset. Sử dụng API để lấy thông tin giftset. Dùng để khách hàng chọn, đổi quà.",
    note: `<b>Lưu ý:</b> Reponse của API GET danh sách quà tặng chỉ trả về tối đa 500 sản phẩm cho 1 request. Nếu bộ quà của đối tác lớn hơn 500 quà, vui lòng bổ sung thêm param "page_no" và "per_page" trong request.`,
    method: "GET",
    url: `${API_URL}/urbox/gift/lists`,
    parameter: [
      {
        name: "connectionKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do URBox cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "catId",
        type: "string",
        required: false,
        description:
          "Mã danh mục. Dùng khi cần lọc danh sách 1 danh mục nhất định",
        example: "157",
      },
      {
        name: "brandId",
        type: "string",
        required: false,
        description:
          "Mã thương hiệu. Dùng khi cần lọc danh sách 1 thương hiệu nhất định.",
        example: "Lấy từ response của API lấy danh sách thương hiệu ",
      },
      {
        name: "field",
        type: "string",
        required: false,
        description:
          "Sử dụng để lấy thêm thông tin chi tiết voucher trên danh sách",
        example: "content,note,office",
      },
      {
        name: "lang",
        type: "string",
        required: false,
        description: "Ngôn ngữ. Các giá trị có thể lấy: vi, en",
        example: "vi",
      },
      {
        name: "stock",
        type: "string",
        required: false,
        description:
          "Khi thêm tham số stock=1, UrBox sẽ trả về cả các quà tặng đã hết hàng kèm thêm tình trạng stock của quà, thể hiện trên trường “stock”.",
        example: "1",
      },
      {
        name: "title",
        type: "string",
        required: false,
        description:
          "Tên quà. Dùng trong trường hợp tìm kiếm quà tặng theo tên.",
        example: "1",
      },
      {
        name: "perPage",
        type: "int",
        required: false,
        description: "Số quà trả về trên 1 trang",
        example: "1",
      },
      {
        name: "pageNo",
        type: "int",
        required: false,
        description: "Số thứ tự của trang muốn lấy quà",
        example: "1",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/v1/api/urbox/gift/lists' \
--header 'Signature: MTc0NDk0MTU5NXwiYWJjMTIzInxmMkRzcmd5aWhNY0JxSnJaWmhJQ3JZU3c0QUdvTllxWkRFWmE4VWNoa0EvVjMwMm92bW5CUVlUdWs1aTFoVm1USGJna0lkTkt3WVpPYXRMcnRBT2RCdz09' \
--header 'Content-Type: application/json' \
--data '{
    "connectionKey":"abc123",
    "platform":"tbk",
    "perPage": 8,
    "pageNo" : 1,
    "catId": 118

}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "object",
        description: "Dữ liệu danh sách quà tặng đã tạo riêng cho Client",
        example: "",
      },
      {
        parameter: "data.items",
        type: "array",
        description: "Danh sách quà tặng",
        example: "",
      },
      {
        parameter: "items.id",
        type: "string",
        description:
          "Mã quà tặng. Đây là mã để xem chi tiết quà tặng & đơn quà.",
        example: "",
      },
      {
        parameter: "items.brand",
        type: "string",
        description: "Mã thương hiệu",
        example: "",
      },
      {
        parameter: "items.brand_id",
        type: "string",
        description: "Mã thương hiệu",
        example: "",
      },
      {
        parameter: "items.cat_id",
        type: "string",
        description: "Mã danh mục",
        example: "",
      },
      {
        parameter: "items.cat_title",
        type: "string",
        description: "Tên danh mục",
        example: "",
      },
      {
        parameter: "items.gift_id",
        type: "string",
        description: "Mã quà cha",
        example: "",
      },
      {
        parameter: "items.title",
        type: "string",
        description: "Tiêu đề quà con",
        example: "",
      },
      {
        parameter: "items.type",
        type: "string",
        description: "Loại quà tặng",
        example: `1: Voucher tiền mặt  
2: Giftset  
3: Combo  
4: Thẻ balance  
5: Thẻ điện thoại  
7: Thẻ điểm  
8: Topup điểm  
9: Vật lý  
10: Item (Sản phẩm cụ thể)  
11: Voucher khuyến mãi  
12: Bảo hiểm  
14: Lượt quay số  
15: Premium Service
16: Deal
19: Link quà UrCard`,
      },
      {
        parameter: "items.quantity",
        type: "string",
        description: "Số lượng quà bán ra",
        example: "",
      },
      {
        parameter: "items.view",
        type: "string",
        description: "Số lượt xem quà tặng",
        example: "",
      },
      {
        parameter: "items.usage_check",
        type: "boolean",
        description: "Check được trạng thái sử dụng quà hay không",
        example: `1: có thể kiểm tra tình trạng sử dụng
0: không biết được tình trạng sử dụng`,
      },
      {
        parameter: "items.stock",
        type: "integer",
        description: "Tình trạng tồn kho của quà tặng",
        example: `1: Số lượng trong kho > 0  
2: Số lượng trong kho = 0`,
      },
      {
        parameter: "...",
        type: "...",
        description: "...",
        example: "...",
      },
      {
        parameter: "items.office",
        type: "array",
        description: "Dữ liệu danh sách cửa hàng",
        example: "",
      },

      {
        parameter: "office.phone",
        type: "string",
        description: "Số điện thoại của hãng",
        example: "",
      },
      {
        parameter: "office.sort",
        type: "string",
        description: "Số thứ tự của hãng",
        example: "",
      },
      {
        parameter: "office.synuser",
        type: "string",
        description: "Chưa sử dụng",
        example: "",
      },
      {
        parameter: "office.latitude",
        type: "string",
        description: "Vĩ độ",
        example: "",
      },
      {
        parameter: "office.longitude",
        type: "string",
        description: "Kinh độ",
        example: "",
      },
      {
        parameter: "totalPage",
        type: "integer",
        description: "Tổng số trang",
        example: "",
      },
      {
        parameter: "totalResult",
        type: "string",
        description: "Tổng số kết quả",
        example: "",
      },
    ],
    exampleResponse: `{
    "code": 200,
    "data": {
        "items": [
            {
                "brand": "533",
                "brandImage": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/640/1667294100_6360e394b1fbc.png",
                "brandLogoLoyalty": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/160/1667294100_6360e394b1fbc.png",
                "brand_id": "533",
                "brand_name": "Highlands Coffee",
                "brand_online": "1",
                "cat_id": "118",
                "cat_title": "Café - Thức Uống",
                "code_display": "Barcode 128",
                "code_display_type": 2,
                "code_quantity": "9736",
                "end_promo": 0,
                "expire_duration": "60 ngày",
                "gift_id": "2391",
                "id": "4870",
                "image": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/640/1667294486_6360e516b456f.png",
                "images": {
                    "0": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/1667294486_6360e516b456f.png",
                    "160": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/160/1667294486_6360e516b456f.png",
                    "320": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/320/1667294486_6360e516b456f.png",
                    "640": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/640/1667294486_6360e516b456f.png",
                    "80": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/80/1667294486_6360e516b456f.png",
                    "square": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/square/1667294486_6360e516b456f.png"
                },
                "images_rectangle": {
                    "0": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/1667294486_6360e51884692.png",
                    "160": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/160/1667294486_6360e51884692.png",
                    "320": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/320/1667294486_6360e51884692.png",
                    "640": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/640/1667294486_6360e51884692.png",
                    "80": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/80/1667294486_6360e51884692.png",
                    "square": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/square/1667294486_6360e51884692.png"
                },
                "is_promo": 1,
                "is_unfix": "1",
                "parent_cat_id": "9",
                "point": "200000",
                "price": "200000",
                "price_promo": 0,
                "quantity": "9736",
                "start_promo": 0,
                "stock": 1,
                "title": "[UrBox Voucher] Highlands Coffee 200.000 đ",
                "type": "1",
                "usage_check": 1,
                "view": "1212"
            },
            {
                "brand": "533",
                "brandImage": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/640/1667294100_6360e394b1fbc.png",
                "brandLogoLoyalty": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/160/1667294100_6360e394b1fbc.png",
                "brand_id": "533",
                "brand_name": "Highlands Coffee",
                "brand_online": "1",
                "cat_id": "118",
                "cat_title": "Café - Thức Uống",
                "code_display": "Barcode 128",
                "code_display_type": 2,
                "code_quantity": "657",
                "end_promo": 0,
                "expire_duration": "60 ngày",
                "gift_id": "2391",
                "id": "4869",
                "image": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/640/1667294456_6360e4f90f2f8.png",
                "images": {
                    "0": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/1667294456_6360e4f90f2f8.png",
                    "160": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/160/1667294456_6360e4f90f2f8.png",
                    "320": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/320/1667294456_6360e4f90f2f8.png",
                    "640": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/640/1667294456_6360e4f90f2f8.png",
                    "80": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/80/1667294456_6360e4f90f2f8.png",
                    "square": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/square/1667294456_6360e4f90f2f8.png"
                },
                "images_rectangle": {
                    "0": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/1667294456_6360e4fa5ca88.png",
                    "160": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/160/1667294456_6360e4fa5ca88.png",
                    "320": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/320/1667294456_6360e4fa5ca88.png",
                    "640": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/640/1667294456_6360e4fa5ca88.png",
                    "80": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/80/1667294456_6360e4fa5ca88.png",
                    "square": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/square/1667294456_6360e4fa5ca88.png"
                },
                "is_promo": 1,
                "is_unfix": "1",
                "parent_cat_id": "9",
                "point": "100000",
                "price": "100000",
                "price_promo": 0,
                "quantity": "657",
                "start_promo": 0,
                "stock": 1,
                "title": "[UrBox Voucher] Highlands Coffee 100.000 đ",
                "type": "1",
                "usage_check": 1,
                "view": "2036"
            },
            {
                "brand": "392",
                "brandImage": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/03/09/640/1583722208_5e65aee089f67.png",
                "brandLogoLoyalty": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/03/09/160/1583722208_5e65aee089f67.png",
                "brand_id": "392",
                "brand_name": "Phúc Long",
                "brand_online": "1",
                "cat_id": "118",
                "cat_title": "Café - Thức Uống",
                "code_display": "Barcode, QRcode",
                "code_display_type": 5,
                "code_quantity": "9837",
                "end_promo": 0,
                "expire_duration": "Tối thiểu 30 ngày",
                "gift_id": "1501",
                "id": "3468",
                "image": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/640/1579494722_5e252d42ebb04.png",
                "images": {
                    "0": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/1579494722_5e252d42ebb04.png",
                    "160": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/160/1579494722_5e252d42ebb04.png",
                    "320": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/320/1579494722_5e252d42ebb04.png",
                    "640": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/640/1579494722_5e252d42ebb04.png",
                    "80": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/80/1579494722_5e252d42ebb04.png",
                    "square": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/square/1579494722_5e252d42ebb04.png"
                },
                "images_rectangle": {
                    "0": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/1619149591_608243171d2f7.png",
                    "160": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/160/1619149591_608243171d2f7.png",
                    "320": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/320/1619149591_608243171d2f7.png",
                    "640": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/640/1619149591_608243171d2f7.png",
                    "80": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/80/1619149591_608243171d2f7.png",
                    "square": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/square/1619149591_608243171d2f7.png"
                },
                "is_promo": 1,
                "is_unfix": "1",
                "parent_cat_id": "9",
                "point": "250000",
                "price": "250000",
                "price_promo": 0,
                "quantity": "9837",
                "start_promo": 0,
                "stock": 1,
                "title": "[UrBox Voucher] Phúc Long 250.000 đ",
                "type": "1",
                "usage_check": 1,
                "view": "130968"
            },
            {
                "brand": "392",
                "brandImage": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/03/09/640/1583722208_5e65aee089f67.png",
                "brandLogoLoyalty": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/03/09/160/1583722208_5e65aee089f67.png",
                "brand_id": "392",
                "brand_name": "Phúc Long",
                "brand_online": "1",
                "cat_id": "118",
                "cat_title": "Café - Thức Uống",
                "code_display": "Barcode, QRcode",
                "code_display_type": 5,
                "code_quantity": "9648",
                "end_promo": 0,
                "expire_duration": "Tối thiểu 30 ngày",
                "gift_id": "1501",
                "id": "3467",
                "image": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/640/1579494737_5e252d51596af.png",
                "images": {
                    "0": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/1579494737_5e252d51596af.png",
                    "160": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/160/1579494737_5e252d51596af.png",
                    "320": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/320/1579494737_5e252d51596af.png",
                    "640": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/640/1579494737_5e252d51596af.png",
                    "80": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/80/1579494737_5e252d51596af.png",
                    "square": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/01/20/square/1579494737_5e252d51596af.png"
                },
                "images_rectangle": {
                    "0": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/1619149600_608243206a186.png",
                    "160": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/160/1619149600_608243206a186.png",
                    "320": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/320/1619149600_608243206a186.png",
                    "640": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/640/1619149600_608243206a186.png",
                    "80": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/80/1619149600_608243206a186.png",
                    "square": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/23/square/1619149600_608243206a186.png"
                },
                "is_promo": 1,
                "is_unfix": "1",
                "parent_cat_id": "9",
                "point": "50000",
                "price": "50000",
                "price_promo": 0,
                "quantity": "9648",
                "start_promo": 0,
                "stock": 1,
                "title": "[UrBox Voucher] Phúc Long 50.000 đ",
                "type": "1",
                "usage_check": 1,
                "view": "142011"
            }
        ],
        "totalPage": 2,
        "totalResult": "12"
    },
    "success": true
}`,
  },
  {
    title: "API Lấy chi tiết 1 quà tặng",
    description: "Lấy chi tiết 1 quà tặng dựa trên mã quà tặng",
    note: "",
    method: "GET",
    url: `${API_URL}/urbox/gift/details`,
    parameter: [
      {
        name: "connectionKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do URBox cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "lang",
        type: "string",
        required: false,
        description: `Tiếng Việt mặc định, không cần truyền tham số.
Tiếng Anh: lang = en`,
        example: "vi",
      },
      {
        name: "id",
        type: "int",
        required: true,
        description: "Mã quà tặng",
        example: "123",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/v1/api/urbox/gift/details' \
--header 'Signature: MTc0NDk0MTU5NXwiYWJjMTIzInxmMkRzcmd5aWhNY0JxSnJaWmhJQ3JZU3c0QUdvTllxWkRFWmE4VWNoa0EvVjMwMm92bW5CUVlUdWs1aTFoVm1USGJna0lkTkt3WVpPYXRMcnRBT2RCdz09' \
--header 'Content-Type: application/json' \
--data '{
    "connectionKey":"abc123",
    "platform":"tbk",
    "id": 123,
    "lang": "vi"
}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "object",
        description: "Dữ liệu danh sách quà tặng đã tạo riêng cho Client",
        example: "",
      },
      {
        parameter: "data.id",
        type: "string",
        description:
          "Mã quà tặng. Sử dụng để gọi API tạo đơn quà tặng ở trường priceId.",
        example:
          "Nếu quà không có trong danh sách giftset → “Quà tặng không nằm trong chương trình",
      },
      {
        parameter: "data.brand",
        type: "string",
        description: "Tên thương hiệu",
        example: "",
      },
      //         data.cat_id
      // data.brand_id
      // data.code_display
      // data.parent_cat_id
      // data.gift_id
      // data.title
      // data.type
      // data.price
      // data.view
      // data.quantity
      // data.usage_check
      // data.image
      {
        parameter: "data.cat_id",
        type: "string",
        description: "Mã danh mục",
        example: "",
      },
      {
        parameter: "data.brand_id",
        type: "string",
        description: "Mã thương hiệu",
        example: "",
      },
      {
        parameter: "data.code_display",
        type: "string",
        description: "Hình thức hiển thị mã code",
        example: `code_display = QRcode
code_display = Barcode 128
code_display = Text
code_display = Vật lý
code_display = Barcode, QRcode (hai loại code hiển thị đồng thời)`,
      },
      {
        parameter: "data.parent_cat_id",
        type: "string",
        description: "Mã danh mục con",
        example: "",
      },
      {
        parameter: "data.gift_id",
        type: "string",
        description: "Mã quà tặng cha",
        example: "",
      },
      {
        parameter: "data.title",
        type: "string",
        description: "Tiêu đề quà tặng",
        example: "",
      },
      {
        parameter: "data.type",
        type: "string",
        description: "Loại quà tặng",
        example: `1: Voucher tiền mặt  
2: Giftset  
3: Combo  
4: Thẻ balance  
5: Thẻ điện thoại  
7: Thẻ điểm  
8: Topup điểm  
9: Vật lý  
10: Item (Sản phẩm cụ thể)  
11: Voucher khuyến mãi  
12: Bảo hiểm  
14: Lượt quay số  
15: Premium Service
16: Deal
19: Link quà UrCard`,
      },
      {
        parameter: "data.price",
        type: "string",
        description: "Giá quà tặng",
        example: "",
      },
      {
        parameter: "data.view",
        type: "string",
        description: "Số lượt xem quà tặng",
        example: "",
      },
      {
        parameter: "data.quantity",
        type: "string",
        description: "Số lượng code có thể mua",
        example: "",
      },
      {
        parameter: "...",
        type: "...",
        description: "...",
        example: "...",
      },
      {},
    ],
    exampleResponse: `{
    "success": true,
    "data": {
        "brand": "Phúc Long",
        "brandImage": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/03/09/160/1583722208_5e65aee089f67.png",
        "brand_id": "392",
        "brand_online": "1",
        "cat_id": "118",
        "code_display": "Barcode, QRcode",
        "code_display_type": 5,
        "content": "<p><span>Voucher được áp dụng tại hệ thống cửa hàng đồ uống Phúc Long. Quý khách vui lòng xem thông tin cửa hàng được áp dụng tại phần “Vị trí cửa hàng”.&nbsp;</span></p>\n<div><strong>Điều kiện sử dụng:&nbsp;</strong></div>\n<ul>\n<li>Voucher&nbsp;<strong>không</strong>&nbsp;áp dụng tại các cửa hàng: Tầng hầm B2-217 Phúc Long Takashimaya, 92, 94 Nam Kỳ Khởi Nghĩa, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh và Phúc Long tại Cảng Hàng không Quốc Tế sân bay Tân Sơn Nhất.</li>\n<li>Voucher áp dụng mua sắm trực tiếp tại hệ thống cửa hàng&nbsp;Phúc Long, không áp dụng mua hàng online;</li>\n<li>Voucher được sử dụng 01 lần, áp dụng nhiều voucher/hoá đơn;</li>\n<li>Voucher không có giá trị quy đổi thành tiền mặt, không được hoàn trả tiền thừa;&nbsp;</li>\n<li>Voucher không được áp dụng đồng thời cùng các chương trình khuyến mãi khác;&nbsp;</li>\n<li>Xem chi tiết điều kiện sử dụng tại mục \" Điều kiện sử dụng\"</li>\n</ul>\n<div><strong>Hướng dẫn sử dụng:</strong></div>\n<ul>\n<li>Bước 1: Khách hàng thực hiện \"Đổi điểm\" để lấy mã voucher</li>\n<li>Bước 2: Xem chi tiết mã voucher và điều kiện sử dụng tại \"Quà của tôi\"</li>\n<li>Bước 3: Khách hàng đến trực tiếp cửa hàng của hệ thống&nbsp;Phúc Long&nbsp;để sử dụng voucher.&nbsp;Vui lòng xuất trình đường link nhận quà có chứa mã voucher cho nhân viên tại quầy trước khi thanh toán để được áp dụng</li>\n<li>Sản phẩm/dịch vụ vượt quá giá trị của voucher, khách hàng vui lòng thanh toán bổ sung phần giá trị vượt quá.</li>\n</ul>\n<div><strong>Thông tin thương hiệu:</strong></div>\n<p>Ra đời năm 1968 tại cao nguyên chè danh tiếng Bảo Lộc (Lâm Đồng), Phúc Long kỳ vọng mang đến những sản phẩm trà và cà phê chất lượng cao, lưu giữ hương vị truyền thống Việt Nam kết hợp với phong cách thưởng thức hiện đại.</p>",
        "end_promo": 0,
        "expire_duration": "Tối thiểu 30 ngày",
        "gift_id": "1501",
        "id": "4623",
        "image": "",
        "images": [],
        "images_rectangle": {
            "0": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/28/1619601768_6089296832c7a.png",
            "160": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/28/160/1619601768_6089296832c7a.png",
            "320": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/28/320/1619601768_6089296832c7a.png",
            "640": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/28/640/1619601768_6089296832c7a.png",
            "80": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/28/80/1619601768_6089296832c7a.png",
            "square": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2021/04/28/square/1619601768_6089296832c7a.png"
        },
        "is_promo": 1,
        "is_unfix": "1",
        "justGetOrder": "1",
        "note": "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul><li>eGift được áp dụng tại hệ thống <b>Phúc Long</b>. Quý khách có thể xem thông tin cửa hàng áp dụng tại phần “Vị trí cửa hàng”.</li><li>Vui lòng xuất trình đường link nhận quà có chứa mã eGift cho nhân viên tại quầy trước khi thanh toán để được áp dụng eGift.</li><li>Có thể sử dụng nhiều mã eGift trên cùng 1 hoá đơn; eGift sẽ không được hoàn lại tiền thừa và không có giá trị quy đổi thành tiền mặt.</li><li><span style=\"font-weight: bolder;\">eGift được xuất ra sẽ không được đổi trả dưới mọi hình thức.</span></li><li>eGift <b>không</b> được áp dụng cùng các chương trình khuyến mãi khác, chương trình tích điểm thành viên và <b>thanh toán bằng ví điện tử</b>.</li><li>Khách hàng có trách nhiệm bảo mật thông tin eGift sau khi đặt mua. UrBox sẽ không chịu trách nhiệm hoàn trả các eGift bị mất hoặc ở trạng thái “Đã sử dụng” sau thời gian eGift được xuất ra với bất kì lý do gì.</li><li>UrBox không chịu trách nhiệm đối với chất lượng của sản phẩm hoặc dịch vụ được cung cấp cũng như đối với các tranh chấp về sau giữa khách hàng và <b>Phúc Long</b>.</li><li>UrBox có quyền sửa chữa hoặc thay đổi điều khoản và điều kiện mà không thông báo trước.</li><li><b>Hotline: 1900 299 232</b>, nếu có sự cố Quý khách vui lòng liên hệ Hotline Urbox để được hỗ trợ.</li></ul>\t\t\t\t\t\t\t\t",
        "office": [
            {
                "address": "95 Phan Xích Long ( Khu dân cư Rạch Miễu ), P.2, Q.Phú Nhuận, TP.HCM",
                "address_en": "",
                "brand_id": "392",
                "city_id": "29",
                "code": "2KIQ",
                "district_id": "9",
                "geo": null,
                "id": "169343",
                "isApply": "2",
                "latitude": "100.00000",
                "longitude": "1.00000",
                "number": "95",
                "phone": "",
                "title_city": "Hồ Chí Minh",
                "ward_id": "120"
            },
            {
                "address": "Tầng 1, Tòa nhà The Golden Palm, Lô đất Số 4.5, Số 21 Đường Lê Văn Lương, P.Nhân Chính, Q.Thanh Xuân, TP. Hà Nội",
                "address_en": "",
                "brand_id": "392",
                "city_id": "22",
                "code": "T159",
                "district_id": "52",
                "geo": null,
                "id": "167411",
                "isApply": "2",
                "latitude": "2.00000",
                "longitude": "10.00000",
                "number": "1",
                "phone": "",
                "title_city": "Hà Nội",
                "ward_id": "849"
            },
            {
                "address": "296 Đường Hòa Bình, P.Hiệp Tân, Q.Tân Phú, TP.HCM",
                "address_en": "",
                "brand_id": "392",
                "city_id": "29",
                "code": "VFXZ",
                "district_id": "23",
                "geo": null,
                "id": "167412",
                "isApply": "2",
                "latitude": "1.00000",
                "longitude": "10.00000",
                "number": "296",
                "phone": "",
                "title_city": "Hồ Chí Minh",
                "ward_id": "304"
            }
        ],
        "parent_cat_id": "9",
        "point": "10000",
        "price": "10000",
        "price_promo": 0,
        "quantity": "784",
        "start_promo": 0,
        "title": "[UrBox Voucher] Phúc Long 10.000 đ",
        "type": "1",
        "usage_check": 1,
        "valuex": "10000",
        "view": "173",
        "weight": "0"
    },
}`,
  },
  {
    title: "API Lấy danh sách danh mục",
    description: "Lấy danh sách danh mục quà tặng",
    note: "",
    method: "GET",
    url: `${API_URL}/urbox/gift/categories`,
    parameter: [
      {
        name: "connectionKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do URBox cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "lang",
        type: "string",
        required: false,
        description: `Tiếng Việt mặc định, không cần truyền tham số.
Tiếng Anh: lang = en`,
        example: "vi",
      },
      {
        name: "parentId",
        type: "int",
        required: false,
        description:
          "Mã danh mục cha. Nếu không truyền mặc định trả toàn bộ danh mục.",
        example: "8",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/v1/api/urbox/gift/categories' \
--header 'Signature: MTc0NDk0MTU5NXwiYWJjMTIzInxmMkRzcmd5aWhNY0JxSnJaWmhJQ3JZU3c0QUdvTllxWkRFWmE4VWNoa0EvVjMwMm92bW5CUVlUdWs1aTFoVm1USGJna0lkTkt3WVpPYXRMcnRBT2RCdz09' \
--header 'Content-Type: application/json' \
--data '{
    "connectionKey":"abc123",
    "platform":"tbk",
    "lang": "vi",
    "parentId": 8
}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "array object",
        description: "Danh sách danh mục",
        example: "",
      },
      {
        parameter: "data.id",
        type: "string",
        description: "Mã danh mục",
        example: "5",
      },
      {
        parameter: "data.images",
        type: "string",
        description: "Hình ảnh danh mục",
        example: "https://abc.png",
      },
      {
        parameter: "data.title",
        type: "string",
        description: "Tên danh mục",
        example: "Sức khoẻ - Làm đẹp",
      },
    ],
    exampleResponse: `{
    "success": true
    "data": [
        {
            "id": "5",
            "images": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2019/05/14/640/1557805297_5cda38f1a4242.png",
            "title": "Sức khoẻ - Làm đẹp"
        },
        {
            "id": "107",
            "images": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2019/05/14/640/1557805055_5cda37ff2e341.png",
            "title": "Tiện Ích"
        },
        {
            "id": "6",
            "images": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2019/05/14/640/1557805370_5cda393a61a8b.png",
            "title": "Giải Trí"
        },
        {
            "id": "4",
            "images": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2019/05/14/640/1557805626_5cda3a3b140c8.png",
            "title": "Mua Sắm"
        },
        {
            "id": "9",
            "images": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2019/05/14/640/1557805654_5cda3a566b918.png",
            "title": "Đồ Uống"
        },
        {
            "id": "8",
            "images": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2019/05/14/640/1557805671_5cda3a672f1d1.png",
            "title": "Đồ Ăn"
        }
    ],
}`,
  },
  {
    title: "API Lấy danh sách thương hiệu",
    description: "Lấy danh sách thương hiệu quà tặng",
    note: "",
    method: "GET",
    url: `${API_URL}/urbox/gift/brands`,
    parameter: [
      {
        name: "connectionKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do URBox cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "catId",
        type: "int",
        required: false,
        description: "Mã danh mục",
        example: "8",
      },
      {
        name: "perPage",
        type: "int",
        required: false,
        description: "Số thương hiệu muốn trả về trên 1 trang",
        example: "10",
      },
      {
        name: "pageNo",
        type: "int",
        required: false,
        description: "Số thứ tự của trang muốn lấy thương hiệu",
        example: "1",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/v1/api/urbox/gift/brands' \
--header 'Signature: MTc0NDk0MTU5NXwiYWJjMTIzInxmMkRzcmd5aWhNY0JxSnJaWmhJQ3JZU3c0QUdvTllxWkRFWmE4VWNoa0EvVjMwMm92bW5CUVlUdWs1aTFoVm1USGJna0lkTkt3WVpPYXRMcnRBT2RCdz09' \
--header 'Content-Type: application/json' \
--data '{
    "connectionKey":"abc123",
    "platform":"tbk",
    "catId": 8,
    "perPage": 10,
    "pageNo": 1
}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "array object",
        description: "Dữ liệu chi tiết quà tặng",
        example: "",
      },
      {
        parameter: "data.items",
        type: "array",
        description: "Danh sách thương hiệu",
        example: "",
      },
      {
        parameter: "items.id",
        type: "string",
        description: "Mã thương hiệu",
        example: "533",
      },
      {
        parameter: "items.images",
        type: "string",
        description: "Hình ảnh thương hiệu",
        example: "https://abc.png",
      },
      {
        parameter: "items.title",
        type: "string",
        description: "Tên danh mục",
        example: "Sức khoẻ - Làm đẹp",
      },
      {
        parameter: "...",
        type: "...",
        description: "...",
        example: "...",
      },
      {
        parameter: "brand_count",
        type: "int",
        description: "Số lượng thương hiệu có trong danh mục",
        example: "10",
      },
      {
        parameter: "textTitle",
        type: "string",
        description: `"hot"
"Tất cả thương hiệu"`,
        example: "",
      },
      {
        parameter: "totalPage",
        type: "int",
        description: "Số lượng trang",
        example: "10",
      },
    ],
    exampleResponse: `{
    "success": true
    "data": {
        "brand_count": "4",
        "items": [
            {
                "banner": "",
                "cat_id": "118",
                "cat_title": "Café - Thức Uống",
                "description": "THƯƠNG HIỆU BẮT NGUỒN TỪ CÀ PHÊ VIỆT NAM. Từ tình yêu với Việt Nam và niềm đam mê cà phê, năm 1999, thương hiệu Highlands Coffee ra đời với khát vọng nâng tầm di sản cà phê lâu đời của Việt Nam và lan rộng tinh thần tự hào, kết nối hài hoà giữa truyền thống với hiện đại. Đến nay, Highlands Coffee vẫn duy trì khâu phân loại cà phê bằng tay để chọn ra từng hạt cà phê chất lượng nhất, rang mới mỗi ngày và phục vụ quý khách với nụ cười rạng rỡ trên môi.",
                "gift_count": 3,
                "id": "533",
                "images": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2022/11/01/160/1667294100_6360e394b1fbc.png",
                "parent_cat_id": "9",
                "title": "Highlands Coffee"
            },
            {
                "banner": "",
                "cat_id": "118",
                "cat_title": "Café - Thức Uống",
                "description": "Ra đời năm 1968 tại cao nguyên chè danh tiếng Bảo Lộc (Lâm Đồng), Phúc Long kỳ vọng mang đến những sản phẩm trà và cà phê chất lượng cao, lưu giữ hương vị truyền thống Việt Nam kết hợp với phong cách thưởng thức hiện đại .",
                "gift_count": 5,
                "id": "392",
                "images": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/03/09/160/1583722208_5e65aee089f67.png",
                "parent_cat_id": "9",
                "title": "Phúc Long"
            },
            {
                "banner": "",
                "cat_id": "12",
                "cat_title": "Mua Sắm Online",
                "description": "",
                "gift_count": 1,
                "id": "157",
                "images": "",
                "parent_cat_id": "4",
                "title": "Tous Les Jours"
            },
            {
                "banner": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2019/06/01/640/1559364961_5cf2056156b46.png",
                "cat_id": "118",
                "cat_title": "Café - Thức Uống",
                "description": "The Coffee House có lẽ đã là chuỗi cửa hàng cà phê quá quen thuộc với giới trẻ.\r\nBắt đầu ra mắt vào năm 2014 nhưng với cái tên The coffee house và sự phát triển của thương hiệu là điều đáng mơ ước, đặc biệt trong ngành F&B. Ngôi nhà cà phê tự tin cho biết sẽ trở thành Starbucks thứ 2 ở Việt Nam, khi nhắc tới The coffee house là nhắc tới một thương hiệu cà phê Việt.",
                "gift_count": 4,
                "id": "1",
                "images": "https://632466.sgp1.digitaloceanspaces.com/_img_server/2020/05/15/160/1589518045_5ebe1eddbeabc.png",
                "parent_cat_id": "9",
                "title": "The Coffee House"
            }
        ],
        "textTitle": "Tất cả thương hiệu",
        "totalPage": 1
    },
}`,
  },
  {
    title: "API Tạo yêu cầu đổi quà đến UrBox - Quà eVoucher",
    description: "Tạo yêu cầu đổi quà đến UrBox - Quà eVoucher",
    note: "",
    method: "POST",
    url: `${API_URL}/urbox/gift/cartPayVoucher`,
    parameter: [
      {
        name: "connectionKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do URBox cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "siteUserId",
        type: "string",
        required: true,
        description:
          "Mã khách hàng do Client tự sinh, được gán với mỗi khách hàng đổi quà. UrBox sử dụng site_user_id để tra cứu Chăm sóc khách hàng, đồng thời kiểm tra fraud trong trường hợp có gian lận đơn hàng.",
        example: "",
      },
      {
        name: "ttPhone",
        type: "string",
        required: true,
        description:
          "Số điện thoại của khách hàng. Sử dụng khi Client yêu cầu UrBox gửi quà cho khách hàng.",
        example: "0909090909",
      },
      {
        name: "transactionId",
        type: "string",
        required: true,
        description:
          "Mã giao dịch do Client sinh. Sử dụng để tra cứu log đơn hàng & đối soát.",
        example: "",
      },
      {
        name: "isSendSms",
        type: "int",
        required: true,
        description:
          "Sử dụng trong trường hợp UrBox là người gửi SMS quà cho khách hàng",
        example: `Không gửi SMS: 0
Gửi SMS: 1`,
      },
      {
        name: "dataBuy",
        type: "array",
        required: true,
        description: "",
      },
      {
        name: "dataBuy.priceId",
        type: "string",
        required: true,
        description: "Mã qùa tặng",
      },
      {
        name: "dataBuy.quantity",
        type: "int",
        required: true,
        description: "Số lượng code có thể mua",
      },
      {
        name: "dataBuy.amount",
        type: "int",
        required: false,
        description:
          "Gía trị quà tặng. Dùng trong trường hợp quà tặng cho phép input giá trị thay vì dùng giá trị có sẵn.",
      },
      {
        name: "ttemail",
        type: "string",
        required: false,
        description:
          "Email của khách hàng. Sử dụng khi Client yêu cầu UrBox gửi quà cho khách hàng.",
      },
      {
        name: "ttfullname",
        type: "string",
        required: false,
        description:
          "Tên của khách hàng. Sử dụng khi Client yêu cầu UrBox gửi quà cho khách hàng.",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/v1/api/urbox/gift/cartPayVoucher' \
--header 'Signature: MTc0NDk0MTU5NXwiYWJjMTIzInxmMkRzcmd5aWhNY0JxSnJaWmhJQ3JZU3c0QUdvTllxWkRFWmE4VWNoa0EvVjMwMm92bW5CUVlUdWs1aTFoVm1USGJna0lkTkt3WVpPYXRMcnRBT2RCdz09' \
--header 'Content-Type: application/json' \
--data '{
    "connectionKey":"abc123",
    "platform":"tbk",
    "siteUserId": "1234567890",
    "ttPhone": "0909090909",
    "transactionId": "1234567890",
    "isSendSms": 1,
    "dataBuy": [
        {
            "priceId": "1234567890",
            "quantity": 1,
}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "array object",
        description: "Dữ liệu chi tiết quà tặng",
        example: "",
      },
      {
        parameter: "data.pay",
        type: "integer",
        description: "Trạng thái mua hàng. Mặc định là 1",
        example: `1: Chưa thanh toán
2: Đã thanh toán`,
      },
      {
        parameter: "data.transaction_id",
        type: "string",
        description:
          "Mã giao dịch do Client sinh. Dùng để đối soát với hệ thống của Client, kiểm tra đối chiếu kỹ thuật.",
        example: "",
      },
      {
        parameter: "data.campaign_code",
        type: "string",
        description: "Mã code chương trình đối tác do UrBox tạo",
        example: "https://abc.png",
      },
      {
        parameter: "data.linkCart",
        type: "string",
        description: "Link gom code trong Quà của tôi",
        example: "Không gom theo brand",
      },
      {
        parameter: "data.linkCombo",
        type: "string",
        description: "Link combo quà. Dùng trong trường hợp loại quà Combo",
        example: "",
      },
      {
        parameter: "data.cart",
        type: "json",
        description: "Dữ liệu quà tặng trả về.",
        example: "",
      },
      {
        parameter: "cart.id",
        type: "string",
        description: `Mã đơn hàng UrBox`,
        example: "",
      },
      {
        parameter: "cart.cartNo",
        type: "int",
        description: "Danh sách mã đơn quà chi tiết do UrBox sinh.",
        example: "",
      },
      {
        parameter: "cart.money_total",
        type: "integer",
        description: "Tổng giá trị quà tặng",
        example: "",
      },
      {
        parameter: "cart.link_gift",
        type: "string",
        description: "Link quà sử dụng",
        example:
          "URL: https://urbox.vn/nhan-qua/123456.html, Shorten URL: https://s.urbox.vn/1234567",
      },
      {
        parameter: "cart.code_link_gift",
        type: "array",
        description: "Thông tin chi tiết quà",
        example: "",
      },
      {
        parameter: "code_link_gift.cart_detail_id",
        type: "string",
        description: "Mã đơn hàn chi tiết UrBox",
        example: "",
      },
      {
        parameter: "code_link_gift.code",
        type: "string",
        description: "Code quà sử dụng",
        example: "",
      },
      {
        parameter: "code_link_gift.pin",
        type: "string",
        description:
          "Mã kích hoạt thẻ quà tặng UrBox hoặc Mã kích hoạt nạp dặm (trong trường hợp mua quà Topup dặm).",
        example: "Nếu pin có value, đối tác cần hiển thị kèm code",
      },
      {
        parameter: "code_link_gift.serial",
        type: "string",
        description: "Mã serial quà tặng",
        example: "Nếu serial có value, đối tác cần hiển thị kèm code",
      },
      {
        parameter: "code_link_gift.priceId",
        type: "string",
        description: "Mã quà tặng",
        example: "[priceId] không tồn tại → “Quà tặng không tồn tại.”",
      },
      {
        parameter: "code_link_gift.price",
        type: "integer",
        description: "Hình thức hiển thị mã code",
        example: "Nếu pin có value, đối tác cần hiển thị kèm code",
      },
      {
        parameter: "code_link_gift.code_display",
        type: "integer",
        description: "Hình thức hiển thị mã code",
        example: `code_display = QRcode
code_display = Barcode 128
code_display = Text
code_display = Vật lý
code_display = Barcode, QRcode (hai loại code hiển thị đồng thời)`,
      },
      {
        parameter: "code_link_gift.code_display_type",
        type: "integer",
        description: "Mã hình thức hiển thị mã code",
        example: `1: QRcode
2: Barcode
3: Vật lý
4: Text code
5: Barcode, QRcode (hai loại code hiển thị đồng thời)`,
      },
      {
        parameter: "code_link_gift.link",
        type: "integer",
        description: "URL quà tặng",
        example: ``,
      },
      {
        parameter: "code_link_gift.token",
        type: "string",
        description: "Token quà tặng",
        example: ``,
      },
      {
        parameter: "code_link_gift.code_image",
        type: "string",
        description: "URL hình ảnh mã code",
        example: `Đề xuất đối tác lấy hình ảnh code của UrBox để hiển thị`,
      },
      {
        parameter: "code_link_gift.expired",
        type: "string",
        description: "Hạn sử dụng",
        example: ``,
      },
      {
        parameter: "code_link_gift.valid_time",
        type: "integer",
        description: "Thời gian bắt đầu hiệu lực của code quà",
        example: ``,
      },
    ],
    exampleResponse: `{
    "success": true,
    "data": {
        "pay": 2,
        "transaction_id": "00000000160test67891",
        "cart_created": "1681271943",
        "linkCart": "https://sand.urbox.dev/cart/667282347dad64cea9226639f336830a.html?cart_no=199305",
        "linkCombo": "",
        "linkShippingInfo": "",
        "cart": {
            "id": "199305",
            "cartNo": "199305",
            "money_total": "50000",
            "money_ship": "0",
            "link_gift": [
                "https://sand.urbox.dev/nhan-qua/3655c208fb2c1468b4368a2e89e8efcf.html"
            ],
            "code_link_gift": [
                {
                    "cart_detail_id": "393790",
                    "code_display": "Barcode, QRcode",
                    "code_display_type": 5,
                    "link": "https://sand.urbox.dev/nhan-qua/3655c208fb2c1468b4368a2e89e8efcf.html",
                    "code": "UB931542726",
                    "card_id": 0,
                    "pin": "",
                    "serial": "4053627",
                    "priceId": "89",
                    "gift_id": "39",
                    "token": "3655c208fb2c1468b4368a2e89e8efcf",
                    "expired": "11/06/2023",
                    "expired_time": 1686502799,
                    "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB931542726",
                    "estimateDelivery": "",
                    "ttemail": "",
                    "ttphone": "0979999067",
                    "receive_code": "3655c208fb2c1468b4368a2e89e8efcf",
                    "city_id": 0,
                    "district_id": 0,
                    "ward_id": 0,
                    "delivery_note": "",
                    "ttaddress": "",
                    "deliveryCode": 1,
                    "type": 1,
                    "urcard_id": 0,
                    "price": 50000
                }
            ]
        }
    }
}`,
  },
  {
    title:
      "API Tạo yêu cầu đổi quà tới UrBox - Quà vật lý - Cách 2: Đối tác gửi thông tin giao nhận cho UrBox",
    description: `Đối tác thu thập thông tin địa chỉ giao nhận của khách hàng, sau đó gửi trong request đổi quà`,
    note: `
    <b>Quy trình đổi quà vật lý:</b>
    <ul>
    <li>Bước 1: UrBox truyền thông tin kho quà cho đối tác. Bước này tương tự như quy trình đổi qùa eVoucher</li>
    <li>Bước 2: Khách hàng của Đối tác yêu cầu đổi quà và điền thông tin giao nhận quà. Đối tác submit đơn quà và truyền địa chỉ giao nhận cho UrBox.
        <ul>
            <li>- Yêu cầu giao tiếp server - server & whitelist IP.</li>
            <li>- Yêu cầu cần có thông tin site_user_id, transaction_id để phục vụ tra log & Chăm sóc KH.</li>
        </ul>
    </li>
    <li>Bước 3: UrBox tạo đơn hàng và ghi nhận thông tin giao hàng, thực hiện gọi điện xác nhận với khách hàng và giao hàng.</li>
</ul>

`,
    listAddress: `
<b>Danh sách ID địa chỉ giao hàng: https://docs.google.com/spreadsheets/d/12igQQadaj8htobG90_ShBEtvdiWvYHBP/edit?gid=2023355786#gid=2023355786</b>
    `,
    method: "POST",
    url: `${API_URL}/urbox/gift/cartPhysicalGift`,
    parameter: [
      {
        name: "connectionKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do URBox cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "siteUserId",
        type: "string",
        required: true,
        description:
          "Mã khách hàng do Client tự sinh, được gán với mỗi khách hàng đổi quà. UrBox sử dụng site_user_id để tra cứu Chăm sóc khách hàng, đồng thời kiểm tra fraud trong trường hợp có gian lận đơn hàng.",
        example: "",
      },
      {
        name: "ttPhone",
        type: "string",
        required: true,
        description:
          "Số điện thoại của khách hàng. Sử dụng khi Client yêu cầu UrBox gửi quà cho khách hàng.",
        example: "0909090909",
      },
      {
        name: "transactionId",
        type: "string",
        required: true,
        description:
          "Mã giao dịch do Client sinh. Sử dụng để tra cứu log đơn hàng & đối soát.",
        example: "",
      },
      {
        name: "isSendSms",
        type: "int",
        required: true,
        description:
          "Sử dụng trong trường hợp UrBox là người gửi SMS quà cho khách hàng",
        example: `Không gửi SMS: 0
Gửi SMS: 1`,
      },
      {
        name: "dataBuy",
        type: "array",
        required: true,
        description: "",
      },
      {
        name: "dataBuy.priceId",
        type: "string",
        required: true,
        description: "Mã qùa tặng",
      },
      {
        name: "dataBuy.quantity",
        type: "int",
        required: true,
        description: "Số lượng code có thể mua",
      },
      {
        name: "dataBuy.amount",
        type: "int",
        required: false,
        description:
          "Gía trị quà tặng. Dùng trong trường hợp quà tặng cho phép input giá trị thay vì dùng giá trị có sẵn.",
      },
      {
        name: "ttemail",
        type: "string",
        required: false,
        description:
          "Email của khách hàng. Sử dụng khi Client yêu cầu UrBox gửi quà cho khách hàng.",
      },
      {
        name: "ttfullname",
        type: "string",
        required: true,
        description:
          "Tên của khách hàng. Sử dụng khi Client yêu cầu UrBox gửi quà cho khách hàng.",
      },
      {
        name: "cityId",
        type: "int",
        required: true,
        description: "Mã tỉnh thành (xem chi tiết bảng mã tỉnh thành bên trên)",
      },
      {
        name: "districtId",
        type: "int",
        required: true,
        description: "Mã quận huyện (xem chi tiết bảng mã tỉnh thành bên trên)",
      },
      {
        name: "wardId",
        type: "int",
        required: true,
        description: "Mã phường xã (xem chi tiết bảng mã tỉnh thành bên trên)",
      },
      {
        name: "ttAddress",
        type: "int",
        required: true,
        description: "Địa chỉ cụ thể (số nhà, tên đường)",
      },
      {
        name: "deliveryNote",
        type: "int",
        required: false,
        description: "Ghi chú giao hàng. Tối đa 150 kí tự",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/v1/api/urbox/gift/cartPayVoucher' \
--header 'Signature: MTc0NDk0MTU5NXwiYWJjMTIzInxmMkRzcmd5aWhNY0JxSnJaWmhJQ3JZU3c0QUdvTllxWkRFWmE4VWNoa0EvVjMwMm92bW5CUVlUdWs1aTFoVm1USGJna0lkTkt3WVpPYXRMcnRBT2RCdz09' \
--header 'Content-Type: application/json' \
--data '{
    "connectionKey":"abc123",
    "platform":"tbk",
    "siteUserId": "1234567890",
    "ttPhone": "0909090909",
    "transactionId": "1234567890",
    "isSendSms": 1,
    "ttemail": "test@test.com",
    "ttfullname": "Nguyen Van A",
    "cityId": 22,
    "districtId": 25,
    "wardId": 329,
    "ttAddress": "số 11",
    "deliveryNote": "",
    "dataBuy": [
        {
            "priceId": "1234567890",
            "quantity": 1,
}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "array object",
        description: "Dữ liệu chi tiết quà tặng",
        example: "",
      },
      {
        parameter: "data.pay",
        type: "integer",
        description: "Trạng thái mua hàng. Mặc định là 1",
        example: `1: Chưa thanh toán
2: Đã thanh toán`,
      },
      {
        parameter: "data.transaction_id",
        type: "string",
        description:
          "Mã giao dịch do Client sinh. Dùng để đối soát với hệ thống của Client, kiểm tra đối chiếu kỹ thuật.",
        example: "",
      },
      {
        parameter: "data.campaign_code",
        type: "string",
        description: "Mã code chương trình đối tác do UrBox tạo",
        example: "https://abc.png",
      },
      {
        parameter: "data.linkCart",
        type: "string",
        description: "Link gom code trong Quà của tôi",
        example: "Không gom theo brand",
      },
      {
        parameter: "data.linkShippingInfo",
        type: "string",
        description:
          "Link nhập thông tin địa chỉ giao nhận hàng. Đối tác hiển thị link này cho người dùng nhập thông tin giao hàng",
        example: "",
      },
      {
        parameter: "data.cart",
        type: "json",
        description: "Dữ liệu quà tặng trả về.",
        example: "",
      },
      {
        parameter: "cart.id",
        type: "string",
        description: `Mã đơn hàng UrBox`,
        example: "",
      },
      {
        parameter: "cart.cartNo",
        type: "int",
        description: "Danh sách mã đơn quà chi tiết do UrBox sinh.",
        example: "",
      },
      {
        parameter: "cart.money_total",
        type: "integer",
        description: "Tổng giá trị quà tặng",
        example: "",
      },
      {
        parameter: "cart.money_ship",
        type: "integer",
        description: "Phí giao hàng",
        example: "",
      },
      {
        parameter: "cart.code_link_gift",
        type: "array",
        description: "Thông tin chi tiết quà",
        example: "",
      },
      {
        parameter: "code_link_gift.code",
        type: "string",
        description: "Code quà sử dụng",
        example: "",
      },
      {
        parameter: "code_link_gift.pin",
        type: "string",
        description:
          "Mã kích hoạt thẻ quà tặng UrBox hoặc Mã kích hoạt nạp dặm (trong trường hợp mua quà Topup dặm).",
        example: "Nếu pin có value, đối tác cần hiển thị kèm code",
      },
      {
        parameter: "code_link_gift.serial",
        type: "string",
        description: "Mã serial quà tặng",
        example: "Nếu serial có value, đối tác cần hiển thị kèm code",
      },
      {
        parameter: "code_link_gift.priceId",
        type: "string",
        description: "Mã quà tặng",
        example: "[priceId] không tồn tại → “Quà tặng không tồn tại.”",
      },
      {
        parameter: "code_link_gift.price",
        type: "integer",
        description: "Hình thức hiển thị mã code",
        example: "Nếu pin có value, đối tác cần hiển thị kèm code",
      },
      {
        parameter: "code_link_gift.code_display",
        type: "integer",
        description: "Hình thức hiển thị mã code",
        example: `code_display = QRcode
code_display = Barcode 128
code_display = Text
code_display = Vật lý
code_display = Barcode, QRcode (hai loại code hiển thị đồng thời)`,
      },
      {
        parameter: "code_link_gift.code_display_type",
        type: "integer",
        description: "Mã hình thức hiển thị mã code",
        example: `1: QRcode
2: Barcode
3: Vật lý
4: Text code
5: Barcode, QRcode (hai loại code hiển thị đồng thời)`,
      },
      {
        parameter: "code_link_gift.link",
        type: "integer",
        description: "URL quà tặng",
        example: ``,
      },
      {
        parameter: "code_link_gift.token",
        type: "string",
        description: "Token quà tặng",
        example: ``,
      },
      {
        parameter: "code_link_gift.code_image",
        type: "string",
        description: "URL hình ảnh mã code",
        example: `Đề xuất đối tác lấy hình ảnh code của UrBox để hiển thị`,
      },
      {
        parameter: "code_link_gift.expired",
        type: "string",
        description: "Hạn sử dụng",
        example: ``,
      },
      {
        parameter: "code_link_gift.estimateDelivery",
        type: "string",
        description: "Thông tin dự kiến giao hàng",
        example: `Dự kiến giao hàng từ 3 - 5 ngày làm việc`,
      },
      {
        parameter: "code_link_gift.ttemail",
        type: "string",
        description: "Địa chỉ email của khách hàng",
        example: ``,
      },
      {
        parameter: "code_link_gift.ttphone",
        type: "string",
        description: "Số điện thoại của khách hàng",
        example: ``,
      },
      {
        parameter: "code_link_gift.city_id",
        type: "string",
        description: "Mã tỉnh thành",
        example: ``,
      },
      {
        parameter: "code_link_gift.district_id",
        type: "string",
        description: "Mã quận huyện",
        example: ``,
      },
      {
        parameter: "code_link_gift.ward_id",
        type: "string",
        description: "Mã phường xã",
        example: ``,
      },
      {
        parameter: "code_link_gift.ttaddress",
        type: "string",
        description: "Địa chỉ cụ thể",
        example: ``,
      },
      {
        parameter: "code_link_gift.delivery_note",
        type: "string",
        description: "Ghi chú giao hàng",
        example: ``,
      },
    ],
    exampleResponse: `{
  "success": true,
  "data": {
    "campaign_code": "UG404578",
    "cart": {
      "cartNo": "282745",
      "code_link_gift": [
        {
          "card_id": 0,
          "cart_detail_id": "521791",
          "city_id": 22,
          "code": "UB239804238",
          "code_display": "Barcode, QRcode",
          "code_display_type": 5,
          "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB239804238",
          "deliveryCode": 1,
          "delivery_note": "Delivery note",
          "district_id": 25,
          "estimateDelivery": "",
          "expired": "Vô hạn",
          "expired_time": 0,
          "gift_id": "1501",
          "link": "https://sand.urbox.dev/nhan-qua/a1f1fe300b5c134f3f581907607b5d33.html",
          "pin": "",
          "price": 10000,
          "priceId": "4623",
          "receive_code": "a1f1fe300b5c134f3f581907607b5d33",
          "serial": "976126",
          "token": "a1f1fe300b5c134f3f581907607b5d33",
          "ttaddress": "số 11",
          "ttemail": "tt@gmail.com",
          "ttphone": "0368210752",
          "type": 1,
          "urcard_id": 0,
          "valid_time": 0,
          "ward_id": 329
        },
        {
          "card_id": 0,
          "cart_detail_id": "521792",
          "city_id": 22,
          "code": "UB994283292",
          "code_display": "Barcode, QRcode",
          "code_display_type": 5,
          "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB994283292",
          "deliveryCode": 1,
          "delivery_note": "Delivery note",
          "district_id": 25,
          "estimateDelivery": "",
          "expired": "Vô hạn",
          "expired_time": 0,
          "gift_id": "1501",
          "link": "https://sand.urbox.dev/nhan-qua/03ec57fd32f7d8eec4a46d3b034fc24f.html",
          "pin": "",
          "price": 10000,
          "priceId": "4623",
          "receive_code": "03ec57fd32f7d8eec4a46d3b034fc24f",
          "serial": "9837171",
          "token": "03ec57fd32f7d8eec4a46d3b034fc24f",
          "ttaddress": "số 11",
          "ttemail": "tt@gmail.com",
          "ttphone": "0368210752",
          "type": 1,
          "urcard_id": 0,
          "valid_time": 0,
          "ward_id": 329
        },
        {
          "card_id": 0,
          "cart_detail_id": "521793",
          "city_id": 22,
          "code": "UB979580347",
          "code_display": "Barcode, QRcode",
          "code_display_type": 5,
          "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB979580347",
          "deliveryCode": 1,
          "delivery_note": "Delivery note",
          "district_id": 25,
          "estimateDelivery": "",
          "expired": "Vô hạn",
          "expired_time": 0,
          "gift_id": "1501",
          "link": "https://sand.urbox.dev/nhan-qua/038bff9d1addf6b596e7f1d7c6102462.html",
          "pin": "",
          "price": 10000,
          "priceId": "4623",
          "receive_code": "038bff9d1addf6b596e7f1d7c6102462",
          "serial": "656001",
          "token": "038bff9d1addf6b596e7f1d7c6102462",
          "ttaddress": "số 11",
          "ttemail": "tt@gmail.com",
          "ttphone": "0368210752",
          "type": 1,
          "urcard_id": 0,
          "valid_time": 0,
          "ward_id": 329
        },
        {
          "card_id": 0,
          "cart_detail_id": "521794",
          "city_id": 22,
          "code": "UB381918110",
          "code_display": "Barcode, QRcode",
          "code_display_type": 5,
          "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB381918110",
          "deliveryCode": 1,
          "delivery_note": "Delivery note",
          "district_id": 25,
          "estimateDelivery": "",
          "expired": "Vô hạn",
          "expired_time": 0,
          "gift_id": "1501",
          "link": "https://sand.urbox.dev/nhan-qua/d00e40671b6e39a094e267548be5533c.html",
          "pin": "",
          "price": 10000,
          "priceId": "4623",
          "receive_code": "d00e40671b6e39a094e267548be5533c",
          "serial": "596213",
          "token": "d00e40671b6e39a094e267548be5533c",
          "ttaddress": "số 11",
          "ttemail": "tt@gmail.com",
          "ttphone": "0368210752",
          "type": 1,
          "urcard_id": 0,
          "valid_time": 0,
          "ward_id": 329
        },
        {
          "card_id": 0,
          "cart_detail_id": "521795",
          "city_id": 22,
          "code": "UB588268063",
          "code_display": "Barcode, QRcode",
          "code_display_type": 5,
          "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB588268063",
          "deliveryCode": 1,
          "delivery_note": "Delivery note",
          "district_id": 25,
          "estimateDelivery": "",
          "expired": "Vô hạn",
          "expired_time": 0,
          "gift_id": "1501",
          "link": "https://sand.urbox.dev/nhan-qua/566f83b4cd755fbfd511e35c1b558b0d.html",
          "pin": "",
          "price": 10000,
          "priceId": "4623",
          "receive_code": "566f83b4cd755fbfd511e35c1b558b0d",
          "serial": "3690858",
          "token": "566f83b4cd755fbfd511e35c1b558b0d",
          "ttaddress": "số 11",
          "ttemail": "tt@gmail.com",
          "ttphone": "0368210752",
          "type": 1,
          "urcard_id": 0,
          "valid_time": 0,
          "ward_id": 329
        },
        {
          "card_id": 0,
          "cart_detail_id": "521796",
          "city_id": 22,
          "code": "UB113885174",
          "code_display": "Barcode, QRcode",
          "code_display_type": 5,
          "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB113885174",
          "deliveryCode": 1,
          "delivery_note": "Delivery note",
          "district_id": 25,
          "estimateDelivery": "",
          "expired": "Vô hạn",
          "expired_time": 0,
          "gift_id": "1501",
          "link": "https://sand.urbox.dev/nhan-qua/d5956c425f657e8a767c4c2590ca2e5d.html",
          "pin": "",
          "price": 10000,
          "priceId": "4623",
          "receive_code": "d5956c425f657e8a767c4c2590ca2e5d",
          "serial": "8137952",
          "token": "d5956c425f657e8a767c4c2590ca2e5d",
          "ttaddress": "số 11",
          "ttemail": "tt@gmail.com",
          "ttphone": "0368210752",
          "type": 1,
          "urcard_id": 0,
          "valid_time": 0,
          "ward_id": 329
        },
        {
          "card_id": 0,
          "cart_detail_id": "521797",
          "city_id": 22,
          "code": "UB284244286",
          "code_display": "Barcode, QRcode",
          "code_display_type": 5,
          "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB284244286",
          "deliveryCode": 1,
          "delivery_note": "Delivery note",
          "district_id": 25,
          "estimateDelivery": "",
          "expired": "Vô hạn",
          "expired_time": 0,
          "gift_id": "1501",
          "link": "https://sand.urbox.dev/nhan-qua/0db657b8a8fe2a2b4c8c5201aa0dfdd4.html",
          "pin": "",
          "price": 10000,
          "priceId": "4623",
          "receive_code": "0db657b8a8fe2a2b4c8c5201aa0dfdd4",
          "serial": "8934280",
          "token": "0db657b8a8fe2a2b4c8c5201aa0dfdd4",
          "ttaddress": "số 11",
          "ttemail": "tt@gmail.com",
          "ttphone": "0368210752",
          "type": 1,
          "urcard_id": 0,
          "valid_time": 0,
          "ward_id": 329
        },
        {
          "card_id": 0,
          "cart_detail_id": "521798",
          "city_id": 22,
          "code": "UB462805724",
          "code_display": "Barcode, QRcode",
          "code_display_type": 5,
          "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB462805724",
          "deliveryCode": 1,
          "delivery_note": "Delivery note",
          "district_id": 25,
          "estimateDelivery": "",
          "expired": "Vô hạn",
          "expired_time": 0,
          "gift_id": "1501",
          "link": "https://sand.urbox.dev/nhan-qua/bf6fe0d8f0e7fd5fc2adab7ec292be91.html",
          "pin": "",
          "price": 10000,
          "priceId": "4623",
          "receive_code": "bf6fe0d8f0e7fd5fc2adab7ec292be91",
          "serial": "4793920",
          "token": "bf6fe0d8f0e7fd5fc2adab7ec292be91",
          "ttaddress": "số 11",
          "ttemail": "tt@gmail.com",
          "ttphone": "0368210752",
          "type": 1,
          "urcard_id": 0,
          "valid_time": 0,
          "ward_id": 329
        },
        {
          "card_id": 0,
          "cart_detail_id": "521799",
          "city_id": 22,
          "code": "UB811987769",
          "code_display": "Barcode, QRcode",
          "code_display_type": 5,
          "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB811987769",
          "deliveryCode": 1,
          "delivery_note": "Delivery note",
          "district_id": 25,
          "estimateDelivery": "",
          "expired": "Vô hạn",
          "expired_time": 0,
          "gift_id": "1501",
          "link": "https://sand.urbox.dev/nhan-qua/1564b2e93b810d384ec7bfc7d168309a.html",
          "pin": "",
          "price": 10000,
          "priceId": "4623",
          "receive_code": "1564b2e93b810d384ec7bfc7d168309a",
          "serial": "2529979",
          "token": "1564b2e93b810d384ec7bfc7d168309a",
          "ttaddress": "số 11",
          "ttemail": "tt@gmail.com",
          "ttphone": "0368210752",
          "type": 1,
          "urcard_id": 0,
          "valid_time": 0,
          "ward_id": 329
        },
        {
          "card_id": 0,
          "cart_detail_id": "521800",
          "city_id": 22,
          "code": "UB366901529",
          "code_display": "Barcode, QRcode",
          "code_display_type": 5,
          "code_image": "https://dev.urbox.dev/v1/api/qrbarcode?code=UB366901529",
          "deliveryCode": 1,
          "delivery_note": "Delivery note",
          "district_id": 25,
          "estimateDelivery": "",
          "expired": "Vô hạn",
          "expired_time": 0,
          "gift_id": "1501",
          "link": "https://sand.urbox.dev/nhan-qua/0e16740ede7f1cab0267f55a9adeccf2.html",
          "pin": "",
          "price": 10000,
          "priceId": "4623",
          "receive_code": "0e16740ede7f1cab0267f55a9adeccf2",
          "serial": "4473048",
          "token": "0e16740ede7f1cab0267f55a9adeccf2",
          "ttaddress": "số 11",
          "ttemail": "tt@gmail.com",
          "ttphone": "0368210752",
          "type": 1,
          "urcard_id": 0,
          "valid_time": 0,
          "ward_id": 329
        }
      ],
      "id": "282745",
      "link_gift": [
        "https://sand.urbox.dev/nhan-qua/a1f1fe300b5c134f3f581907607b5d33.html",
        "https://sand.urbox.dev/nhan-qua/03ec57fd32f7d8eec4a46d3b034fc24f.html",
        "https://sand.urbox.dev/nhan-qua/038bff9d1addf6b596e7f1d7c6102462.html",
        "https://sand.urbox.dev/nhan-qua/d00e40671b6e39a094e267548be5533c.html",
        "https://sand.urbox.dev/nhan-qua/566f83b4cd755fbfd511e35c1b558b0d.html",
        "https://sand.urbox.dev/nhan-qua/d5956c425f657e8a767c4c2590ca2e5d.html",
        "https://sand.urbox.dev/nhan-qua/0db657b8a8fe2a2b4c8c5201aa0dfdd4.html",
        "https://sand.urbox.dev/nhan-qua/bf6fe0d8f0e7fd5fc2adab7ec292be91.html",
        "https://sand.urbox.dev/nhan-qua/1564b2e93b810d384ec7bfc7d168309a.html",
        "https://sand.urbox.dev/nhan-qua/0e16740ede7f1cab0267f55a9adeccf2.html"
      ],
      "money_ship": "0",
      "money_total": "100000"
    },
    "cart_created": "1745225623",
    "linkCart": "https://sand.urbox.dev/cart/35d6c58c24f17ac0dbcdaf7c121ba5bf.html?cart_no=282745",
    "linkCombo": "",
    "linkShippingInfo": "",
    "pay": 2,
    "transaction_id": "GRAARFFAAA5FAAAAAA"
  }
}`,
  },
];
